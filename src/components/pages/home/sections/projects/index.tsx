import { useState } from "react";
import ProjectDetail from "./detail";
import ProjectSlider from "./slider";
import { Projects } from "./data";
import SectionWrapper from "../section-wrapper";

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(Projects[0]);

  return (
    <SectionWrapper sectionName="Projects" className="bg-slate-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90">
      <div className="mt-20 gap-10 flex justify-between items-center px-14 max-lg:px-4 max-lg:flex-col">
        <ProjectDetail project={currentProject} />
        <ProjectSlider
          onChange={(e: any) => {
            setCurrentProject(Projects[e]);
          }}
        />
      </div>
    </SectionWrapper>
  );
}
