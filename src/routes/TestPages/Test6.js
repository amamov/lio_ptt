import React from "react";
import TestSheet from "../../components/TestSheet";
import LoaderContainer from "../../components/LoaderContainer";
import "../../static/css/styles.css";
import "./TestBg.css";

const Test6 = () => {
  return (
    <LoaderContainer>
      <div className="w-375px h-667px p-12 bg6">
        <div className="mt-64">
          <TestSheet
            one={"반려견과 놀아준다."}
            two={"옷을 갈아입고 친구들을 만나러 나간다."}
            three={"더러워진 옷부터 세탁기에 넣는다."}
            four={"저녁거리가 뭐가 있는지 냉장고를 열어본다."}
            nextHrefName={"/#/test7"}
            btColor={"text-orange"}
          >
            <div className="w-60% progress"></div>
          </TestSheet>
        </div>
      </div>
    </LoaderContainer>
  );
};

export default Test6;
