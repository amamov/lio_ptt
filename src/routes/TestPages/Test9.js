import React from "react";
import TestSheet from "../../components/TestSheet";
import "../../static/css/styles.css";

const Test2 = () => {
  return (
    <div className="body">
      <TestSheet
        question={"Q9. 자기 전, 내일 먹을 점심을 고민합니다. 무엇을 먹을까요?"}
        one={"떡볶이"}
        two={"셀러드"}
        three={"정갈한 가정식"}
        four={"내일 생각하자.. 인생이란..."}
        nextHrefName={"/#/test10"}
      >
        <div className="w-90% progress"></div>
      </TestSheet>
    </div>
  );
};

export default Test2;
