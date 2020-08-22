import React from "react";
import TestSheet from "../../components/TestSheet";
import "../../static/css/styles.css";

const Test4 = () => {
  return (
    <div className="body">
      <TestSheet
        question={
          "Q4. 지금은 퇴근시간입니다. 당신은 지하철을 타려고 승강장에서 기다리고 있습니다. 사람이 너무 많네요.. 앗, 문이 열리자마자 사람들이 밀고 들어오며 넘어지고 말았네요. 이 상황에서 당신은 어떤 행동을 할까요?"
        }
        one={"바로 일어나서 욕을 한다."}
        two={"옷이 더러워졌는지 확인한다."}
        three={"웃으며 괜찮다고 이야기한다."}
        four={"아무일도 없었던 것 처럼 유유히 앞칸으로 옮긴다."}
        nextHrefName={"/#/test5"}
      >
        <div className="w-40% progress"></div>
      </TestSheet>
    </div>
  );
};

export default Test4;
