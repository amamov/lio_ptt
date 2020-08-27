import React, { useState } from "react";
import "../static/css/styles.css";
import Loader from "./Loader";

const Prestart = () => {
  const src = require("../images/Start/preele.svg");
  const [isReady, setIsReady] = useState(false);
  const onImageLoaded = () => {
    setIsReady(true);
  };
  return (
    <div className="flex flex-col relative w-375px h-1100px">
      <img
        src={require("../images/Start/prebg.png")}
        alt="Lio"
        title="Lio"
        className="absolute w-375px z-0"
        // onLoad={onImageLoaded}
      />
      <img
        src={src}
        alt="Lio"
        title="Lio"
        className="absolute w-375px z-10"
        onLoad={onImageLoaded}
      />
      {!isReady && <Loader />}
    </div>
  );
};

export default Prestart;
