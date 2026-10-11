import { JSX, Show } from "solid-js";

const buttonClass = "arcade-button mt-6 font-pixel text-xs uppercase tracking-widest";

type GlowingButtonProps = {
  text?: string;
  href?: string;
  onClick?: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent>;
  children?: JSX.Element;
};

export default function GlowingButton(props: GlowingButtonProps) {
  const face = () => (
    <span class="arcade-button-face">
      <span class="arcade-button-arrow" aria-hidden="true" />
      {props.text}
      {props.children}
    </span>
  );

  return (
    <Show
      when={props.href}
      fallback={
        <button onClick={props.onClick} class={buttonClass}>
          {face()}
        </button>
      }
    >
      {(href) => (
        <a href={href()} target="_blank" rel="noopener noreferrer" class={buttonClass}>
          {face()}
        </a>
      )}
    </Show>
  );
}
