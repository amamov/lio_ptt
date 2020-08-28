import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../static/css/styles.css";
import Loader from "../components/Loader";

const Final = () => {
  const src = require("../images/final/bg.png");
  const [isReady, setIsReady] = useState(false);
  const onImageLoaded = () => {
    setIsReady(true);
  };
  return (
    <div className="body md:h-screen md:items-center">
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

      {isReady ? (
        <div className="w-375px h-667px flex flex-col items-center z-30">
          <a
            href="https://www.google.com"
            class="bg-ffffff w-56 h-12 mt-340px flex justify-center items-center rounded-md finalBt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-blue-3 font-bold text-lg">
              텀블벅 바로가기
            </span>
          </a>

          <Link
            to={{ pathname: "/intro" }}
            style={{ width: 70, height: 70, marginTop: 135 }}
          >
            <div></div>
          </Link>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Final;
