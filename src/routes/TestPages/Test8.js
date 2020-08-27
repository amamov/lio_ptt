import React, { useState } from "react";
import TestSheet from "../../components/TestSheet";
import "../../static/css/styles.css";
import Loader from "../../components/Loader";

const Test8 = () => {
  const src1 = require("../../images/q/8.png");
  const src2 = require("../../images/w/8.svg");
  const [isReady1, setIsReady1] = useState(false);
  const onImageLoaded1 = () => {
    setIsReady1(true);
  };
  const [isReady2, setIsReady2] = useState(false);
  const onImageLoaded2 = () => {
    setIsReady2(true);
  };
  return (
    <div className="body md:h-screen md:items-center">
      <img
        src={src1}
        alt="Lio"
        title="Lio"
        className="absolute w-375px z-0"
        onLoad={onImageLoaded1}
      />
      <img
        src={src2}
        alt="Lio"
        title="Lio"
        className="absolute w-375px z-10"
        onLoad={onImageLoaded2}
      />
      {isReady1 && isReady2 ? (
        <div className="w-375px h-667px p-12 text-ffffff z-30">
          <div className="mt-64">
            <TestSheet
              one={"매운 음식을 시켜먹는다."}
              two={"이불 속에 들어간다."}
              three={"슬라임을 만지작 거린다."}
              four={"샤워를 하면서 좋아하는 노래를 부른다."}
              nextHrefName={"/#/test9"}
              btColor={"text-black"}
              mt={"mt-10"}
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Test8;
