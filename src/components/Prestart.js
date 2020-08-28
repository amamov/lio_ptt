import React, { useState } from "react";
import "../static/css/styles.css";
import Loader from "./Loader";

const Prestart = () => {
  const src1 = require("../images/Start/prebg.png");
  const [isReady1, setIsReady1] = useState(false);
  const onImageLoaded1 = () => {
    setIsReady1(true);
  };
  const src2 = require("../images/Start/preele.svg");
  const [isReady2, setIsReady2] = useState(false);
  const onImageLoaded2 = () => {
    setIsReady2(true);
  };
  return (
    <div className="flex flex-col relative w-375px h-667px">
      <img
        src={src1}
        alt="Lio"
        title="Lio"
        className="absolute w-375px z-0"
        onLoad={onImageLoaded1}
      />
      <img
        src={src2}
        alt="Lio"
        title="Lio"
        className="absolute w-375px z-10"
        onLoad={onImageLoaded2}
      />
      {!isReady1 && !isReady2 ? <Loader /> : null}
    </div>
  );
};

export default Prestart;
