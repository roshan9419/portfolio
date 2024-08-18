import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { Project } from "./data";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="flex-1">
      <h2 className="font-bebas text-4xl">{project.name}</h2>
      <p className="text-gray-400 text-lg">
        {project.year} | {project.category}
      </p>
      {project.description.map((desc) => {
        return <div className="mt-4">{desc}</div>;
      })}
      {project.technologiesUsed && (
        <div className="flex gap-1 mt-4">
          {project.technologiesUsed.map((tech) => {
            return (
              <span
                key={tech}
                className="font-sans text-sm py-1 px-3 rounded-full bg-primary-dark text-primary-light"
              >
                {tech}
              </span>
            );
          })}
        </div>
      )}
      <div className="flex gap-2 mt-6">
        {project.youtubeLink && (
          <a
            href={project.youtubeLink}
            target="_blank"
            className="flex tracking-wider p-3 gap-2 h-10 shadow-md items-center text-lg font-bebas bg-red-600"
          >
            <YouTubeIcon />
            <span className="mt-0.5">Watch</span>
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            className="flex tracking-wider p-3 gap-2 h-10 shadow-md items-center text-lg font-bebas bg-gray-900 text-nowrap"
          >
            <GitHubIcon />
            <span className="mt-0.5">Source Code</span>
          </a>
        )}
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            className="flex shadow-inner p-3 gap-2 h-10 items-center text-lg font-bebas bg-blue-900 text-nowrap"
          >
            <LaunchIcon />
          </a>
        )}
      </div>
    </div>
  );
}
