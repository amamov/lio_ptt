import React from "react";
import TestSheet from "../../components/TestSheet";
import "../../static/css/styles.css";

const Test3 = () => {
  return (
    <div className="body">
      <TestSheet
        question={"Q3. 오늘 할일은 무엇인가요?"}
        one={"내 책상 주변을 정리한다."}
        two={"다이어리를 꾸민다."}
        three={"새로운 친구들을 만난다."}
        four={"낮잠을 잔다."}
        nextHrefName={"/#/test4"}
      >
        <div className="w-30% progress"></div>
      </TestSheet>
    </div>
  );
};

export default Test3;
