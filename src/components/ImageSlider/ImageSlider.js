import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageList from "../../Data/imageCarouselItems";
import "./ImageSlider.css";

const ImageSlider = ({ images }) => {
  const slides = images ? images : imageList;

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
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Slider {...settings}>
      {slides.map((uri, i) => (
        <div key={i}>
          <img src={uri} className="slide-image" />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
