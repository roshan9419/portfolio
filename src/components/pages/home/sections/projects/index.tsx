import { useState } from "react";
import UnderlineText from "../../../../common/underline-text";
import ProjectDetail from "./detail";
import ProjectSlider from "./slider";
import { Projects } from "./data";

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(Projects[0]);

  return (
    <div className="w-full h-screen p-10">
      <UnderlineText text="Projects" />
      <div className="mt-20 gap-6 flex justify-between items-center px-14 max-lg:flex-col">
        <ProjectDetail project={currentProject} />
        <ProjectSlider
          onChange={(e: any) => {
            setCurrentProject(Projects[e]);
          }}
        />
      </div>
    </div>
  );
}
