import LinkedInIcon from "lucide-solid/icons/linkedin";
import GitHubIcon from "lucide-solid/icons/github";
import YouTubeIcon from "lucide-solid/icons/youtube";
import { SocialHandlesConstants } from "../../../../../utils/constants";

const handleClass =
  "border px-2.5 py-2 rounded-md rotate-45 transition hover:text-accent-foreground hover:shadow-lg";

export default function SocialHandles() {
  return (
    <div class="flex gap-8 max-md:flex-row flex-col top-20 right-20 max-md:right-0 max-md:relative absolute justify-center">
      <a
        aria-label="LinkedIn Profile"
        href={SocialHandlesConstants.LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        class={`${handleClass} border-brand-linkedin bg-brand-linkedin/20 hover:bg-brand-linkedin hover:shadow-brand-linkedin/60`}
      >
        <LinkedInIcon class="-rotate-45" />
      </a>
      <a
        aria-label="GitHub Profile"
        href={SocialHandlesConstants.GITHUB}
        target="_blank"
        rel="noopener noreferrer"
        class={`${handleClass} border-brand-github bg-brand-github/20 hover:bg-brand-github hover:shadow-brand-github/60`}
      >
        <GitHubIcon class="-rotate-45" />
      </a>
      <a
        aria-label="YouTube Channel"
        href={SocialHandlesConstants.YOUTUBE}
        target="_blank"
        rel="noopener noreferrer"
        class={`${handleClass} border-brand-youtube bg-brand-youtube/20 hover:bg-brand-youtube hover:shadow-brand-youtube/60`}
      >
        <YouTubeIcon class="-rotate-45" />
      </a>
    </div>
  );
}
