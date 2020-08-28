import React, { useState } from "react";
import TestSheet from "../../components/TestSheet";
import "../../static/css/styles.css";
import Loader from "../../components/Loader";

const Test2 = () => {
  const src1 = require("../../images/q/2.png");
  const src2 = require("../../images/w/2.svg");
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
        <div className="w-375px h-667px p-12 z-30 text-ffffff">
          <div className="mt-64">
            <TestSheet
              one={"밥을 먹는다."}
              two={"욕실로 가서 씻는다."}
              three={"휴대폰을 틀어 SNS를 확인한다."}
              four={"누워서 뒹굴거린다."}
              nextHrefName={"/#/test3"}
              btColor={"text-orange"}
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

export default Test2;
