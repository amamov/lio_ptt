import React from "react";
import TestSheet from "../../components/TestSheet";
import "../../static/css/styles.css";

const Test2 = () => {
  return (
    <div className="body">
      <TestSheet
        question={"Q2. 아침에 일어나 가장 먼저 하는 일은 무엇인가요?"}
        one={"밥을 먹는다."}
        two={"욕실로 가서 씻는다."}
        three={"휴대폰을 틀어 SNS를 확인한다."}
        four={"누워서 뒹굴거린다."}
        nextHrefName={"/#/test3"}
      >
        <div className="w-20% progress"></div>
      </TestSheet>
    </div>
  );
};

export default Test2;
