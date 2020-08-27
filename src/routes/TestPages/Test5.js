import React, { useState } from "react";
import TestSheet from "../../components/TestSheet";
import "../../static/css/styles.css";
import Loader from "../../components/Loader";

const Test5 = () => {
  const src1 = require("../../images/q/5.png");
  const src2 = require("../../images/w/5.svg");
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
              one={"가장 친한 친구에게 전화를 걸어 잡담을 한다."}
              two={"부모님에게 전화해서 하소연한다."}
              three={
                "더친한 친구들로 구성된 단톡방에서 친구들에게 아까 나를 넘어뜨린 사람에 대해 욕을 한다."
              }
              four={"연락을 하지 않고 이어폰을 끼고 좋아하는 음악을 듣는다."}
              nextHrefName={"/#/test6"}
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

export default Test5;
