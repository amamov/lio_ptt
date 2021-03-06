import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../static/css/styles.css";
import { CubeGrid } from "styled-loaders-react";

const Intro = () => {
  const PT_LS = "personality_type";
  localStorage.setItem(PT_LS, JSON.stringify({ A: 0, B: 0, C: 0, D: 0 })); //초기화

  const src = require("../images/Intro/introbg.svg");
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
          <div className="flex flex-col w-375px h-1300px justify-end items-center">
            <Link to={{ pathname: "./test1" }} style={{ zIndex: 30 }}>
              <div className="bg-blue-4 w-286px h-48px flex justify-center items-center rounded-md mb-8 introBt">
                <span className="text-ffffff">스트레스 유형 진단하기</span>
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

export default Intro;
