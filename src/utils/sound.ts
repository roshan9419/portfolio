import { createSignal } from "solid-js";

export const SOUND_STORAGE_KEY = "sound";
const INTERACTIVE_SELECTOR = "a[href], button:not(:disabled)";
const HOVER_SELECTOR = `${INTERACTIVE_SELECTOR}, [data-sound-hover]`;
const MIN_GAP_MS = 40;
const MASTER_VOLUME = 0.05;

type Tone = {
  from: number;
  to: number;
  delay?: number;
  duration: number;
  type?: OscillatorType;
};

const [soundEnabled, setSoundEnabled] = createSignal(
  localStorage.getItem(SOUND_STORAGE_KEY) !== "off"
);

export { soundEnabled };

let audio: AudioContext | undefined;
let lastPlayed = 0;

function unlockAudio() {
  audio ??= new AudioContext();
  if (audio.state === "suspended") void audio.resume();
}

function play(tones: Tone[]) {
  if (!soundEnabled() || !audio || audio.state !== "running") return;
  const now = performance.now();
  if (now - lastPlayed < MIN_GAP_MS) return;
  lastPlayed = now;

  const start = audio.currentTime;
  for (const tone of tones) {
    const at = start + (tone.delay ?? 0);
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.type = tone.type ?? "square";
    oscillator.frequency.setValueAtTime(tone.from, at);
    oscillator.frequency.exponentialRampToValueAtTime(tone.to, at + tone.duration);
    gain.gain.setValueAtTime(0.0001, at);
    gain.gain.exponentialRampToValueAtTime(MASTER_VOLUME, at + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, at + tone.duration);
    oscillator.connect(gain).connect(audio.destination);
    oscillator.start(at);
    oscillator.stop(at + tone.duration + 0.02);
  }
}

export const playHover = () => play([{ from: 880, to: 1320, duration: 0.05 }]);

export const playSelect = () =>
  play([
    { from: 660, to: 660, duration: 0.06 },
    { from: 990, to: 990, delay: 0.06, duration: 0.09 },
  ]);

export const playSwipe = () =>
  play([
    { from: 330, to: 990, duration: 0.09, type: "triangle" },
    { from: 1320, to: 1320, delay: 0.08, duration: 0.05 },
  ]);

export function toggleSound() {
  const next = !soundEnabled();
  localStorage.setItem(SOUND_STORAGE_KEY, next ? "on" : "off");
  setSoundEnabled(next);
  unlockAudio();
  if (next) void audio?.resume().then(playSelect);
}

const closestTarget = (event: Event, selector: string) =>
  (event.target as Element | null)?.closest?.(selector) ?? null;

const interactiveTarget = (event: Event) => closestTarget(event, INTERACTIVE_SELECTOR);

export function installInteractionSounds() {
  const onPointerOver = (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    const target = closestTarget(event, HOVER_SELECTOR);
    if (!target || target.contains(event.relatedTarget as Node | null)) return;
    playHover();
  };

  const onFocusIn = (event: FocusEvent) => {
    const target = interactiveTarget(event);
    if (target?.matches(":focus-visible")) playHover();
  };

  const onPointerDown = (event: PointerEvent) => {
    unlockAudio();
    if (interactiveTarget(event)) playSelect();
  };

  const onKeyDown = (event: KeyboardEvent) => {
    unlockAudio();
    if ((event.key === "Enter" || event.key === " ") && interactiveTarget(event)) playSelect();
  };

  document.addEventListener("pointerover", onPointerOver);
  document.addEventListener("focusin", onFocusIn);
  document.addEventListener("pointerdown", onPointerDown);
  document.addEventListener("keydown", onKeyDown);

  return () => {
    document.removeEventListener("pointerover", onPointerOver);
    document.removeEventListener("focusin", onFocusIn);
    document.removeEventListener("pointerdown", onPointerDown);
    document.removeEventListener("keydown", onKeyDown);
  };
}
