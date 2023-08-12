import { useState } from "react";

import pic from "../images/cover1.jpeg";

import pic2 from "../images/coco-review_mbws.1280.webp";

import pic3 from "../images/z-cover2.jpeg";
import pic4 from "../images/soul-c.webp";


export default function ImageSlider(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  let slides = [pic3, pic2, pic, pic4, pic4];

  const divStyle = {
    width: "100%",
    height: "65vh",
    backgroundImage: `url(${slides[currentIndex]})`,
    backgroundPosition: "center",

    backgroundSize: "cover",

    transition: "background-image 0.5s ease-in-out",
    backgroundRepeat: "no-repeat",
    zIndex: 0,
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const textStyle = {
    position: "absolute",
    top: "40%",
    left: "7%",
    zIndex: 2,
    color: "white",
    fontSize: "30px",
    lineHeight: "80px",
    letterSpacing: "3px",
    fontWeight: "bold",
    textAlign: "center",
  };

  const pStyle = {
    position: "absolute",
    top: "55%",
    left: "7%",
    zIndex: 2,
    color: "white",
    fontSize: "20px",
    textAlign: "center",
  };

  return (
    <div style={{ position: "relative" }}>
      {currentIndex === 0 ? (
        <div>
          {" "}
          <h2 style={textStyle}>{"Favourite Cartoons app".toUpperCase()}</h2>
          <p style={pStyle}>All your favourite cartoons in one place</p>
        </div>
      ) : (
        <></>
      )}

      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>

      <div
        style={{ ...divStyle, backgroundImage: `url(${slides[currentIndex]})` }}
      ></div>
    </div>
  );
}
