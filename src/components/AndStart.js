import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../static/css/styles.css";
import Loader from "./Loader";

const Andstart = () => {
  const src = require("../images/Start/bg22.png");
  const [isReady, setIsReady] = useState(false);
  const onImageLoaded1 = () => {
    setIsReady(true);
  };

  return (
    <div className="flex flex-col relative items-center w-375px h-667px">
      <img
        src={src}
        type=""
        alt="Lio"
        title="Lio"
        className="absolute w-375 h-667px z-0"
        onLoad={onImageLoaded1}
      />
      {isReady ? (
        <Link
          to={{ pathname: "/intro" }}
          style={{ position: "absolute", bottom: 95 }}
        >
          <img
            src={require("../images/Start/h.svg")}
            alt="Lio"
            title="Lio"
            className="animate-pulse"
          />
        </Link>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Andstart;
