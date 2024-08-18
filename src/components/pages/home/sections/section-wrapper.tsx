import { ReactNode } from "react";
import UnderlineText from "../../../common/underline-text";
import clsx from "clsx";

export default function SectionWrapper({
  sectionName,
  children,
  className,
}: {
  sectionName: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div id={sectionName} className={clsx("w-full min-h-screen p-10", className)}>
      <UnderlineText text={sectionName} />
      {children}
    </div>
  );
}
