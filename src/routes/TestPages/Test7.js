import React from "react";
import TestSheet from "../../components/TestSheet";
import "../../static/css/styles.css";

const Test7 = () => {
  return (
    <div className="body">
      <TestSheet
        question={
          "Q7. 모든 일과를 마치고 집에서 쇼파에 앉아 하루를 정리합니다. 당신은 최근 고민거리가 있네요. 어떤 고민인가요."
        }
        one={"할 일이 많아서 방이 더러워지고 있다. 빨리 치우고 싶다."}
        two={"최근에 잡힌 일정이 너무 많다. 나가기 너무 귀찮은데 어떡하지?"}
        three={"가장 친한 친구에게 또 심한 말을 해버렸다. XX!"}
        four={"친구에게 서운한 일이 있었는데 솔직하게 털어놓지 못했다."}
        nextHrefName={"/#/test8"}
      >
        <div className="w-70% progress"></div>
      </TestSheet>
    </div>
  );
};

export default Test7;
