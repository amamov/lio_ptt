import React, { useState } from "react";
import "../../static/css/styles.css";
import { Link } from "react-router-dom";
import CubeGrid from "styled-loaders-react/lib/components/CubeGrid";

const Result_B = () => {
  const src = require("../../images/Result/B.svg");
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
              <div className="bg-blue-2 w-286px h-48px flex justify-center items-center rounded-md mb-8">
                <span>테스트 시작하기</span>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="body h-screen flex items-center justify-center bg-black">
          <div>
            <CubeGrid color="#ffffff" size="30px" />
          </div>
        </div>
      )}
    </>
  );
};

export default Result_B;
