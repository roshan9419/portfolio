export default function Logo() {
  return (
    <div class="flex gap-2 items-center">
      <img
        src="https://roshan9419.github.io/public-assets/images/me.png"
        width={40}
        height={40}
        loading="lazy"
        class="rounded-full border-white border-2 filter grayscale hover:grayscale-0  transition duration-200 ease-in-out"
      />
      <p class="text-lg font-sans text-nowrap">Hi, Namaste 🙏</p>
    </div>
  );
}
