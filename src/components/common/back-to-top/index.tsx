import { createSignal, onCleanup, onMount } from "solid-js";
import clsx from "clsx";
import ChevronsUpIcon from "lucide-solid/icons/chevrons-up";

export default function BackToTop(props: { revealOn: string }) {
  const [visible, setVisible] = createSignal(false);

  onMount(() => {
    const section = document.getElementById(props.revealOn);
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting || entry.boundingClientRect.top < 0),
      { threshold: 0.15 }
    );
    observer.observe(section);
    onCleanup(() => observer.disconnect());
  });

  const scrollToTop = () => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      class={clsx(
        "hud-frame group fixed bottom-6 right-6 z-40 flex flex-col items-center gap-1 rounded-lg border border-link/50 bg-card/80 px-3 py-2.5 text-link backdrop-blur-sm transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-glow",
        visible() ? "visible translate-y-0 opacity-100" : "invisible translate-y-4 opacity-0"
      )}
    >
      <ChevronsUpIcon size={22} class="transition-transform group-hover:-translate-y-0.5" />
      <span class="font-pixel text-[8px] uppercase tracking-widest">Top</span>
    </button>
  );
}
