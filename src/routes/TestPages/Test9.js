import React from "react";
import TestSheet from "../../components/TestSheet";
import "../../static/css/styles.css";

const Test2 = () => {
  return (
    <div className="body">
      <TestSheet
        question={
          "Q9. 긴 하루를 끝내고 당신은 잠에 들었습니다. 어떤 꿈을 꾸고 있나요? 행복해보이네요..."
        }
        one={"기억나지 않는다. 그런데 누군가와 싸우고 있었던 것 같다."}
        two={"물에 빠져 허우적거리는 꿈을 꾸었다."}
        three={"사방이 벽으로 된 밀폐된 창고에 갇혀있는 꿈을 꾸었다."}
        four={
          "누군가에게 계속 쫒기다가 공간이 바뀌었는데 또 꿈이었다. 겨우 깼다.|꿈속의 꿈|"
        }
        nextHrefName={"/#/test10"}
      >
        <div className="w-90% progress"></div>
      </TestSheet>
    </div>
  );
};

export default Test2;
