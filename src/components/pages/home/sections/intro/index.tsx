import AnimatedText from "../../../../common/animated-text";
import GlowingButton from "../../../../common/glowing-button";
import Navbar from "../../../../common/navbar";
import SocialHandles from "./social-handles";

function IntroSection() {
  return (
    <>
      <Navbar />
      <div class="pt-[120px] h-screen relative">
        <div class="flex items-center justify-center flex-col">
          <AnimatedText text="Roshan Kumar" />
          <p class="uppercase text-xl font-bebas tracking-wide text-center px-4">
            A passionate Software Engineer with extensive experience across
            multiple technologies.
          </p>
          <a
            href="https://roshan9419.github.io/public-assets/files/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GlowingButton text="Check my Resume" />
          </a>
        </div>
        <SocialHandles />
      </div>
    </>
  );
}

export default IntroSection;
