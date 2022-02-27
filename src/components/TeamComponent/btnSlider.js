import React from "react";
import "./style.css";
import leftArrow from "../../images/arrow-121-24.png";
import rightArrow from "../../images/arrow-19-24.png";


export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt=""/>
    </button>
  );
}