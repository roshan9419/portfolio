import { Show } from "solid-js";
import SunIcon from "lucide-solid/icons/sun";
import MoonIcon from "lucide-solid/icons/moon";
import { theme, toggleTheme } from "../../../utils/theme";

export default function ThemeToggle() {
  const isDark = () => theme() === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark() ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark() ? "Switch to light theme" : "Switch to dark theme"}
      class="flex items-center justify-center w-9 h-9 rounded-full border text-foreground transition-colors hover:border-link hover:text-link"
    >
      <Show when={isDark()} fallback={<MoonIcon size={18} />}>
        <SunIcon size={18} />
      </Show>
    </button>
  );
}
