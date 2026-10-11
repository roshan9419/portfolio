import { JSX, Show } from "solid-js";
import clsx from "clsx";
import LocationOnIcon from "lucide-solid/icons/map-pin";
import SectionWrapper from "../section-wrapper";

type ExperienceProps = {
  role: string;
  date: string;
  company: string;
  companyLink: string;
  level: number;
  isPresent?: boolean;
  children?: JSX.Element;
};

function NewExperience(props: ExperienceProps): JSX.Element {
  return (
    <li class="mb-10 ms-6">
      <time
        class={clsx(
          "absolute max-lg:hidden mt-1 text-sm font-normal leading-none text-subtle",
          props.isPresent ? "-left-[90px]" : "-left-[160px]"
        )}
      >
        {props.date}
      </time>
      <span
        class={clsx(
          "absolute flex items-center justify-center p-1 w-6 h-6 rounded-full -start-3 ring-surface bg-accent-soft text-accent-soft-foreground",
          props.isPresent && "shadow-glow"
        )}
      >
        <LocationOnIcon size={16} />
      </span>
      <p class="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1 text-lg font-semibold text-foreground">
        <span class="font-pixel text-[9px] px-1.5 py-1 rounded border border-link/50 text-link">
          LV {props.level}
        </span>
        {props.role}
        <Show when={props.isPresent}>
          <span class="flex items-center gap-2 text-sm font-medium px-2.5 py-0.5 rounded bg-accent-soft text-accent-soft-foreground">
            <span class="relative flex w-2 h-2">
              <span class="absolute inline-flex w-full h-full rounded-full bg-link opacity-75 animate-ping" />
              <span class="relative inline-flex w-2 h-2 rounded-full bg-link" />
            </span>
            Now Playing
          </span>
        </Show>
      </p>
      <a
        href={props.companyLink}
        target="_blank"
        rel="noopener noreferrer"
        class="block hover:text-link w-fit mb-2 text-sm font-normal leading-none text-subtle"
      >
        {props.company}
        <span class="max-lg:inline-block hidden">
          {", "}
          {props.date}
        </span>
      </a>
      <div class="mb-4 text-base font-normal text-muted">{props.children}</div>
    </li>
  );
}

export default function ExperienceSection(): JSX.Element {
  return (
    <SectionWrapper
      sectionName="Experience"
      level={1}
      levelName="Career Mode"
      tagline="My journey so far, from intern to Software Engineer II."
      class="bg-surface/90 backdrop-blur-sm"
    >
      <div class="flex justify-center max-lg:pl-10 pl-20">
        <ol class="relative border-s border-border mt-16">
          <NewExperience
            role="Software Engineer II"
            level={5}
            date="Jun 2025"
            isPresent={true}
            company="Zuora"
            companyLink="https://www.zuora.com/"
          >
            <ul class="list-disc list-inside">
              <li>
                Working as a Full-Stack Developer in the Payments team, building
                and maintaining features using React JS, Java, MySQL and AWS.
              </li>
              <li>
                Responsible for payment processing and payment collection
                flows, ensuring reliable and secure handling of transactions.
              </li>
              <li>
                Contributing to the Payment Orchestrator, which routes payments
                across gateways and supports multiple payment methods.
              </li>
              <li>
                Contributing to AI-driven development initiatives, achieving up
                to 10x development velocity using AI-assisted workflows.
              </li>
            </ul>
          </NewExperience>

          <NewExperience
            role="Software Engineer"
            level={4}
            date="May 2024 - May 2025"
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
            level={3}
            date="Jan 2023 - Mar 2024"
            company="LeadSquared"
            companyLink="https://www.leadsquared.com/"
          />

          <NewExperience
            role="Software Engineer Intern"
            level={2}
            date="May 2022 - May 2023"
            company="LeadSquared"
            companyLink="https://www.leadsquared.com/"
          />

          <NewExperience
            role="Software Engineer Intern"
            level={1}
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
