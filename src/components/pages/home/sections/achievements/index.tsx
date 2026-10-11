import { For } from "solid-js";
import { Dynamic } from "solid-js/web";
import TrophyIcon from "lucide-solid/icons/trophy";
import CalendarIcon from "lucide-solid/icons/calendar";
import AwardIcon from "lucide-solid/icons/award";
import NewspaperIcon from "lucide-solid/icons/newspaper";
import SectionWrapper from "../section-wrapper";
import { Achievement, Achievements } from "./data";

const tierClasses = {
  gold: "bg-trophy-gold",
  silver: "bg-trophy-silver",
  bronze: "bg-trophy-bronze",
};

const linkIcons = {
  certificate: AwardIcon,
  press: NewspaperIcon,
};

function AchievementCard(props: { achievement: Achievement }) {
  return (
    <article class="hud-frame group flex flex-col overflow-hidden rounded-xl border bg-card/40 backdrop-blur-sm transition hover:-translate-y-1 hover:border-link/50 hover:shadow-lg">
      <div class="relative aspect-[16/10] overflow-hidden border-b bg-surface/60 px-4 pb-4 pt-12">
        <img
          src={props.achievement.image}
          alt={`${props.achievement.title} certificate`}
          loading="lazy"
          class="h-full w-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
        />
        <span
          class={`absolute left-3 top-3 flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold text-trophy-foreground shadow-md ${tierClasses[props.achievement.tier]}`}
        >
          <TrophyIcon size={14} />
          {props.achievement.rank}
        </span>
      </div>

      <div class="flex flex-1 flex-col p-6">
        <p class="mb-2 flex items-center gap-2 font-pixel text-[9px] uppercase tracking-widest text-link">
          <TrophyIcon size={12} />
          Achievement Unlocked
        </p>
        <h3 class="text-xl font-semibold text-foreground">{props.achievement.title}</h3>
        <p class="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-subtle">
          <span>{props.achievement.organizer}</span>
          <span class="flex items-center gap-1.5">
            <CalendarIcon size={14} />
            {props.achievement.date}
          </span>
        </p>
        <p class="mt-3 flex-1 text-muted">{props.achievement.description}</p>

        <div class="mt-5 flex flex-wrap gap-2">
          <For each={props.achievement.links}>
            {(link) => (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium text-link transition-colors hover:border-link hover:bg-accent/10"
              >
                <Dynamic component={linkIcons[link.kind]} size={14} />
                {link.label}
              </a>
            )}
          </For>
        </div>
      </div>
    </article>
  );
}

export default function AchievementSection() {
  return (
    <SectionWrapper
      sectionName="Achievements"
      level={5}
      levelName="Trophy Room"
      tagline="Trophies collected from hackathons and competitions."
      class="bg-surface-alt"
    >
      <div class="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
        <For each={Achievements}>
          {(achievement) => <AchievementCard achievement={achievement} />}
        </For>
      </div>
      <p class="mt-10 text-center text-sm text-subtle">
        Plus many more from my school and early college days.
      </p>
    </SectionWrapper>
  );
}
