import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TeamSliderRow.css";
import TeamCard from "./TeamCard";

function TeamSliderRow({ teamRow = [] }) {
  const rawSlides = Array.isArray(teamRow) ? teamRow : [];

  if (!rawSlides.length) return null;

  const settings = {
    dots: false,
    infinite: rawSlides.length > 4,
    speed: 700,
    slidesToShow: 4, // ≥1200px
    slidesToScroll: 1,
    autoplay: rawSlides.length > 4,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: rawSlides.length > 3,
          autoplay: rawSlides.length > 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: rawSlides.length > 2,
          autoplay: rawSlides.length > 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: rawSlides.length > 1,
          autoplay: rawSlides.length > 1,
        },
      },
    ],
  };

  return (
    <div className="team-slider-row-wrapper">
      <Slider {...settings} className="team-slider-row">
        {rawSlides.map((person, i) => (
          <div key={`${person.id ?? "slide"}-${i}`} className="team-slide">
            <TeamCard {...person} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TeamSliderRow;
