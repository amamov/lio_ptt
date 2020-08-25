import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import "../static/css/styles.css";

const LoaderContainer = ({ delay = 1000, children }) => {
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
    setTimeout(() => setIsReady(true), delay);
  };

  useEffect(() => {
    const images = [
      require("../images/TestPage/1.svg"),
      require("../images/TestPage/2.svg"),
      require("../images/TestPage/3.svg"),
      require("../images/TestPage/4.svg"),
      require("../images/TestPage/5.svg"),
      require("../images/TestPage/6.svg"),
      require("../images/TestPage/7.svg"),
      require("../images/TestPage/8.svg"),
    ];
    cacheImages(images);
    setTimeout(() => setIsReady(true), delay);
  }, []);
  return <div className="body">{isReady ? children : <Loader />}</div>;
};

export default LoaderContainer;
