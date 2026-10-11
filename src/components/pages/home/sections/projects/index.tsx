import { createSignal } from "solid-js";
import ProjectDetail from "./detail";
import ProjectSlider from "./slider";
import { Projects } from "./data";
import SectionWrapper from "../section-wrapper";

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = createSignal(0);

  return (
    <SectionWrapper
      sectionName="Projects"
      level={3}
      levelName="Quest Log"
      tagline="Side quests I took on to learn, build and ship real things."
      class="bg-surface/90 backdrop-blur-sm"
    >
      <div class="mt-20 gap-10 flex justify-between items-center px-14 max-lg:px-0 max-lg:flex-col">
        <ProjectDetail
          project={Projects[currentIndex()]}
          questNumber={currentIndex() + 1}
          totalQuests={Projects.length}
        />
        <ProjectSlider onChange={setCurrentIndex} />
      </div>
    </SectionWrapper>
  );
}
