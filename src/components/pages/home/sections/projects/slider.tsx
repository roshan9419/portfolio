import { onCleanup, onMount } from "solid-js";
import { Projects } from "./data";
import Swiper from "swiper";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

Swiper.use([EffectCoverflow, Pagination]);

export default function ProjectSlider(props: {
  onChange: (index: number) => void;
}) {
  let swiperContainer!: HTMLDivElement;
  let swiperInstance: Swiper;

  onMount(() => {
    swiperInstance = new Swiper(swiperContainer, {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 2.5,
      },
      on: {
        slideChange(swiper) {
          props.onChange(swiper.realIndex);
        },
      },
    });
  });

  onCleanup(() => {
    swiperInstance?.destroy(true, true);
  });

  return (
    <div class="flex-1 h-[390px] max-lg:max-w-full max-w-[700px] bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-md">
      <div class="swiper w-full py-12" ref={swiperContainer}>
        <div class="swiper-wrapper">
          {Projects.map((project) => (
            <div class="swiper-slide md:w-[500px] max-lg:w-[300px] bg-center bg-cover">
              <img
                loading="lazy"
                src={project.imagePath}
                width={400}
                class="max-lg:w-[300px] md:w-[500px]"
              />
            </div>
          ))}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  );
}
