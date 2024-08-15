import AboutSection from "./sections/about";
import ContactSection from "./sections/contact";
import EducationSection from "./sections/education";
import ExperienceSection from "./sections/experience";
import IntroSection from "./sections/intro";
import ProjectsSection from "./sections/projects";
import SkillsSection from "./sections/skills";

function HomePage() {
  return (
    <div>
      <IntroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

export default HomePage;
