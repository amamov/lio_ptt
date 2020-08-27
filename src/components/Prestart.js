import React, { useState } from "react";
import "../static/css/styles.css";
import Loader from "./Loader";

const Prestart = () => {
  const src = require("../images/Start/prebg.svg");
  const [isReady, setIsReady] = useState(false);
  const cacheImages = (srcArray) => {
    srcArray.forEach((src) => {
      new Promise(function (resolve, reject) {
        const image = new Image();
        image.src = src;
        image.onload = resolve();
        image.onerror = reject();
      });
    });
    setTimeout(() => setIsReady(true), 3000);
  };
  useEffect(() => {
    const images = [
      require("../images/Start/bg2.svg"),
      require("../images/Start/m.svg"),
    ];
    cacheImages(images);
  }, []);
  return (
    <div className="flex flex-col relative w-375px h-1100px">
      <img src={src} alt="Lio" title="Lio" className="absolute w-375px" />
      {!isReady && <Loader />}
    </div>
  );
};

export default Prestart;
