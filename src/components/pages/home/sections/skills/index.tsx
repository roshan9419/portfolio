import GlowingButton from "../../../../common/glowing-button";
import SectionWrapper from "../section-wrapper";
import { Skills, Tools } from "./data";

export default function SkillsSection() {
  return (
    <SectionWrapper sectionName="Skills" className="bg-gray-900">
      <h2 class="text-3xl font-bebas text-blue-400 mt-12">
        Languages & Frameworks
      </h2>
      <div class="flex gap-3 flex-wrap">
        {Skills.map((skill) => {
          return (
            <GlowingButton>
              <div class="flex gap-2 items-center ">
                <img
                  width={30}
                  height={30}
                  src={skill.iconUrl}
                  alt={`${skill.name} icon`}
                />
                <span class="text-1xl">{skill.name}</span>
              </div>
            </GlowingButton>
          );
        })}
      </div>
      <h2 class="text-3xl font-bebas text-blue-400 mt-12">Tools & Services</h2>
      <div class="flex gap-3 flex-wrap">
        {Tools.map((tool) => {
          return (
            <GlowingButton>
              <div class="flex gap-2 items-center ">
                <img
                  width={30}
                  height={30}
                  src={tool.iconUrl}
                  alt={`${tool.name} icon`}
                />
                <span class="text-1xl">{tool.name}</span>
              </div>
            </GlowingButton>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
