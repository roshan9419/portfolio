export type HighlightKind = "internship" | "award" | "recognition";

export type Education = {
  institution: string;
  location: string;
  degree: string;
  score: string;
  period: string;
  kind: "university" | "school";
  highlights: { text: string; date: string; kind: HighlightKind }[];
};

export const Educations: Education[] = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "B.Tech in Computer Science & Engineering",
    score: "8.62 CGPA",
    period: "2019 - 2023",
    kind: "university",
    highlights: [
      { text: "Internship offer from LeadSquared as SDE Intern", date: "Apr 2022", kind: "internship" },
      { text: "Internship offer from Redbasil as Software Engineer Intern", date: "Mar 2021", kind: "internship" },
      { text: "3rd Rank in CodeEd Online Hackathon on HackerEarth", date: "Nov 2020", kind: "award" },
      { text: "1st Rank in WebMania 3.0 (College Event) with my partner", date: "Mar 2020", kind: "award" },
    ],
  },
  {
    institution: "Army Public School",
    location: "Hisar, Haryana",
    degree: "Senior Secondary (Non-medical)",
    score: "89.8%",
    period: "2018 - 2019",
    kind: "school",
    highlights: [
      { text: "Master Academics recognition at Farewell", date: "Feb 2019", kind: "recognition" },
      { text: "2nd Rank in COFAS International Computer Event", date: "Oct 2018", kind: "award" },
    ],
  },
];
