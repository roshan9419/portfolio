import AnimatedText from "../../../../common/animated-text";
import GlowingButton from "../../../../common/glowing-button";
import Navbar from "../../../../common/navbar";

function IntroSection() {
  return (
    <>
      <Navbar />
      <div className="pt-[120px] h-screen">
        <div className="flex items-center justify-center flex-col">
          <AnimatedText text="Roshan Kumar" />
          <p className="uppercase text-xl font-bebas tracking-wide">
            A passionate Software Engineer with extensive experience across
            multiple technologies.
          </p>
          <a href="https://roshan9419.github.io/public-assets/files/resume.pdf" target="_blank" rel="noopener noreferrer">
            <GlowingButton text="Check my Resume" />
          </a>
        </div>
      </div>
    </>
  );
}

export default IntroSection;
