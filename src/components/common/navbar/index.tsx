import { createSignal, For, Show } from "solid-js";
import MenuIcon from "lucide-solid/icons/menu";
import CancelIcon from "lucide-solid/icons/circle-x";
import Logo from "./logo";
import ThemeToggle from "../theme-toggle";
import SoundToggle from "../sound-toggle";

const menus = [
  // "About",
  "Experience",
  "Skills",
  "Projects",
  "Education",
  "Achievements",
  "Contact",
];

export default function Navbar() {
  const [isOpened, setIsOpened] = createSignal(false);

  return (
    <nav class="w-full h-12 py-16 px-8 flex justify-evenly items-center max-md:justify-between">
      <Logo />
      <div class="flex items-center gap-6 max-md:gap-2">
        <ul class="flex gap-6 font-bebas tracking-widest max-md:hidden">
          <For each={menus}>
            {(menu) => (
              <li>
                <a href={`#${menu}`} class="hover:text-link">
                  {menu}
                </a>
              </li>
            )}
          </For>
        </ul>
        <SoundToggle />
        <ThemeToggle />
        <button
          class="max-md:block hidden p-2"
          aria-label="Open menu"
          aria-expanded={isOpened()}
          onClick={() => setIsOpened(true)}
        >
          <MenuIcon />
        </button>
      </div>
      <Show when={isOpened()}>
        <div class="max-md:block hidden top-0 h-screen p-8 w-full right-0 z-50 bg-overlay absolute">
          <button
            class="float-right"
            aria-label="Close menu"
            onClick={() => setIsOpened(false)}
          >
            <CancelIcon size={32} />
          </button>
          <ul class="flex gap-10 items-center mt-32 flex-col text-2xl font-bebas tracking-widest">
            <For each={menus}>
              {(menu) => (
                <li>
                  <a
                    href={`#${menu}`}
                    class="hover:text-link"
                    onClick={() => setIsOpened(false)}
                  >
                    {menu}
                  </a>
                </li>
              )}
            </For>
          </ul>
        </div>
      </Show>
    </nav>
  );
}
