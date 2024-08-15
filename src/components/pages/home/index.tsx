import AboutSection from "./sections/about";
import IntoSection from "./sections/intro";
import ProjectsSection from "./sections/projects";

function HomePage() {
  return (
    <div>
      <IntoSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}

export default HomePage;
