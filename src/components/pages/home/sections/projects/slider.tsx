// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

import "./styles.css";
// import required modules
import { EffectCoverflow } from "swiper/modules";
import { Projects } from "./data";

export default function ProjectSlider({ onChange }: { onChange: Function }) {
  return (
    <div className="h-[360px] w-[700px] bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-md">
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
        className="mySwiper"
        onSlideChange={(s) => onChange(s.realIndex)}
      >
        {Projects.map((project) => {
          return (
            <SwiperSlide>
              <img loading="lazy" src={project.imagePath} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
