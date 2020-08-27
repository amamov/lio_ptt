import React, { useEffect, useState } from "react";
import SmileLoader from "./SmileLoader";
import "../static/css/styles.css";

const LoaderContainer = ({ children }) => {
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
    setTimeout(() => setIsReady(true), 16000);
  };

  useEffect(() => {
    const images = [
      require("../images/Start/prebg.png"),
      require("../images/Start/preele.svg"),
      require("../images/Intro/introbg.svg"),
      require("../images/Start/h.svg"),
      require("../images/q/1.png"),
      require("../images/w/1.svg"),
      require("../images/q/2.png"),
      require("../images/w/2.svg"),
      require("../images/w/4.svg"),
    ];
    cacheImages(images);
  }, []);
  return isReady ? children : <SmileLoader />;
};

export default LoaderContainer;
