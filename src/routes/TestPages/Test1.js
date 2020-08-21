import React from "react";
import TestSheet from "../../components/TestSheet";
import "../../static/css/styles.css";

const Test1 = () => {
  return (
    <div className="body">
      <TestSheet
        question={"Q1. 잠에서 깬 당신, 어떤 꿈을 꾸었나요?"}
        one={
          "누군가에게 계속 쫒기다가 공간이 바뀌였는데 또 꿈이였다. 겨우 깼다."
        }
        two={"물에 빠져 허우적거리는 꿈을 꾸었다."}
        three={"기억나지 않는다. 그런데 누군가와 싸우고 있었던 것 같다."}
        four={"사방이 벽으로 된 밀폐된 창고에 같혀있는 꿈을 꾸었다."}
        nextPagePath={"test2"}
      />
    </div>
  );
};

export default Test1;
