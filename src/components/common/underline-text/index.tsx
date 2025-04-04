export default function UnderlineText({ text }: { text: string }) {
  return (
    <div class="flex flex-col justify-center items-center mt-5">
      <h1 class="font-bebas text-6xl">{text}</h1>
      <div class="w-8 h-1.5 mt-3 bg-primary"></div>
    </div>
  );
}
