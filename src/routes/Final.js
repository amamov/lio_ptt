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
    <div className="body">
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
            class="bg-ffffff w-56 h-12 mt-330px flex justify-center items-center rounded-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-blue-1">블러처리는 나중에, 텀블벅버튼</span>
          </a>

          <Link
            to={{ pathname: "/intro" }}
            style={{ width: 70, height: 70, marginTop: 150 }}
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
