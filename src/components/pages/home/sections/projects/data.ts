export type Project = {
  name: string;
  category: string;
  year: string;
  description: string[];
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
    description: [
      "A virtual assistant with voice and text input, featuring image search, web automation, mini-games, and many more with OpenCV-based face security.",
      "Developed for one of my College projects and sold this to many students across worldwide. 😎",
    ],
    imagePath:
      "https://roshan9419.github.io/public-assets/images/projects/chatbot.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=tbw7VyBGSw0",
    githubLink: "https://github.com/roshan9419/PersonalAssistantChatbot",
    technologiesUsed: ["Python", "TKinter", "OpenCV"],
  },
  {
    name: "Job Lister - Website",
    category: "Web App",
    year: "Oct 2021",
    description: [
      "A platform for employers to list Job openings and Job seekers to search and apply, offering job management, advanced search filtering, and user authentication.",
      "Developed for one of my College projects.",
    ],
    imagePath:
      "https://roshan9419.github.io/public-assets/images/projects/job-lister.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=wYtcJZBaiFE",
    githubLink: "https://github.com/roshan9419/job-lister",
    technologiesUsed: ["Laravel", "PHP", "Bootstrap", "MySQL", "GCP"],
  },
  {
    name: "ProbDiscuss - QnA Website",
    category: "Web App",
    year: "Oct 2021",
    description: [
      "QnA platform for professionals and students, facilitating problem-solving through question posting and discussion, powered by a search system.",
      "Developed for one of my College projects where I took the inspiration from StackOverflow.",
    ],
    imagePath:
      "https://roshan9419.github.io/public-assets/images/projects/probdiscuss.jpg",
    demoLink: "https://probdiscuss-qna.web.app/",
    githubLink: "https://github.com/roshan9419/prob-discuss",
    technologiesUsed: ["Angular", "Bootstrap", "NodeJs", "Firebase", "Algolia"],
  },
  {
    name: "Sortlizer - Sorting Visualizer",
    category: "Mobile App",
    year: "May 2021 - Jun 2021",
    description: [
      "A tool for students and programmers, for visualizing sorting algorithms with step-by-step sorting, custom input, detailed info and code implementation, and many more.",
      "Developed for fun, learning and published to Google PlayStore. 😎",
    ],
    imagePath:
      "https://roshan9419.github.io/public-assets/images/projects/sortlizer.jpg",
    demoLink:
      "https://play.google.com/store/apps/details?id=com.programmingtech.sortlizer",
    githubLink: "https://github.com/roshan9419/Sortlizer",
    youtubeLink: "https://www.youtube.com/watch?v=g108TmmvwY0",
    technologiesUsed: ["Flutter", "AdobeXd"],
  },
  {
    name: "Cafy - The Office Cafeteria",
    category: "Mobile App",
    year: "Dec 2020",
    description: [
      "An Android App for Office employees to order their meal, with interactive & easy-to-use UI. Supports both Online and Offline.",
      "Developed for one of the online Hackathon conducted by HackerEarth.",
    ],
    imagePath:
      "https://roshan9419.github.io/public-assets/images/projects/cafy.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=_nO0KRIcJdw",
    githubLink: "https://github.com/roshan9419/CafyTheOfficeCafeteria",
    technologiesUsed: ["Kotlin", "Firebase", "AdobeXd"],
  },
  {
    name: "Shop List",
    category: "Mobile App",
    year: "Apr 2020",
    description: [
      "Android App to build Shopping list with text & voice input. Easily manageable items. Provides various safety options to protect customer in emergency situations",
      "Developed while learning App development and published my 1st App to Google PlayStore. 😎",
    ],
    imagePath:
      "https://roshan9419.github.io/public-assets/images/projects/shoplist.jpg",
    demoLink:
      "https://play.google.com/store/apps/details?id=com.programmingtech.shoplist",
    youtubeLink: "https://www.youtube.com/watch?v=nkks57QigpY",
    githubLink: "https://github.com/roshan9419/ShopList",
    technologiesUsed: ["Kotlin", "Firebase", "Google Maps"],
  },
  {
    name: "LearnEd - E-learning Website",
    category: "Web App",
    year: "Feb 2020",
    description: [
      "An E-learning responsive website with interactive UI providing study related stuff like Online videos, Online lectures, Sample papers of last 10 years, etc. Includes Daily Quizes and much more.",
      "Developed this for one my college projects and also won Online Hackathon conducted by HackerEarth. 😎",
    ],
    imagePath:
      "https://roshan9419.github.io/public-assets/images/projects/learned.jpg",
    demoLink: "https://roshan9419.github.io/LearnEd_E-learning_Website/",
    youtubeLink: "https://www.youtube.com/watch?v=KFyrgDO1WXk",
    githubLink: "https://github.com/roshan9419/LearnEd_E-learning_Website",
    technologiesUsed: ["HTML", "CSS", "Javascript", "Google Forms"],
  },
  {
    name: "Smart TMS - Traffic Management System",
    category: "Console App",
    year: "Nov 2019",
    description: [
      "This Software helps you to manage the records of Challans used in Traffic Management System. Display the booths across India with easy to file Challans.",
      "Developed for one my early College projects.",
    ],
    imagePath:
      "https://roshan9419.github.io/public-assets/images/projects/traffic.jpg",
    youtubeLink: "https://www.youtube.com/watch?v=vW9vdFv6MN8",
    githubLink: "https://github.com/roshan9419/smart_traffic",
    technologiesUsed: ["C++"],
  },
  {
    name: "Digi Library",
    category: "Desktop App",
    year: "Oct 2018 - Nov 2018",
    description: [
      "An Interactive Library Management Software built to handle all Library related functionalities.",
      "Developed this software for my 1st International School Event (COFAS) where I won 2nd prize. 😎",
    ],
    imagePath:
      "https://roshan9419.github.io/public-assets/images/projects/digilibrary.jpg",
    demoLink:
      "https://drive.google.com/file/d/1LeiA5lhWk9BNmQ_Xb9msMYb8ZWS4cGd8/view?usp=drivesdk",
    githubLink: "https://github.com/roshan9419/Digi_Library",
    technologiesUsed: ["Java", "MySQL", "Netbeans"],
  },
  {
    name: "Way to Home",
    category: "Desktop Game",
    year: "Oct 2020",
    description: [
      "A 2D Ball which is lost in the world, and you need to find a Way to his home. You'll get many obstacles in order to clear levels. It has Good graphics and sounds.",
      "Developed my 1st 2D Game with love and learning in Game development area. 😎",
    ],
    imagePath:
      "https://roshan9419.github.io/public-assets/images/projects/way-to-home.png",
    githubLink: "https://github.com/roshan9419/WayToHome",
    technologiesUsed: ["Unity3d", "C#"],
  },
];
