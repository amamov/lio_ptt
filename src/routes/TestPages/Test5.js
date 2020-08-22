import React from "react";
import TestSheet from "../../components/TestSheet";
import "../../static/css/styles.css";

const Test5 = () => {
  return (
    <div className="body">
      <TestSheet
        question={
          "Q5. 집으로 돌아가는 길에 당신은 누군가에게 연락을 합니다. 그 사람은 누구이고 어떤 대화를 하고 있나요?"
        }
        one={"가장 친한 친구에게 전화를 걸어 잡담을 한다."}
        two={"부모님에게 전화해서 하소연한다."}
        three={
          "더친한 친구들로 구성된 단톡방에서 친구들에게 아까 나를 넘어뜨린 사람에 대해 욕을 한다."
        }
        four={"연락을 하지 않고 이어폰을 끼고 좋아하는 음악을 듣는다."}
        nextHrefName={"/#/test6"}
      >
        <div className="w-50% progress"></div>
      </TestSheet>
    </div>
  );
};

export default Test5;
