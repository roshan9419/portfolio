export type Project = {
  name: string;
  category: string;
  year: string;
  description: string;
  imagePath: string;
  githubLink?: string;
  youtubeLink?: string;
  demoLink?: string;
  technologiesUsed: string[];
};

export const Projects: Project[] = [
  {
    name: "Personal Assistant - Chatbot",
    category: "Desktop App",
    year: "Sept 2020 - Oct 2020",
    description:
      "A virtual assistant with voice and text input, featuring image search, web automation, mini-games, and many more with OpenCV-based face security.",
    imagePath:
      "https://roshan9419.github.io/portfolio/images/projects/chatbot.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=tbw7VyBGSw0",
    githubLink: "https://github.com/roshan9419/PersonalAssistantChatbot",
    technologiesUsed: ["Python", "OpenCV", "Tkinter"],
  },
  {
    name: "Job Lister - Website",
    category: "Web App",
    year: "Oct 2021",
    description:
      "A platform for employers to list job openings and job seekers to search and apply, offering job management, advanced search filtering, and user authentication.",
    imagePath:
      "https://raw.githubusercontent.com/roshan9419/job-lister/master/readme_images/home.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=wYtcJZBaiFE",
    githubLink: "https://github.com/roshan9419/job-lister",
    technologiesUsed: ["Laravel", "Bootstrap", "MySQL", "GCP"],
  },
  {
    name: "ProbDiscuss - QnA Website",
    category: "Web App",
    year: "Oct 2021",
    description:
      "QnA platform for professionals and students, facilitating problem-solving through question posting and discussion, powered by a search system.",
    imagePath:
      "https://roshan9419.github.io/portfolio/images/projects/probdiscuss.jpg",
    demoLink: "https://probdiscuss-qna.web.app/",
    githubLink: "https://github.com/roshan9419/prob-discuss",
    technologiesUsed: ["Angular", "Bootstrap", "Firebase", "NodeJs", "Algolia"],
  },
  {
    name: "Sortlizer - Sorting Visualizer",
    category: "Mobile App",
    year: "May 2021 - Jun 2021",
    description:
      "A tool for students and programmers, for visualizing sorting algorithms with step-bystep sorting, custom input, detailed info and code implementation, and many more.",
    imagePath:
      "https://roshan9419.github.io/portfolio/images/projects/sortlizer.jpg",
    demoLink:
      "https://play.google.com/store/apps/details?id=com.programmingtech.sortlizer",
    githubLink: "https://github.com/roshan9419/Sortlizer",
    youtubeLink: "https://www.youtube.com/watch?v=g108TmmvwY0",
    technologiesUsed: ["Flutter"],
  },
  {
    name: "Cafy - The Office Cafeteria",
    category: "Mobile App",
    year: "Dec 2020",
    description:
      "An Android App for Office Employees to order their meal, with interactive & easy-to-use UI. Supports both Online and Offline",
    imagePath:
      "https://roshan9419.github.io/portfolio/images/projects/cafy.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=_nO0KRIcJdw",
    githubLink: "https://github.com/roshan9419/CafyTheOfficeCafeteria",
    technologiesUsed: ["Kotlin", "Firebase"],
  },
  {
    name: "Shop List",
    category: "Mobile App",
    year: "Apr 2020",
    description:
      "Android App to make Shopping list with text & voice input. Easily manageable items. Provides various safety options to protect",
    imagePath:
      "https://roshan9419.github.io/portfolio/images/projects/shoplist.jpg",
    demoLink:
      "https://play.google.com/store/apps/details?id=com.programmingtech.shoplist",
    youtubeLink: "https://www.youtube.com/watch?v=nkks57QigpY",
    githubLink: "https://github.com/roshan9419/ShopList",
    technologiesUsed: ["Kotlin", "Firebase"],
  },
  {
    name: "LearnEd - E-learning Website",
    category: "Web App",
    year: "Feb 2020",
    description:
      "An E-learning responsive website with interactive UI providing study related stuff like online videos, lectures, sample papers",
    imagePath:
      "https://roshan9419.github.io/portfolio/images/projects/learned.jpg",
    demoLink: "https://roshan9419.github.io/LearnEd_E-learning_Website/",
    githubLink: "https://github.com/roshan9419/LearnEd_E-learning_Website",
    technologiesUsed: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "Smart TMS",
    category: "Console App",
    year: "Nov 2019",
    description:
      "This Software helps you to managen the records of Challans used in Traffic Management System made using C++",
    imagePath:
      "https://roshan9419.github.io/portfolio/images/projects/traffic.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=vW9vdFv6MN8",
    githubLink: "https://github.com/roshan9419/smart_traffic",
    technologiesUsed: ["C++"],
  },
  {
    name: "Digi Library",
    category: "Desktop App",
    year: "Oct 2018 - Nov 2018",
    description:
      "Interactive Library Management Software made using JAVA & MySQL",
    imagePath:
      "https://roshan9419.github.io/portfolio/images/projects/digilibrary.jpg",
    githubLink: "https://github.com/roshan9419/Digi_Library",
    technologiesUsed: ["Java", "MySQL"],
  },
];
