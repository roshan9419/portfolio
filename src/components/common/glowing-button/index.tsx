export default function GlowingButton({ text }: { text: string }) {
  return (
    <button className="tracking-wider p-3 mt-5 text-lg transition-colors hover:bg-blue-600 font-bebas flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
      {text}
    </button>
  );
}
