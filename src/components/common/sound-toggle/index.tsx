import { Show } from "solid-js";
import VolumeOnIcon from "lucide-solid/icons/volume-2";
import VolumeOffIcon from "lucide-solid/icons/volume-x";
import { soundEnabled, toggleSound } from "../../../utils/sound";

export default function SoundToggle() {
  const label = () => (soundEnabled() ? "Mute sound effects" : "Unmute sound effects");

  return (
    <button
      type="button"
      onClick={toggleSound}
      aria-label={label()}
      aria-pressed={soundEnabled()}
      title={label()}
      class="flex items-center justify-center w-9 h-9 rounded-full border text-foreground transition-colors hover:border-link hover:text-link"
    >
      <Show when={soundEnabled()} fallback={<VolumeOffIcon size={18} />}>
        <VolumeOnIcon size={18} />
      </Show>
    </button>
  );
}
