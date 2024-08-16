import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GlowingButton from "../../../../common/glowing-button";
import SectionWrapper from "../section-wrapper";

export default function ContactSection() {
  return (
    <SectionWrapper
      sectionName="Contact"
      className="bg-slate-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90"
    >
      <div className="flex mt-10 p-5 max-lg:flex-col">
        <div className="flex-1 px-20">
          <h1 className="font-bebas text-4xl w-[300px]">
            Please check out my social handles
          </h1>

          <ul className="flex flex-col gap-3 mt-10">
            <li>
              <a
                href="https://www.linkedin.com/in/roshank9419/"
                className="flex w-fit items-center gap-2 text-lg"
              >
                <LinkedInIcon fontSize="large" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/roshan9419"
                className="flex w-fit items-center gap-2 text-lg"
              >
                <GitHubIcon fontSize="large" />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCEH77m_42j2-HHyfhprAMKA"
                className="flex w-fit items-center gap-2 text-lg"
              >
                <YouTubeIcon fontSize="large" />
                <span>YouTube</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 px-20">
          <form
            method="POST"
            action="mailto:roshank9419@gmail.com?subject=Contact request from Portfolio Website"
            className="flex flex-col gap-3"
          >
            <input
              type="text"
              name=""
              placeholder="What is your name?"
              required
              className="py-3 px-4 rounded-sm border"
            />
            
            <textarea
              name="message"
              placeholder="Please add some message here..."
              required
              className="h-[100px] py-3 px-4 rounded-sm border"
            ></textarea>
            <GlowingButton text="Send" />
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
