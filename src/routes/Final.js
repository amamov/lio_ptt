import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../static/css/styles.css";
import Loader from "../components/Loader";

const Final = () => {
  const src = require("../images/final/bg.png");
  const [isReady, setIsReady] = useState(false);
  const onImageLoaded = () => {
    setIsReady(true);
  };
  return (
    <div className="body">
      {/* <div id="container" class="container justify-center">
        <Link to={{ pathname: "/intro" }} class="move-bt">
          다시 검사하기
        </Link>
        <a
          href="https://www.google.com"
          class="move-bt"
          target="_blank"
          rel="noopener noreferrer"
        >
          텀블벅 바로가기
        </a>
      </div> */}
      <img
        src={src}
        alt="Lio"
        title="Lio"
        className="absolute w-375px z-0"
        // onLoad={onImageLoaded}
      />
      <img
        src={require("../images/final/ele.svg")}
        alt="Lio"
        title="Lio"
        className="absolute w-375px z-10"
        onLoad={onImageLoaded}
      />
      <div className="w-375px h-667px p-12 z-30">{!isReady && <Loader />}</div>
    </div>
  );
};

export default Final;
