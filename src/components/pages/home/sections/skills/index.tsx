import { For } from "solid-js";
import { Dynamic } from "solid-js/web";
import SectionWrapper from "../section-wrapper";
import { SkillCategories, SkillCategory } from "./data";

// icons8 sets third-party ad cookies on credentialed image requests; it serves CORS headers, other icon hosts don't.
const ICONS8_URL = "https://img.icons8.com/";

function SkillCard(props: { category: SkillCategory }) {
  return (
    <div class="hud-frame rounded-xl border bg-card/40 p-6 backdrop-blur-sm transition-colors hover:border-link/50 md:[&:last-child:nth-child(odd)]:col-span-2">
      <div class="flex items-center gap-3 mb-5">
        <span class="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/15 text-link">
          <Dynamic component={props.category.icon} size={20} />
        </span>
        <h3 class="font-bebas text-2xl tracking-wider text-foreground">
          {props.category.title}
        </h3>
        <span class="ms-auto font-pixel text-[10px] text-subtle">
          x{props.category.skills.length}
        </span>
      </div>
      <ul class="flex flex-wrap gap-2">
        <For each={props.category.skills}>
          {(skill) => (
            <li data-sound-hover class="flex items-center gap-2 rounded-lg border bg-surface/60 py-1.5 ps-1.5 pe-3 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:border-link/60 hover:bg-accent/10">
              <span class="flex items-center justify-center w-7 h-7 rounded-md bg-logo-tile p-1">
                <img
                  width={20}
                  height={20}
                  loading="lazy"
                  src={skill.iconUrl}
                  crossOrigin={skill.iconUrl.startsWith(ICONS8_URL) ? "anonymous" : undefined}
                  alt=""
                />
              </span>
              {skill.name}
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <SectionWrapper
      sectionName="Skills"
      level={2}
      levelName="Inventory"
      tagline="Every language, framework and tool I have unlocked along the way."
      class="bg-surface-alt"
    >
      <div class="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
        <For each={SkillCategories}>
          {(category) => <SkillCard category={category} />}
        </For>
      </div>
    </SectionWrapper>
  );
}
