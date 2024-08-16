// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow } from "swiper/modules";
import { Projects } from "./data";

export default function ProjectSlider({ onChange }: { onChange: Function }) {
  return (
    <div className="flex-1 h-[380px] max-lg:max-w-full max-w-[700px] bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-md">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
        }}
        loop
        modules={[EffectCoverflow]}
        className="w-full py-12"
        onSlideChange={(s) => onChange(s.realIndex)}
      >
        {Projects.map((project) => {
          return (
            <SwiperSlide className="md:w-[500px] max-lg:w-[300px] bg-center bg-cover">
              <img
                loading="lazy"
                src={project.imagePath}
                width={400}
                className="max-lg:w-[300px] md:w-[500px]"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
