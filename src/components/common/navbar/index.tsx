function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <img
        src="src/assets/me.png"
        width={40}
        height={40}
        className="rounded-full border-white border-2 filter grayscale hover:grayscale-0  transition duration-200 ease-in-out"
      />
      <p className="text-lg font-sans">Hi, Namaste 🙏</p>
    </div>
  );
}

export default function Navbar() {
  const menus = [
    "About",
    "Experience",
    "Projects",
    "Education",
    "Skills",
    "Contact",
  ];

  return (
    <div className="w-full h-12 p-16 flex justify-evenly items-center">
      <Logo />
      <ul className="flex gap-6 font-bebas tracking-widest">
        {menus.map((menu) => {
          return (
            <a href={`#${menu}`} key={menu} className="hover:text-blue-400 cursor-pointer">
              {menu}
            </a>
          );
        })}
      </ul>
    </div>
  );
}
