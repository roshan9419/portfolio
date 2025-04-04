import { createSignal } from "solid-js";
import ProjectDetail from "./detail";
import ProjectSlider from "./slider";
import { Projects } from "./data";
import SectionWrapper from "../section-wrapper";

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = createSignal(Projects[0]);

  return (
    <SectionWrapper
      sectionName="Projects"
      className="bg-slate-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90"
    >
      <div class="mt-20 gap-10 flex justify-between items-center px-14 max-lg:px-0 max-lg:flex-col">
        <ProjectDetail project={currentProject} />
        <ProjectSlider
          onChange={(e: number) => {
            setCurrentProject(Projects[e]);
          }}
        />
      </div>
    </SectionWrapper>
  );
}
