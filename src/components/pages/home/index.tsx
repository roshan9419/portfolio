// import AboutSection from "./sections/about";
import AchievementSection from "./sections/achievements";
import ContactSection from "./sections/contact";
import EducationSection from "./sections/education";
import ExperienceSection from "./sections/experience";
import IntroSection from "./sections/intro";
import ProjectsSection from "./sections/projects";
import SkillsSection from "./sections/skills";

function HomePage() {
  return (
    <>
      <IntroSection />
      <main>
        {/* <AboutSection /> */}
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <AchievementSection />
        <ContactSection />
      </main>
    </>
  );
}

export default HomePage;
