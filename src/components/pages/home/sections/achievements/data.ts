export type Achievement = {
  title: string;
  organizer: string;
  date: string;
  rank: string;
  tier: "gold" | "silver" | "bronze";
  description: string;
  image: string;
  links: { label: string; href: string; kind: "certificate" | "press" }[];
};

const ASSETS = "https://roshan9419.github.io/public-assets/images/achievements";

export const Achievements: Achievement[] = [
  {
    title: "CodeEd - Online Hackathon",
    organizer: "HackerEarth",
    date: "Nov 2020",
    rank: "3rd Place",
    tier: "bronze",
    description:
      "An online hackathon where I chose the E-learning track and built a website solving many everyday problems faced by students.",
    image: `${ASSETS}/codeed-hackathon.png`,
    links: [{ label: "Certificate", href: `${ASSETS}/codeed-hackathon.png`, kind: "certificate" }],
  },
  {
    title: "COFAS International Event",
    organizer: "City Montessori School",
    date: "Oct 2018",
    rank: "2nd Prize",
    tier: "silver",
    description:
      "An international event where schools from different countries participated. I won 2nd prize in the Senior category, and my team was featured in Amar Ujala.",
    image: `${ASSETS}/cofas-certificate.jpg`,
    links: [
      { label: "Certificate", href: `${ASSETS}/cofas-certificate.jpg`, kind: "certificate" },
      { label: "Newspaper", href: `${ASSETS}/cofas-news.png`, kind: "press" },
    ],
  },
];
