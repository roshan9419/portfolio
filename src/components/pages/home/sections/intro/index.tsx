import { For } from "solid-js";
import ChevronsDownIcon from "lucide-solid/icons/chevrons-down";
import FileTextIcon from "lucide-solid/icons/file-text";
import AnimatedText from "../../../../common/animated-text";
import GlowingButton from "../../../../common/glowing-button";
import Navbar from "../../../../common/navbar";
import SocialHandles from "./social-handles";

const playerStats = [
  { label: "Class", value: "Full-Stack Dev" },
  { label: "Level", value: "Software Engineer II" },
  { label: "Guild", value: "Zuora · Payments" },
];

function IntroSection() {
  return (
    <header class="relative h-screen">
      <Navbar />
      <div class="pt-[100px] relative">
        <div class="flex items-center justify-center flex-col">
          <p class="mb-4 flex items-center gap-2 font-pixel text-[10px] uppercase tracking-widest text-link">
            <span class="w-2 h-2 bg-link motion-safe:animate-blink" />
            Player 01 · Ready
          </p>
          <AnimatedText text="Roshan Kumar" />
          <p class="uppercase text-xl font-bebas tracking-wide text-center px-4">
            A passionate Software Engineer with extensive experience across
            multiple technologies.
          </p>
          <ul class="mt-5 flex flex-wrap justify-center gap-2 px-4">
            <For each={playerStats}>
              {(stat) => (
                <li class="flex items-center gap-2 rounded-md border bg-card/50 px-3 py-1.5 text-sm backdrop-blur-sm">
                  <span class="font-pixel text-[8px] uppercase tracking-widest text-subtle">
                    {stat.label}
                  </span>
                  <span class="font-medium text-foreground">{stat.value}</span>
                </li>
              )}
            </For>
          </ul>
          <GlowingButton href="https://roshan9419.github.io/public-assets/files/resume-2025.pdf">
            <FileTextIcon size={16} aria-hidden="true" />
            Check my Resume
          </GlowingButton>
        </div>
        <SocialHandles />
      </div>
      <a
        href="#Experience"
        class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-pixel text-[10px] uppercase tracking-widest text-foreground text-neon [@media(max-height:760px)]:hidden"
      >
        <span class="motion-safe:animate-blink">Press Start</span>
        <ChevronsDownIcon size={20} class="text-link motion-safe:animate-bounce" />
      </a>
    </header>
  );
}

export default IntroSection;
