import React, { useState } from "react";
import TestSheet from "../../components/TestSheet";
import "../../static/css/styles.css";
import Loader from "../../components/Loader";

const Test7 = () => {
  const src1 = require("../../images/q/7.png");
  const src2 = require("../../images/w/7.svg");
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
        <div className="w-375px h-667px p-12 text-black z-30">
          <div className="mt-64">
            <TestSheet
              one={"할 일이 많아서 방이 더러워지고 있다. 빨리 치우고 싶다."}
              two={
                "최근에 잡힌 일정이 너무 많다. 나가기 너무 귀찮은데 어떡하지?"
              }
              three={"가장 친한 친구에게 또 심한 말을 해버렸다. XX!"}
              four={"친구에게 서운한 일이 있었는데 솔직하게 털어놓지 못했다."}
              nextHrefName={"/#/test8"}
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

export default Test7;
