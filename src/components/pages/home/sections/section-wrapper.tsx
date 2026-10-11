import { JSX } from "solid-js";
import clsx from "clsx";
import UnderlineText from "../../../common/underline-text";

export default function SectionWrapper(props: {
  sectionName: string;
  level?: number;
  levelName?: string;
  tagline?: string;
  children: JSX.Element;
  class?: string;
}) {
  const headingId = () => `${props.sectionName}-heading`;

  return (
    <section
      id={props.sectionName}
      aria-labelledby={headingId()}
      class={clsx("hud-grid w-full px-6 py-20 md:px-10", props.class)}
    >
      <UnderlineText
        text={props.sectionName}
        headingId={headingId()}
        eyebrow={
          props.level
            ? `Level ${String(props.level).padStart(2, "0")} · ${props.levelName}`
            : undefined
        }
        tagline={props.tagline}
      />
      {props.children}
    </section>
  );
}
