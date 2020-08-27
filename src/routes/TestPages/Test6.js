import React, { useState } from "react";
import TestSheet from "../../components/TestSheet";
import "../../static/css/styles.css";
import Loader from "../../components/Loader";

const Test6 = () => {
  const src1 = require("../../images/q/6.png");
  const src2 = require("../../images/w/6.svg");
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
              one={"반려견과 놀아준다."}
              two={"옷을 갈아입고 친구들을 만나러 나간다."}
              three={"더러워진 옷부터 세탁기에 넣는다."}
              four={"저녁거리가 뭐가 있는지 냉장고를 열어본다."}
              nextHrefName={"/#/test7"}
              btColor={"text-orange"}
              mt={"mt-12"}
            />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Test6;
