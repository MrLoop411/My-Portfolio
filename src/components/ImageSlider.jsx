import { useCallback, useEffect, useRef, useState } from "react";
import { RiArrowRightWideLine } from "react-icons/ri";
import { RiArrowLeftWideLine } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";

const sliderStyles = {
  height: "100%",
  position: "relative",
};

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundPosition: "center",
  backgroundSize: "contain",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "grey",
  zindex: 1,
  cursor: "pointer",
};
const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "grey",
  zindex: 1,
  cursor: "pointer",
};
const dotContainerStyles = {
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  marginTop: "5px",
  color: "grey",
};
const dotStyles = {
  margin: "0, 3px",
  cursor: "pointer",
  fontSize: "10px",
};

const slidesContainerOverflowStyles = {
  height: "100%",
  overflow: "hidden",
};

const slidesContainerStyles = {
  display: "flex",
  height: "100%",
  transition: "transform ease-out 0.3s",
};

function ImageSlider({ slides, parentWidth }) {
  const timerRef = useRef(null);

  const [curIndex, setCurIndex] = useState(0);

  function goToPrev() {
    const isFirstSlide = curIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : curIndex - 1;
    setCurIndex(newIndex);
  }
  const goToNext = useCallback(() => {
    const isLastSlide = curIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : curIndex + 1;
    setCurIndex(newIndex);
  }, [curIndex, slides]);

  function goToSlide(slideIndex) {
    setCurIndex(slideIndex);
  }

  const getSlideStylesWithBackground = (slideIndex) => ({
    ...slideStyles,
    // opacity: 0.8,
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`,
  });

  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,

    width: parentWidth * slides.length,
    transform: `translateX(${-(curIndex * parentWidth)}px)`,
  });

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 2000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <div style={sliderStyles}>
      <div style={slidesContainerOverflowStyles}>
        <div style={getSlidesContainerStylesWithWidth()}>
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              style={getSlideStylesWithBackground(slideIndex)}
            ></div>
          ))}
        </div>
        <button onClick={goToPrev} style={leftArrowStyles}>
          {<RiArrowLeftWideLine />}
        </button>
        <button onClick={goToNext} style={rightArrowStyles}>
          {<RiArrowRightWideLine />}
        </button>
      </div>
      <div style={dotContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <button
            style={dotStyles}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            {<FaCircle />}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
