import React, { useEffect, useState } from "react";
import Loader from "./Loader";
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
    setTimeout(() => setIsReady(true), 1000);
  };

  useEffect(() => {
    const images = [
      require("../images/Start/bg1.svg"),
      require("../images/Start/bg2.svg"),
      require("../images/Start/h.svg"),
      require("../images/Start/m.svg"),
      require("../images/Start/logo.svg"),
      require("../images/Start/unsuck.svg"),
      require("../images/Start/star.svg"),
      require("../images/Intro/introbg.svg"),
      require("../images/q1bg.svg"),
    ];
    cacheImages(images);
  }, []);
  return <div className="body">{isReady ? children : <Loader />}</div>;
};

export default LoaderContainer;
