import GitHubIcon from "lucide-solid/icons/github";
import YouTubeIcon from "lucide-solid/icons/youtube";
import LaunchIcon from "lucide-solid/icons/external-link";
import { Project } from "./data";
import { Accessor } from "solid-js";

export default function ProjectDetail({ project }: { project: Accessor<Project> }) {
  return (
    <div class="flex-1">
      <h2 class="font-bebas text-4xl">{project().name}</h2>
      <p class="text-gray-400 text-lg">
        {project().year} | {project().category}
      </p>
      {project().description.map((desc) => {
        return <div class="mt-4">{desc}</div>;
      })}
      {project().technologiesUsed && (
        <div class="flex gap-1 mt-4">
          {project().technologiesUsed.map((tech) => {
            return (
              <span class="font-sans text-sm py-1 px-3 rounded-full bg-primary-dark text-primary-light">
                {tech}
              </span>
            );
          })}
        </div>
      )}
      <div class="flex gap-2 mt-6">
        {project().youtubeLink && (
          <a
            href={project().youtubeLink}
            target="_blank"
            class="flex tracking-wider p-3 gap-2 h-10 shadow-md items-center text-lg font-bebas bg-red-600"
          >
            <YouTubeIcon />
            <span class="mt-0.5">Watch</span>
          </a>
        )}
        {project().githubLink && (
          <a
            href={project().githubLink}
            target="_blank"
            class="flex tracking-wider p-3 gap-2 h-10 shadow-md items-center text-lg font-bebas bg-gray-900 text-nowrap"
          >
            <GitHubIcon />
            <span class="mt-0.5">Source Code</span>
          </a>
        )}
        {project().demoLink && (
          <a
            href={project().demoLink}
            target="_blank"
            class="flex shadow-inner p-3 gap-2 h-10 items-center text-lg font-bebas bg-blue-900 text-nowrap"
          >
            <LaunchIcon />
          </a>
        )}
      </div>
    </div>
  );
}
