import React, { useState } from "react";
import TestSheet from "../../components/TestSheet";
import "../../static/css/styles.css";
import Loader from "../../components/Loader";

const Test1 = () => {
  const src1 = require("../../images/q/1.png");
  const src2 = require("../../images/w/1.svg");
  const [isReady1, setIsReady1] = useState(false);
  const onImageLoaded1 = () => {
    setIsReady1(true);
  };
  const [isReady2, setIsReady2] = useState(false);
  const onImageLoaded2 = () => {
    setIsReady2(true);
  };
  return (
    <div className="body">
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
        <div className="w-375px h-667px p-12 z-30">
          <div className="mt-56">
            <TestSheet
              one={
                "누군가에게 계속 쫒기다가 공간이 바뀌였는데 또 꿈이였다. 겨우 깼다."
              }
              two={"물에 빠져 허우적거리는 꿈을 꾸었다."}
              three={"기억나지 않는다. 그런데 누군가와 싸우고 있었던 것 같다."}
              four={"사방이 벽으로 된 밀폐된 창고에 같혀있는 꿈을 꾸었다."}
              nextHrefName={"/#/test2"}
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

export default Test1;
