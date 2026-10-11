import { createEffect } from "solid-js";
import { theme } from "./theme";

const HOTSPOT = 16;
const SVG_OPEN = "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'>";

const toHex = (channels: string) =>
  "#" +
  channels
    .trim()
    .split(/\s+/)
    .map((value) => Number(value).toString(16).padStart(2, "0"))
    .join("");

const outlined = (shape: string, color: string, outline: string) =>
  shape.replace("STROKE", `stroke='${outline}' stroke-width='4'`) +
  shape.replace("STROKE", `stroke='${color}' stroke-width='2'`);

const centerDot = (color: string, outline: string) =>
  `<circle cx='16' cy='16' r='2' fill='${color}' stroke='${outline}'/>`;

function crosshair(color: string, outline: string) {
  const arms = "<path d='M16 4v7M16 21v7M4 16h7M21 16h7' stroke-linecap='square' STROKE/>";
  return SVG_OPEN + outlined(arms, color, outline) + centerDot(color, outline) + "</svg>";
}

function lockOn(color: string, outline: string) {
  const ring = "<circle cx='16' cy='16' r='9' STROKE/>";
  const arms = "<path d='M16 2v7M16 23v7M2 16h7M23 16h7' stroke-linecap='square' STROKE/>";
  return (
    SVG_OPEN + outlined(ring, color, outline) + outlined(arms, color, outline) + centerDot(color, outline) + "</svg>"
  );
}

const asCursor = (svg: string, fallback: string) =>
  `url("data:image/svg+xml,${encodeURIComponent(svg)}") ${HOTSPOT} ${HOTSPOT}, ${fallback}`;

export function syncCursorWithTheme() {
  createEffect(() => {
    theme();
    const root = document.documentElement;
    const style = getComputedStyle(root);
    const token = (name: string) => toHex(style.getPropertyValue(name));
    const outline = token("--color-cursor-outline");

    root.style.setProperty("--cursor-default", asCursor(crosshair(token("--color-cursor"), outline), "crosshair"));
    root.style.setProperty("--cursor-target", asCursor(lockOn(token("--color-cursor-target"), outline), "pointer"));
  });
}
