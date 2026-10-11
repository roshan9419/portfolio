export default function Logo() {
  return (
    <div class="flex gap-2 items-center">
      <img
        src={`${import.meta.env.BASE_URL}avatar.png`}
        width={40}
        height={40}
        alt="Roshan Profile"
        class="rounded-full border-foreground border-2 filter grayscale hover:grayscale-0  transition duration-200 ease-in-out"
      />
      <p class="text-lg font-sans text-nowrap">Hi, Namaste 🙏</p>
    </div>
  );
}
