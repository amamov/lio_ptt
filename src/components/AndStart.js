import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../static/css/styles.css";
import Loader from "./Loader";

const Andstart = () => {
  const src1 = require("../images/Start/bg22.png");
  const src2 = require("../images/Start/h.svg");
  const [isReady1, setIsReady1] = useState(false);
  const [isReady2, setIsReady2] = useState(false);
  const onImageLoaded1 = () => {
    setIsReady1(true);
  };
  const onImageLoaded2 = () => {
    setIsReady2(true);
  };
  return (
    <>
      <div className="flex flex-col relative items-center w-375px h-667px">
        <img
          src={src1}
          type=""
          alt="Lio"
          title="Lio"
          className="w-375 h-667px"
          onLoad={onImageLoaded1}
        />
        <Link
          to={{ pathname: "/intro" }}
          style={{ position: "absolute", bottom: 95 }}
        >
          <img
            src={src2}
            alt="Lio"
            title="Lio"
            className="animate-pulse"
            onLoad={onImageLoaded2}
          />
        </Link>
      </div>
      {isReady1 && isReady2 ? null : <Loader />}
    </>
  );
};

export default Andstart;
