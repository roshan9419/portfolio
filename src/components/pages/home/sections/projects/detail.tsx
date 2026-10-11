import { For, Show } from "solid-js";
import GitHubIcon from "lucide-solid/icons/github";
import YouTubeIcon from "lucide-solid/icons/youtube";
import LaunchIcon from "lucide-solid/icons/external-link";
import { Project } from "./data";

const pad = (value: number) => String(value).padStart(2, "0");

export default function ProjectDetail(props: {
  project: Project;
  questNumber: number;
  totalQuests: number;
}) {
  return (
    <article class="flex-1">
      <p class="mb-3 font-pixel text-[10px] uppercase tracking-widest text-link">
        Quest {pad(props.questNumber)}/{pad(props.totalQuests)}
      </p>
      <h3 class="font-bebas text-4xl text-neon">{props.project.name}</h3>
      <p class="text-muted text-lg">
        {props.project.year} | {props.project.category}
      </p>
      <For each={props.project.description}>
        {(desc) => <p class="mt-4">{desc}</p>}
      </For>
      <p class="mt-5 mb-2 font-pixel text-[9px] uppercase tracking-widest text-subtle">Loadout</p>
      <div class="flex flex-wrap gap-1">
        <For each={props.project.technologiesUsed}>
          {(tech) => (
            <span class="font-sans text-sm py-1 px-3 rounded-full bg-accent-soft text-accent-soft-foreground">
              {tech}
            </span>
          )}
        </For>
      </div>
      <div class="flex gap-2 mt-6">
        <Show when={props.project.youtubeLink}>
          {(link) => (
            <a
              href={link()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${props.project.name} on YouTube`}
              class="flex tracking-wider p-3 gap-2 h-10 shadow-md items-center text-lg font-bebas text-accent-foreground bg-brand-youtube/90 hover:bg-brand-youtube transition-colors"
            >
              <YouTubeIcon />
              <span class="mt-0.5">Watch</span>
            </a>
          )}
        </Show>
        <Show when={props.project.githubLink}>
          {(link) => (
            <a
              href={link()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${props.project.name} source code on GitHub`}
              class="flex tracking-wider p-3 gap-2 h-10 shadow-md items-center text-lg font-bebas text-accent-foreground bg-brand-github border border-foreground/10 hover:brightness-125 transition text-nowrap"
            >
              <GitHubIcon />
              <span class="mt-0.5">Source Code</span>
            </a>
          )}
        </Show>
        <Show when={props.project.demoLink}>
          {(link) => (
            <a
              href={link()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${props.project.name}`}
              class="flex shadow-inner p-3 gap-2 h-10 items-center text-lg font-bebas text-accent-foreground bg-accent hover:brightness-110 transition text-nowrap"
            >
              <LaunchIcon />
            </a>
          )}
        </Show>
      </div>
    </article>
  );
}
