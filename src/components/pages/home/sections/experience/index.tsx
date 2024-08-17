import { ReactNode } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SectionWrapper from "../section-wrapper";
import clsx from "clsx";

export default function ExperienceSection() {
  const NewExperience = ({
    role,
    date,
    company,
    companyLink,
    isPresent,
    children,
  }: {
    role: string;
    date: string;
    company: string;
    companyLink: string;
    isPresent?: boolean;
    children?: ReactNode;
  }) => {
    return (
      <li className="mb-10 ms-6">
        <time
          className={clsx(
            "absolute max-lg:hidden mt-1 text-sm font-normal leading-none text-gray-500",
            isPresent ? "-left-[90px]" : "-left-[160px]"
          )}
        >
          {date}
        </time>
        <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-gray-900 bg-blue-900">
          <LocationOnIcon fontSize="small" />
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
          {role}
          {isPresent && (
            <span className="text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-primary-dark text-primary-light ms-3">
              Present
            </span>
          )}
        </h3>
        <a
          href={companyLink}
          target="_blank"
          className="block hover:text-blue-500 w-fit mb-2 text-sm font-normal leading-none text-gray-500"
        >
          {company}
          <span className="max-lg:inline-block hidden">{", "}{date}</span>
        </a>
        <p className="mb-4 text-base font-normal text-gray-400">
          {children}
        </p>
      </li>
    );
  };

  return (
    <SectionWrapper
      sectionName="Experience"
      className="bg-slate-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90"
    >
      <div className="flex justify-center max-lg:pl-10 pl-20">
        <ol className="relative border-s border-gray-700 mt-16">
          <NewExperience
            role="Software Engineer"
            date="May 2024"
            isPresent={true}
            company="LeadSquared"
            companyLink="https://www.leadsquared.com/"
          >
            <ul className="list-disc list-inside">
              <li>
                Developed and maintained scalable and secure backend services
                using C# .Net, MySQL, Redis, AWS, ensuring high performance and
                reliability.
              </li>
              <li>
                Developed responsive and performant web applications using React
                JS, Tailwind CSS, Bootstrap, etc. optimizing frontend
                performance and user experience.
              </li>
              <li>
                Assisted in troubleshooting and debugging issues across all the
                modules, ensuring robust security practices and adherence to
                coding standards
              </li>
              <li>
                Investigated and resolved complex technical issues reported by
                clients, achieving 98% customer satisfaction rate through prompt
                and effective solutions.
              </li>
            </ul>
          </NewExperience>
          <NewExperience
            role="Associate Software Engineer"
            date="Jan 2023 - Mar 2024"
            company="LeadSquared"
            companyLink="https://www.leadsquared.com/"
          />
          <NewExperience
            role="Software Engineer Intern"
            date="May 2022 - May 2023"
            company="LeadSquared"
            companyLink="https://www.leadsquared.com/"
          />
          <NewExperience
            role="Software Engineer Intern"
            date="Apr 2021 - Apr 2022"
            company="Redbasil Technologies"
            companyLink="https://redbasil.in/"
          >
            <ul className="list-disc list-inside">
              <li>
                Developed robust applications using Flutter asfrontend, NodeJs
                as backend, and Firebase/GCP for scalable cloud solutions
              </li>
              <li>
                Implemented secure Order, Cart, and User Management systems
                using Firebase security rules to insure database & cloud storage
                integrity
              </li>
              <li>
                Utilized Pub-Sub mechanism for reliable message delivery and
                event handling, supporting multi-lingual Catalog Management.
              </li>
              <li>
                Integrated Razorpay Payment Gateway with scalable architecture,
                ensuring seamless operation and including Webhook support for
                transaction handling.
              </li>
            </ul>
          </NewExperience>
        </ol>
      </div>
    </SectionWrapper>
  );
}
