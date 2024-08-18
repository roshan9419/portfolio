import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { SocialHandlesConstants } from "../../../../../utils/constants";

export default function SocialHandles() {
  return (
    <div className="flex gap-8 max-md:flex-row flex-col top-20 right-20 max-md:right-0 max-md:relative absolute justify-center">
      <a
        href={SocialHandlesConstants.LINKEDIN}
        target="_blank"
        className="border hover:bg-[#0077B5] bg-[#0077B530] border-[#0077B5] px-2.5 py-2 rounded-md rotate-45 transition-[background] hover:shadow-[0_0_2px_#fff,0_0_5px_#0077B5,0_0_15px_#0077B5,0_0_30px_#0077B5]"
      >
        <LinkedInIcon className="-rotate-45" />
      </a>
      <a
        href={SocialHandlesConstants.GITHUB}
        target="_blank"
        className="border hover:bg-[#2b3137] bg-[#2b313730] border-[#2b3137] px-2.5 py-2 rounded-md rotate-45 hover:shadow-[0_0_2px_#fff,0_0_5px_#2b3137,0_0_15px_#2b3137,0_0_30px_#2b3137]"
      >
        <GitHubIcon className="-rotate-45" />
      </a>
      <a
        href={SocialHandlesConstants.YOUTUBE}
        target="_blank"
        className="border hover:bg-[#f00] bg-[#ff000030] border-[#f00] px-2.5 py-2 rounded-md rotate-45 hover:shadow-[0_0_2px_#fff,0_0_5px_#f00,0_0_15px_#f00,0_0_30px_#f00]"
      >
        <YouTubeIcon className="-rotate-45" />
      </a>
    </div>
  );
}
