import { Component, For } from "solid-js";
import { Dynamic } from "solid-js/web";
import { LucideProps } from "lucide-solid";
import GraduationCapIcon from "lucide-solid/icons/graduation-cap";
import SchoolIcon from "lucide-solid/icons/school";
import CalendarIcon from "lucide-solid/icons/calendar";
import MapPinIcon from "lucide-solid/icons/map-pin";
import BriefcaseIcon from "lucide-solid/icons/briefcase";
import TrophyIcon from "lucide-solid/icons/trophy";
import AwardIcon from "lucide-solid/icons/award";
import SectionWrapper from "../section-wrapper";
import { Education, Educations, HighlightKind } from "./data";

const highlightIcons: Record<HighlightKind, Component<LucideProps>> = {
  internship: BriefcaseIcon,
  award: TrophyIcon,
  recognition: AwardIcon,
};

function EducationCard(props: { education: Education }) {
  return (
    <article class="hud-frame group flex flex-col overflow-hidden rounded-xl border bg-card/40 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-link/50 hover:shadow-lg">
      <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-link to-accent opacity-60 transition-opacity group-hover:opacity-100" />

      <div class="flex items-start gap-4">
        <span class="flex shrink-0 items-center justify-center w-12 h-12 rounded-lg bg-accent/15 text-link">
          <Dynamic
            component={props.education.kind === "university" ? GraduationCapIcon : SchoolIcon}
            size={24}
          />
        </span>
        <div class="min-w-0">
          <h3 class="text-xl font-semibold text-foreground">
            {props.education.institution}
          </h3>
          <p class="text-muted">{props.education.degree}</p>
        </div>
      </div>

      <div class="mt-4 flex flex-wrap items-center gap-2 text-sm">
        <span class="rounded-full bg-accent-soft px-3 py-1 font-semibold text-accent-soft-foreground">
          {props.education.score}
        </span>
        <span class="flex items-center gap-1.5 rounded-full border px-3 py-1 text-muted">
          <CalendarIcon size={14} />
          {props.education.period}
        </span>
        <span class="flex items-center gap-1.5 rounded-full border px-3 py-1 text-muted">
          <MapPinIcon size={14} />
          {props.education.location}
        </span>
      </div>

      <h4 class="mt-6 mb-3 font-pixel text-[9px] uppercase tracking-widest text-subtle">
        Unlocked
      </h4>
      <ul class="flex flex-col gap-3">
        <For each={props.education.highlights}>
          {(highlight) => (
            <li class="flex items-start gap-3">
              <span class="mt-0.5 flex shrink-0 items-center justify-center w-7 h-7 rounded-md bg-surface/60 border text-link">
                <Dynamic component={highlightIcons[highlight.kind]} size={14} />
              </span>
              <span class="flex-1 text-foreground">{highlight.text}</span>
              <time class="shrink-0 pt-0.5 text-sm text-subtle">{highlight.date}</time>
            </li>
          )}
        </For>
      </ul>
    </article>
  );
}

export default function EducationSection() {
  return (
    <SectionWrapper
      sectionName="Education"
      level={4}
      levelName="Training Grounds"
      tagline="Where I trained, grinded and levelled up my skills."
      class="bg-surface-alt"
    >
      <div class="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
        <For each={Educations}>
          {(education) => <EducationCard education={education} />}
        </For>
      </div>
    </SectionWrapper>
  );
}
