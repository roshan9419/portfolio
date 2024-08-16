import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./logo";

export default function Navbar() {
  const menus = [
    // "About",
    "Experience",
    "Projects",
    "Education",
    "Skills",
    "Contact",
  ];

  return (
    <nav className="w-full h-12 p-16 flex justify-evenly items-center max-md:justify-between">
      <Logo />
      <button className="max-md:block hidden">
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
    </nav>
  );
}
