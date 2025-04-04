import { JSX } from "solid-js";
import SectionWrapper from "../section-wrapper";

export default function AchievementSection() {
  const AchievementCard = ({
    title,
    description,
    image,
  }: {
    title: string;
    description: string | JSX.Element;
    image: string;
  }) => {
    return (
      <div class="border-1 p-6">
        <img src={image} alt={title} width={400} />
        <p class="text-center mt-4 text-lg text-gray-200">{title}</p>
        <p class="text-center text-gray-400 max-w-[400px]">{description}</p>
      </div>
    );
  };

  return (
    <SectionWrapper sectionName="Achievements" className="bg-gray-900">
      <div class="flex flex-wrap gap-6 justify-center items-center mt-10">
        <AchievementCard
          title="CodeEd - Online Hackathon"
          description="An online hackathon was conducted by HackerEarth where I chose E-learning topic and built an website solving many use-cases of students."
          image="https://roshan9419.github.io/public-assets/images/achievements/codeed-hackathon.png"
        />
        <AchievementCard
          title="COFAS International Event"
          description={
            <>
              An International event where schools of different countries came
              to participate and where I won 2nd prize under Senior category.
              Also got my picture with my team in Amar Ujala{" "}
              <a
                href="https://roshan9419.github.io/public-assets/images/achievements/cofas-news.png"
                target="_blank"
                class="text-primary"
              >
                Newspaper.
              </a>
            </>
          }
          image="https://roshan9419.github.io/public-assets/images/achievements/cofas-certificate.jpg"
        />
      </div>
      <p class="text-center text-gray-500 mt-10">
        Note: many more achievements of past or early age are not included
      </p>
    </SectionWrapper>
  );
}
