import React from "react";
import TestSheet from "../../components/TestSheet";
import LoaderContainer from "../../components/LoaderContainer";
import "../../static/css/styles.css";
// import "./TestBg.css";

const Test3 = () => {
  return (
    <LoaderContainer>
      <div className="w-375px h-667px p-12 text-black bg3">
        <div className="mt-64">
          <TestSheet
            one={"내 책상 주변을 정리한다."}
            two={"다이어리를 꾸민다."}
            three={"새로운 친구들을 만난다."}
            four={"낮잠을 잔다."}
            nextHrefName={"/#/test4"}
            btColor={"text-black"}
          >
            <div className="w-30% progress"></div>
          </TestSheet>
        </div>
      </div>
    </LoaderContainer>
  );
};

export default Test3;
