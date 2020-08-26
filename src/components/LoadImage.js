import React, { useState } from "react";
import "../static/css/styles.css";
import Loader from "./Loader";

const Prestart = () => {
  const src = [
    require("../images/Start/prebg.svg"),
    require("../images/Intro/introbg.svg"),
    require("../images/TestPage/1.svg"),
    require("../images/TestPage/2.svg"),
    require("../images/TestPage/3.svg"),
  ];
  const [isReady1, setIsReady1] = useState(false);
  const onImageLoaded1 = () => {
    setIsReady1(true);
  };
  const [isReady2, setIsReady2] = useState(false);
  const onImageLoaded2 = () => {
    setIsReady2(true);
  };
  const [isReady3, setIsReady3] = useState(false);
  const onImageLoaded3 = () => {
    setIsReady3(true);
  };
  const [isReady4, setIsReady4] = useState(false);
  const onImageLoaded4 = () => {
    setIsReady4(true);
  };
  return (
    <div>
      <img src={src[0]} onLoad={onImageLoaded1} />
      <img src={src[1]} onLoad={onImageLoaded2} />
      <img src={src[2]} onLoad={onImageLoaded3} />
      <img src={src[3]} onLoad={onImageLoaded4} />
      {/* <img src={src[4]} onLoad={onImageLoaded5} /> */}
      {isReady1 && isReady2 && isReady3 && isReady4 ? null : <Loader />}
    </div>
  );
};

export default Prestart;
