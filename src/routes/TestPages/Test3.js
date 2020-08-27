import React, { useState } from "react";
import TestSheet from "../../components/TestSheet";
import "../../static/css/styles.css";
import Loader from "../../components/Loader";

const Test3 = () => {
  const src1 = require("../../images/q/3.png");
  const src2 = require("../../images/w/3.svg");
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
        <div className="w-375px h-667px p-12 text-black z-30">
          <div className="mt-64">
            <TestSheet
              one={"내 책상 주변을 정리한다."}
              two={"다이어리를 꾸민다."}
              three={"새로운 친구들을 만난다."}
              four={"낮잠을 잔다."}
              nextHrefName={"/#/test4"}
              btColor={"text-black"}
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Test3;
