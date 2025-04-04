import { JSX } from "solid-js";

export default function GlowingButton({
  text,
  onClick,
  children,
}: {
  text?: string;
  onClick?: any;
  children?: JSX.Element;
}) {
  return (
    <button
      onClick={onClick}
      class="tracking-wider px-5 py-3 mt-5 text-lg transition-colors hover:bg-primary font-bebas flex justify-center items-center text-sky-200 border-2 rounded-full border-sky-200 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
    >
      {text}
      {children}
    </button>
  );
}
