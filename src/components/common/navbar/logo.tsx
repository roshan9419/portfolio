export default function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <img
        src="https://roshan9419.github.io/public-assets/images/me.png"
        width={40}
        height={40}
        loading="lazy"
        className="rounded-full border-white border-2 filter grayscale hover:grayscale-0  transition duration-200 ease-in-out"
      />
      <p className="text-lg font-sans text-nowrap">Hi, Namaste 🙏</p>
    </div>
  );
}
