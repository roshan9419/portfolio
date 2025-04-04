import { JSX } from "solid-js";
import clsx from "clsx";
import LocationOnIcon from "lucide-solid/icons/map-pin";
import SectionWrapper from "../section-wrapper";

type ExperienceProps = {
  role: string;
  date: string;
  company: string;
  companyLink: string;
  isPresent?: boolean;
  children?: JSX.Element;
};

function NewExperience(props: ExperienceProps): JSX.Element {
  const { role, date, company, companyLink, isPresent, children } = props;

  return (
    <li class="mb-10 ms-6">
      <time
        class={clsx(
          "absolute max-lg:hidden mt-1 text-sm font-normal leading-none text-gray-500",
          isPresent ? "-left-[90px]" : "-left-[160px]"
        )}
      >
        {date}
      </time>
      <span class="absolute flex items-center justify-center p-1 w-6 h-6 rounded-full -start-3 ring-gray-900 bg-blue-900">
        <LocationOnIcon font-size="20" />
      </span>
      <p class="flex items-center mb-1 text-lg font-semibold text-white">
        {role}
        {isPresent && (
          <span class="text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-primary-dark text-primary-light ms-3">
            Present
          </span>
        )}
      </p>
      <a
        href={companyLink}
        target="_blank"
        class="block hover:text-blue-500 w-fit mb-2 text-sm font-normal leading-none text-gray-500"
      >
        {company}
        <span class="max-lg:inline-block hidden">
          {", "}
          {date}
        </span>
      </a>
      <p class="mb-4 text-base font-normal text-gray-400">{children}</p>
    </li>
  );
}

export default function ExperienceSection(): JSX.Element {
  return (
    <SectionWrapper
      sectionName="Experience"
      className="bg-slate-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90"
    >
      <div class="flex justify-center max-lg:pl-10 pl-20">
        <ol class="relative border-s border-gray-700 mt-16">
          <NewExperience
            role="Software Engineer"
            date="May 2024"
            isPresent={true}
            company="LeadSquared"
            companyLink="https://www.leadsquared.com/"
          >
            <ul class="list-disc list-inside">
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
                coding standards.
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
            <ul class="list-disc list-inside">
              <li>
                Developed robust applications using Flutter asfrontend, NodeJs
                as backend, and Firebase/GCP for scalable cloud solutions.
              </li>
              <li>
                Implemented secure Order, Cart, and User Management systems
                using Firebase security rules to insure database & cloud storage
                integrity.
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
