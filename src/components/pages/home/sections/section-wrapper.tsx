import { JSX } from "solid-js";
import clsx from "clsx";
import UnderlineText from "../../../common/underline-text";

export default function SectionWrapper({
  sectionName,
  children,
  className,
}: {
  sectionName: string;
  children: JSX.Element;
  className?: string;
}) {
  return (
    <div id={sectionName} class={clsx("w-full min-h-screen p-10", className)}>
      <UnderlineText text={sectionName} />
      {children}
    </div>
  );
}
