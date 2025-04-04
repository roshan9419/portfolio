import { createSignal } from "solid-js";
import MenuIcon from "lucide-solid/icons/menu";
import CancelIcon from "lucide-solid/icons/circle-x";
import Logo from "./logo";

export default function Navbar() {
  const [isOpened, setIsOpened] = createSignal(false);

  const menus = [
    // "About",
    "Experience",
    "Projects",
    "Education",
    "Achievements",
    "Skills",
    "Contact",
  ];

  return (
    <nav class="w-full h-12 py-16 px-8 flex justify-evenly items-center max-md:justify-between">
      <Logo />
      <button class="max-md:block hidden p-2" onClick={() => setIsOpened(true)}>
        <MenuIcon />
      </button>
      <ul class="flex gap-6 font-bebas tracking-widest max-md:hidden">
        {menus.map((menu) => {
          return (
            <li>
              <a href={`#${menu}`} class="hover:text-blue-400 cursor-pointer">
                {menu}
              </a>
            </li>
          );
        })}
      </ul>
      {isOpened() && (
        <div class="max-md:block hidden top-0 h-screen p-8 w-full right-0 z-50 bg-blue-900 absolute">
          <button class="float-right" onClick={() => setIsOpened(false)}>
            <CancelIcon font-size="large" />
          </button>
          <ul class="flex gap-10 items-center mt-32 flex-col text-2xl font-bebas tracking-widest">
            {menus.map((menu) => {
              return (
                <li>
                  <a
                    href={`#${menu}`}
                    class="hover:text-blue-400 cursor-pointer"
                    onClick={() => setIsOpened(false)}
                  >
                    {menu}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
