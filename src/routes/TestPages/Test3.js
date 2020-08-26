import React, { useState } from "react";
import TestSheet from "../../components/TestSheet";
import Loader from "../../components/Loader";
import "../../static/css/styles.css";

const Test3 = () => {
  const src = require("../../images/TestPage/3.svg");
  const [isReady, setIsReady] = useState(false);
  const onImageLoaded = () => {
    setIsReady(true);
  };
  return (
    <div className="body">
      <img
        src={src}
        alt="Lio"
        title="Lio"
        className="absolute w-375px"
        onLoad={onImageLoaded}
      />
      {isReady ? (
        <div className="w-375px h-667px p-12 text-black bg3">
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
