import React from "react";
import TestSheet from "../../components/TestSheet";
import "../../static/css/styles.css";

const Test6 = () => {
  return (
    <div className="body">
      <TestSheet
        question={"Q6. 집에 도착한 당신, 어떤 일을 하나요?"}
        one={"반려견과 놀아준다."}
        two={"옷을 갈아입고 친구들을 만나러 나간다."}
        three={"더러워진 옷부터 세탁기에 넣는다."}
        four={"저녁거리가 뭐가 있는지 냉장고를 열어본다."}
        nextHrefName={"/#/test7"}
      >
        <div className="w-60% progress"></div>
      </TestSheet>
    </div>
  );
};

export default Test6;
