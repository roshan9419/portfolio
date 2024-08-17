import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import Logo from "./logo";
import { useState } from "react";

export default function Navbar() {
  const [isOpened, setIsOpened] = useState(false);

  const menus = [
    // "About",
    "Experience",
    "Projects",
    "Education",
    "Skills",
    "Contact",
  ];

  return (
    <nav className="w-full h-12 py-16 px-8 flex justify-evenly items-center max-md:justify-between">
      <Logo />
      <button className="max-md:block hidden p-2" onClick={() => setIsOpened(true)}>
        <MenuIcon />
      </button>
      <ul className="flex gap-6 font-bebas tracking-widest max-md:hidden">
        {menus.map((menu) => {
          return (
            <a
              href={`#${menu}`}
              key={menu}
              className="hover:text-blue-400 cursor-pointer"
            >
              {menu}
            </a>
          );
        })}
      </ul>
      {isOpened && (
        <div className="max-md:block hidden top-0 h-screen p-8 w-full right-0 z-50 bg-blue-900 absolute">
          <button className="float-right" onClick={() => setIsOpened(false)}>
            <CancelIcon fontSize="large" />
          </button>
          <ul className="flex gap-10 items-center mt-32 flex-col text-2xl font-bebas tracking-widest">
            {menus.map((menu) => {
              return (
                <a
                  href={`#${menu}`}
                  key={menu}
                  className="hover:text-blue-400 cursor-pointer"
                  onClick={() => setIsOpened(false)}
                >
                  {menu}
                </a>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
