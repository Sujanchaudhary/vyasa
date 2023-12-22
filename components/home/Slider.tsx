import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoBackground from "./VideoContent";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const SliderSection = () => {
  const PreviousBtn = (props: any) => {
    const { className, onClick, currentSlide } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          height: "55px",
          left: "10px", // Adjusted positioning
          zIndex: 1,
        }}
      >
      </div>
    );
  };

  const NextBtn = (props: any) => {
    const { className, onClick, slideCount, currentSlide } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          height: "55px",
          right: "10px", // Adjusted positioning
          zIndex: 1,
        }}
      >
        {/* <ArrowForwardIosIcon style={{ color: "white", fontSize: "25px" }} /> */}
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextBtn />,
    prevArrow: <PreviousBtn />,
    dotsClass: "button__bar",
  };

  const youtubeVideoUrl = "2oK_SyDC6pU";
  const customTypographyText = "Hello";

  return (
    <div>
      <Slider {...settings}>
        <div>
          <VideoBackground
            videoId={youtubeVideoUrl}
            typographyText={customTypographyText}
          />
        </div>
        <div>
          <VideoBackground
            videoId={youtubeVideoUrl}
            typographyText={customTypographyText}
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderSection;
