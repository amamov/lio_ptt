import React, { useState } from "react";
import TestSheet from "../../components/TestSheet";
import "../../static/css/styles.css";
import Loader from "../../components/Loader";

const Test4 = () => {
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
          <div className="mt-64">
            <TestSheet
              one={"바로 일어나서 욕을 한다."}
              two={"옷이 더러워졌는지 확인한다."}
              three={"웃으며 괜찮다고 이야기한다."}
              four={"아무일도 없었던 것 처럼 유유히 앞칸으로 옮긴다."}
              nextHrefName={"/#/test5"}
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

export default Test4;
