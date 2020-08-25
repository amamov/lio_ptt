import React from "react";
import TestSheet from "../../components/TestSheet";
import LoaderContainer from "../../components/LoaderContainer";
import "../../static/css/styles.css";
import "./TestBg.css";

const Test2 = () => {
  return (
    <LoaderContainer>
      <div className="w-375px h-667px p-12 bg2">
        <div className="mt-64">
          <TestSheet
            one={"밥을 먹는다."}
            two={"욕실로 가서 씻는다."}
            three={"휴대폰을 틀어 SNS를 확인한다."}
            four={"누워서 뒹굴거린다."}
            nextHrefName={"/#/test3"}
            btColor={"text-orange"}
          >
            <div className="w-20% progress"></div>
          </TestSheet>
        </div>
      </div>
    </LoaderContainer>
  );
};

export default Test2;
