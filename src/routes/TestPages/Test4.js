import React from "react";
import TestSheet from "../../components/TestSheet";
import LoaderContainer from "../../components/LoaderContainer";
import "../../static/css/styles.css";
import "./TestBg.css";

const Test4 = () => {
  return (
    <LoaderContainer>
      <div className="w-375px h-667px p-12 bg4">
        <div className="mt-64">
          <TestSheet
            one={"바로 일어나서 욕을 한다."}
            two={"옷이 더러워졌는지 확인한다."}
            three={"웃으며 괜찮다고 이야기한다."}
            four={"아무일도 없었던 것 처럼 유유히 앞칸으로 옮긴다."}
            nextHrefName={"/#/test5"}
            btColor={"text-orange"}
          >
            <div className="w-40% progress"></div>
          </TestSheet>
        </div>
      </div>
    </LoaderContainer>
  );
};

export default Test4;
