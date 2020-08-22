import React, { useState, useEffect } from "react";
import "../static/css/styles.css";
import "../static/css/fonts.css";
import Loader from "../components/Loader";
import StartPresenter from "../components/StartPresenter";

const Start = () => {
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
      require("../images/prestartImage.png"),
      require("../images/startChar.png"),
      require("../images/startWow.png"),
      require("../images/human.png"),
      require("../images/introBg.png"),
      require("../images/logo.png"),
      require("../images/prestartBg.png"),
      require("../images/prestartCandy.png"),
      require("../images/prestartThing.png"),
      require("../images/prestartBg.png"),
      require("../images/startBg.png"),
      require("../images/startmachine.png"),
      require("../images/test1bg.png"),
    ];
    cacheImages(images);
  }, []);

  return (
    <div className="body">{isReady ? <StartPresenter /> : <Loader />}</div>
  );
};

export default Start;
