import { createEffect, on, onCleanup, onMount } from "solid-js";
import { theme } from "../../../utils/theme";

const GRID_SPACING = 0.65;
const GRID_JITTER = 0.24;
const Z_NEAR = 4;
const Z_FAR = 30;
const HORIZON = 0.45;
const WAVE_AMPLITUDE = 0.6;
const NODE_SIZE = 0.06;
const FRAME_INTERVAL_MS = 1000 / 30;

type Palette = {
  line: string;
  node: string;
  opacity: number;
  blend: GlobalCompositeOperation;
  sprite: HTMLCanvasElement;
};

function cssVar(style: CSSStyleDeclaration, name: string) {
  return style.getPropertyValue(name).trim();
}

function createGlowSprite(color: string) {
  const size = 64;
  const sprite = document.createElement("canvas");
  sprite.width = sprite.height = size;
  const ctx = sprite.getContext("2d")!;
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, `rgb(${color} / 1)`);
  gradient.addColorStop(0.15, `rgb(${color} / 0.9)`);
  gradient.addColorStop(0.4, `rgb(${color} / 0.25)`);
  gradient.addColorStop(1, `rgb(${color} / 0)`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  return sprite;
}

function readPalette(): Palette {
  const style = getComputedStyle(document.documentElement);
  const node = cssVar(style, "--color-terrain-node");
  return {
    line: cssVar(style, "--color-terrain-line"),
    node,
    opacity: parseFloat(cssVar(style, "--terrain-opacity")) || 1,
    blend: (cssVar(style, "--terrain-blend") || "source-over") as GlobalCompositeOperation,
    sprite: createGlowSprite(node),
  };
}

function waveHeight(x: number, z: number, t: number) {
  return (
    WAVE_AMPLITUDE *
    (Math.sin(x * 0.3 + t * 0.5) * Math.cos(z * 0.35 - t * 0.3) +
      0.5 * Math.sin(x * 0.7 + z * 0.4 + t * 0.8) +
      0.25 * Math.cos(x * 1.3 - z * 0.9 + t * 0.6))
  );
}

export default function TerrainBackground() {
  let canvas!: HTMLCanvasElement;

  onMount(() => {
    const ctx = canvas.getContext("2d")!;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let palette = readPalette();

    let width = 0;
    let height = 0;
    let focal = 0;
    let cameraHeight = 0;
    let cols = 0;
    let rows = 0;
    let baseX = new Float32Array();
    let baseZ = new Float32Array();
    let phase = new Float32Array();
    let screenX = new Float32Array();
    let screenY = new Float32Array();

    const buildGrid = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      focal = Math.max(width, height) * 0.6;
      cameraHeight = (height * (1 - HORIZON) * Z_NEAR) / focal;
      const halfWidth = ((width / 2) * Z_FAR) / focal + GRID_SPACING;
      cols = Math.ceil((2 * halfWidth) / GRID_SPACING) + 1;
      rows = Math.ceil((Z_FAR - Z_NEAR) / GRID_SPACING) + 1;

      const count = cols * rows;
      baseX = new Float32Array(count);
      baseZ = new Float32Array(count);
      phase = new Float32Array(count);
      screenX = new Float32Array(count);
      screenY = new Float32Array(count);
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const k = j * cols + i;
          baseX[k] = -halfWidth + i * GRID_SPACING + (Math.random() - 0.5) * GRID_JITTER * 2;
          baseZ[k] = Math.max(Z_NEAR * 0.9, Z_NEAR + j * GRID_SPACING + (Math.random() - 0.5) * GRID_JITTER * 2);
          phase[k] = Math.random() * Math.PI * 2;
        }
      }
    };

    const draw = (t: number) => {
      const horizonY = height * HORIZON;
      for (let k = 0; k < baseX.length; k++) {
        const z = baseZ[k];
        const scale = focal / z;
        screenX[k] = width / 2 + baseX[k] * scale;
        screenY[k] = horizonY + (cameraHeight - waveHeight(baseX[k], z, t)) * scale;
      }

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, width, height);

      const haze = ctx.createLinearGradient(0, horizonY - height * 0.15, 0, height);
      haze.addColorStop(0, `rgb(${palette.line} / 0)`);
      haze.addColorStop(0.25, `rgb(${palette.line} / ${0.12 * palette.opacity})`);
      haze.addColorStop(1, `rgb(${palette.line} / 0)`);
      ctx.fillStyle = haze;
      ctx.fillRect(0, horizonY - height * 0.15, width, height);

      ctx.globalCompositeOperation = palette.blend;
      ctx.strokeStyle = `rgb(${palette.line})`;

      for (let j = rows - 1; j >= 0; j--) {
        const depth = 1 - j / (rows - 1);
        ctx.globalAlpha = palette.opacity * (0.06 + 0.45 * depth * depth);
        ctx.lineWidth = 0.4 + 1.1 * depth;
        ctx.beginPath();
        for (let i = 0; i < cols; i++) {
          const a = j * cols + i;
          if (i < cols - 1) {
            ctx.moveTo(screenX[a], screenY[a]);
            ctx.lineTo(screenX[a + 1], screenY[a + 1]);
          }
          if (j < rows - 1) {
            const below = a + cols;
            ctx.moveTo(screenX[a], screenY[a]);
            ctx.lineTo(screenX[below], screenY[below]);
            if (i < cols - 1) {
              ctx.moveTo(screenX[a], screenY[a]);
              ctx.lineTo(screenX[below + 1], screenY[below + 1]);
            }
          }
        }
        ctx.stroke();

        for (let i = 0; i < cols; i++) {
          const k = j * cols + i;
          const radius = (NODE_SIZE * focal) / baseZ[k];
          const x = screenX[k];
          const y = screenY[k];
          if (x < -radius || x > width + radius || y < -radius || y > height + radius) continue;
          const twinkle = 0.6 + 0.4 * Math.sin(t * 1.5 + phase[k]);
          ctx.globalAlpha = palette.opacity * (0.15 + 0.85 * depth) * twinkle;
          ctx.drawImage(palette.sprite, x - radius, y - radius, radius * 2, radius * 2);
        }
      }
    };

    let frame = 0;
    let lastFrame = 0;
    const start = performance.now();
    const loop = (now: number) => {
      frame = requestAnimationFrame(loop);
      if (now - lastFrame < FRAME_INTERVAL_MS) return;
      lastFrame = now;
      draw((now - start) / 1000);
    };

    const render = () => {
      cancelAnimationFrame(frame);
      if (reducedMotion.matches) {
        draw(0);
      } else {
        frame = requestAnimationFrame(loop);
      }
    };

    const onResize = () => {
      buildGrid();
      render();
    };

    buildGrid();
    render();
    window.addEventListener("resize", onResize);
    reducedMotion.addEventListener("change", render);

    createEffect(
      on(
        theme,
        () => {
          palette = readPalette();
          if (reducedMotion.matches) draw(0);
        },
        { defer: true }
      )
    );

    onCleanup(() => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      reducedMotion.removeEventListener("change", render);
    });
  });

  return (
    <canvas
      ref={canvas}
      aria-hidden="true"
      class="fixed inset-0 -z-10 w-full h-full pointer-events-none"
    />
  );
}
