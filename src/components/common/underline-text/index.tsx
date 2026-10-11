import { Show } from "solid-js";

export default function UnderlineText(props: {
  text: string;
  headingId?: string;
  eyebrow?: string;
  tagline?: string;
}) {
  return (
    <div class="flex flex-col justify-center items-center mt-5 text-center">
      <Show when={props.eyebrow}>
        <p class="mb-3 font-pixel text-[10px] uppercase tracking-widest text-link">
          {props.eyebrow}
        </p>
      </Show>
      <h2 id={props.headingId} class="font-bebas text-6xl text-neon">{props.text}</h2>
      <div class="flex items-center gap-1.5 mt-3">
        <span class="w-1.5 h-1.5 bg-accent/60" />
        <span class="w-8 h-1.5 bg-accent" />
        <span class="w-1.5 h-1.5 bg-accent/60" />
      </div>
      <Show when={props.tagline}>
        <p class="mt-4 max-w-xl text-muted">{props.tagline}</p>
      </Show>
    </div>
  );
}
