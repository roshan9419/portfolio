import { createSignal } from "solid-js";

export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "theme";
const THEMES: Theme[] = ["dark", "light"];

const root = document.documentElement;
const [theme, setTheme] = createSignal<Theme>(
  root.classList.contains("light") ? "light" : "dark"
);

export { theme };

export function toggleTheme() {
  const next: Theme = theme() === "dark" ? "light" : "dark";
  root.classList.remove(...THEMES);
  root.classList.add(next);
  localStorage.setItem(THEME_STORAGE_KEY, next);
  setTheme(next);
}
