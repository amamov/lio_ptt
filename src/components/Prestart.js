import React, { useState, useEffect } from "react";
import "../static/css/styles.css";
import Loader from "./Loader";

const Prestart = () => {
  const src = useState(require("../images/Start/prebg.svg"));
  const [isReady, setIsReady] = useState(false);
  const onImageLoaded = () => {
    setIsReady(true);
  };
  return (
    <div className="flex flex-col relative w-375px h-1100px">
      <img
        src={src}
        alt="Lio"
        title="Lio"
        className="absolute w-375px"
        onLoad={onImageLoaded}
      />
      {!isReady && <Loader />}
    </div>
  );
};

export default Prestart;
