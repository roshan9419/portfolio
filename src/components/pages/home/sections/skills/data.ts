import { Component } from "solid-js";
import { LucideProps } from "lucide-solid";
import CodeIcon from "lucide-solid/icons/code-xml";
import ServerIcon from "lucide-solid/icons/server";
import GlobeIcon from "lucide-solid/icons/globe";
import SmartphoneIcon from "lucide-solid/icons/smartphone";
import DatabaseIcon from "lucide-solid/icons/database";
import CloudIcon from "lucide-solid/icons/cloud";
import WrenchIcon from "lucide-solid/icons/wrench";

export type Skill = {
  name: string;
  iconUrl: string;
};

export type SkillCategory = {
  title: string;
  icon: Component<LucideProps>;
  skills: Skill[];
};

export const SkillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: CodeIcon,
    skills: [
      { name: "Java", iconUrl: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" },
      { name: "C#", iconUrl: "https://img.icons8.com/color/48/c-sharp-logo.png" },
      { name: "JavaScript", iconUrl: "https://img.icons8.com/color/48/javascript.png" },
      { name: "TypeScript", iconUrl: "https://img.icons8.com/color/48/typescript.png" },
      { name: "Python", iconUrl: "https://img.icons8.com/fluency/48/python.png" },
      { name: "C++", iconUrl: "https://img.icons8.com/fluency/48/c-plus-plus-logo.png" },
      { name: "Dart", iconUrl: "https://img.icons8.com/color/48/dart.png" },
      { name: "HTML", iconUrl: "https://img.icons8.com/color/48/html-5--v1.png" },
      { name: "CSS", iconUrl: "https://img.icons8.com/color/48/css3.png" },
    ],
  },
  {
    title: "Backend Development",
    icon: ServerIcon,
    skills: [
      { name: "Spring Boot", iconUrl: "https://img.icons8.com/color/48/spring-logo.png" },
      { name: "ASP .Net / Core", iconUrl: "https://img.icons8.com/color/48/net-framework.png" },
      { name: "Node Js", iconUrl: "https://img.icons8.com/color/48/nodejs.png" },
      { name: "Bun Js", iconUrl: "https://cdn.simpleicons.org/bun" },
      { name: "Flask", iconUrl: "https://img.icons8.com/ios/50/flask.png" },
    ],
  },
  {
    title: "Web Development",
    icon: GlobeIcon,
    skills: [
      { name: "React Js", iconUrl: "https://img.icons8.com/color/48/react-native.png" },
      { name: "Next Js", iconUrl: "https://img.icons8.com/color/48/nextjs.png" },
      { name: "Tailwind CSS", iconUrl: "https://img.icons8.com/color/48/tailwind_css.png" },
      { name: "Bootstrap", iconUrl: "https://img.icons8.com/color/48/bootstrap--v2.png" },
      { name: "jQuery", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
    ],
  },
  {
    title: "App Development",
    icon: SmartphoneIcon,
    skills: [
      { name: "Flutter", iconUrl: "https://img.icons8.com/color/48/flutter.png" },
      { name: "Kotlin", iconUrl: "https://img.icons8.com/color/48/kotlin.png" },
    ],
  },
  {
    title: "Databases",
    icon: DatabaseIcon,
    skills: [
      { name: "MySQL", iconUrl: "https://img.icons8.com/color/48/mysql-logo.png" },
      { name: "Redis", iconUrl: "https://img.icons8.com/color/48/redis--v1.png" },
      { name: "DynamoDB", iconUrl: "https://icon.icepanel.io/AWS/svg/Database/DynamoDB.svg" },
      { name: "Firestore", iconUrl: "https://img.icons8.com/color/48/cloud-firestore.png" },
    ],
  },
  {
    title: "Cloud Services",
    icon: CloudIcon,
    skills: [
      { name: "AWS", iconUrl: "https://img.icons8.com/color/48/amazon-web-services.png" },
      { name: "Lambda", iconUrl: "https://icon.icepanel.io/AWS/svg/Compute/Lambda.svg" },
      { name: "S3", iconUrl: "https://img.icons8.com/color/48/amazon-s3.png" },
      { name: "Route53", iconUrl: "https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/Route-53.svg" },
      { name: "CDN", iconUrl: "https://img.icons8.com/fluency/48/network.png" },
      { name: "Load Balancers", iconUrl: "https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/Elastic-Load-Balancing.svg" },
      { name: "ELK Stack", iconUrl: "https://cdn.simpleicons.org/elasticstack" },
      { name: "GCP", iconUrl: "https://img.icons8.com/color/48/google-cloud.png" },
      { name: "Firebase", iconUrl: "https://img.icons8.com/color/48/google-firebase-console.png" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: WrenchIcon,
    skills: [
      { name: "Git", iconUrl: "https://img.icons8.com/color/48/git.png" },
      { name: "Jira", iconUrl: "https://img.icons8.com/color/48/jira.png" },
      { name: "Postman", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "New Relic", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/newrelic/newrelic-original.svg" },
      { name: "Kibana", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kibana/kibana-original.svg" },
      { name: "IntelliJ", iconUrl: "https://img.icons8.com/color/48/intellij-idea.png" },
      { name: "VS Code", iconUrl: "https://img.icons8.com/color/48/visual-studio-code-2019.png" },
      { name: "Visual Studio", iconUrl: "https://img.icons8.com/fluency/48/visual-studio.png" },
      { name: "Android Studio", iconUrl: "https://img.icons8.com/color/48/android-studio--v3.png" },
    ],
  },
];
