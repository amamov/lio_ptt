import React, { useState } from "react";
import "../../static/css/styles.css";
import { Link } from "react-router-dom";
import Cube from "styled-loaders-react/lib/components/Cube";

const Result_C = () => {
  const src = require("../../images/Result/C.svg");
  const [isReady, setIsReady] = useState(false);
  const onImageLoaded = () => {
    setIsReady(true);
  };
  return (
    <>
      <div className="body">
        <img
          src={src}
          alt="Lio"
          title="Lio"
          className="absolute w-375px"
          onLoad={onImageLoaded}
        />
      </div>
      {isReady ? (
        <div className="body">
          <div className="flex flex-col w-375px h-1100px justify-end items-center">
            <Link to={{ pathname: "./final" }} style={{ zIndex: 30 }}>
              <div className="bg-ffffff w-56 h-48px flex justify-center items-center rounded-md mb-12">
                <span className="text-black font-bold">다음으로</span>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="body h-screen flex items-center justify-center bg-black">
          <div>
            <Cube color="#f26431" size="30px" />
          </div>
        </div>
      )}
    </>
  );
};

export default Result_C;
