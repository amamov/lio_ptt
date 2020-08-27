import React, { useState } from "react";
import TestSheet from "../../components/TestSheet";
import "../../static/css/styles.css";
import Loader from "../../components/Loader";

const Test2 = () => {
  const src1 = require("../../images/q/9.png");
  const src2 = require("../../images/w/9.svg");
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
          <div className="mt-56">
            <TestSheet
              one={"내 손이 닿는 모든 것들이 말랑말랑하다. 다 만지고 놀아야지."}
              two={"내가 좋아하는 사람들이 다 모여있다. 모두 웃고 있다."}
              three={"해가 지는 한강을 따라 계속 걷는다."}
              four={"에메랄드 빛의 일렁이는 바다 위에서 누워 둥둥 떠다닌다."}
              nextHrefName={"/#/test10"}
              btColor={"text-orange"}
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Test2;
