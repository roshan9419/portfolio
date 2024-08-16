import SchoolIcon from "@mui/icons-material/School";
import SectionWrapper from "../section-wrapper";
import { ReactNode } from "react";

export default function EducationSection() {
  const EducationCard = ({
    name,
    place,
    year,
    children,
  }: {
    name: string;
    place: string;
    year: string;
    children: ReactNode;
  }) => {
    return (
      <div className="p-6 w-[700px] max-w-full border-gray-700 border-2 bg-blue-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 shadow-md">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <SchoolIcon />
            <span className="font-serif text-2xl">{place}</span>
          </div>
          <time className="text-gray-500">{year}</time>
        </div>
        <p className="text-gray-400 text-sm">{name}</p>
        <ul className="list-disc list-inside mt-6 text-base font-normal">
          {children}
        </ul>
      </div>
    );
  };

  return (
    <SectionWrapper sectionName="Education">
      <div className="flex flex-col gap-6 justify-center items-center mt-10">
        <EducationCard
          name="Bachelor of Technology in Computer Science & Engineering, 8.62 CGPA"
          place="Lovely Professional University, Phagwara"
          year="2019 - 2023"
        >
          <li>
            Got Internship offer from LeadSquared as SDE Intern - Apr 2022
          </li>
          <li>
            Got Internship offer from Redbasil as Software Engineer Intern - Mar
            2021
          </li>
          <li>
            3rd Rank in CodeEd Online Hackathon conducted on HackerEarth - Nov
            2020
          </li>
          <li>
            1st Rank in WebMania 3.0 (College Event) with my partner - Mar 2020
          </li>
        </EducationCard>
        <EducationCard
          name="Non-medical, 89.8%"
          place="Army Public School, Hisar"
          year="2018 - 2019"
        >
          <li>Achieved Master Academics recognition on Farewell - Feb 2019</li>
          <li>2nd Rank in COFAS International Computer Event - Oct 2018</li>
        </EducationCard>
      </div>
    </SectionWrapper>
  );
}
