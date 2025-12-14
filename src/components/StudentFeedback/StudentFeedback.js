import React from "react";
import feedbacks from "../../Data/feedback";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeedbackCard from "./FeedbackCard";
import "./StudentFeedback.css";

const StudentFeedback = () => {
  const slides = Array.isArray(feedbacks) ? feedbacks : [];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2, // cards per row (desktop)
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    draggable: true,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="feedback-container">
      <h2 className="title">Vlerësimet e studentëve</h2>
      <p className="intro">
        ROI Academy është institucion lider në ofrimin e trajnimeve profesionale
        në Kosovë, Shqipëri dhe Maqedoni të Veriut. Ne ofrojmë programe të
        avancuara duke përfshirë Programe 2-mujore dhe Programe 6-mujore, me
        trajnim dhe praktikë.
      </p>
      <Slider {...settings}>
        {slides.map((feedback, i) => (
          <div key={i}>
            <FeedbackCard
              name={feedback.name}
              course={feedback.courseName}
              img={feedback.imageSrc}
              comment={feedback.comment}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StudentFeedback;
