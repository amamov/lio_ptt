import React, { useState } from "react";
import TestSheet from "../../components/TestSheet";
import Loader from "../../components/Loader";
import "../../static/css/styles.css";

const Test2 = () => {
  const [src, setSrc] = useState(require("../../images/TestPage/2.svg"));
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
        <div className="w-375px h-667px p-12">
          <div className="mt-64">
            <TestSheet
              one={"밥을 먹는다."}
              two={"욕실로 가서 씻는다."}
              three={"휴대폰을 틀어 SNS를 확인한다."}
              four={"누워서 뒹굴거린다."}
              nextHrefName={"/#/test3"}
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
