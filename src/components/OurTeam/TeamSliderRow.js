import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TeamSliderRow.css";
import TeamCard from "./TeamCard";

function TeamSliderRow({ teamRow = [] }) {
  // Safety: ensure array
  const slides = Array.isArray(teamRow) ? teamRow : [];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4, // cards per row (desktop)
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    draggable: true,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  // If no slides, return nothing (or a placeholder)
  if (!slides.length) return null;

  return (
    <div className="team-slider-row-wrapper">
      <Slider {...settings} className="team-slider-row">
        {slides.map((person, i) => (
          <div key={i} className="team-slide">
            <TeamCard {...person} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TeamSliderRow;
