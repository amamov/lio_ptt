import React from "react";
import TestSheet from "../../components/TestSheet";
import "../../static/css/styles.css";

const Test8 = () => {
  return (
    <div className="body">
      <TestSheet
        question={
          "Q8. 머리 너무 아프네요.. 기분 전환이 필요해 보입니다! 당신은 어떤 행동을 할까요?"
        }
        one={"매운 음식을 시켜먹는다."}
        two={"이불 속에 들어간다."}
        three={"슬라임을 만지작 거린다."}
        four={"샤워를 하면서 좋아하는 노래를 부른다.(듣는다.)"}
        nextHrefName={"/#/test9"}
      >
        <div className="w-80% progress"></div>
      </TestSheet>
    </div>
  );
};

export default Test8;
