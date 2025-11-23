import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TeamCard from "./TeamCard";

export default function TeamSliderRow({ people }) {
  <Swiper
    slidesPerView={1}
    breakpoints={{
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 4 },
    }}
  ></Swiper>;

  return (
    <Swiper slidesPerView={4} spaceBetween={20}>
      {people.map((person, i) => (
        <SwiperSlide key={i}>
          <TeamCard {...person} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
