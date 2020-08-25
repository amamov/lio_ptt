import React from "react";
import TestSheet from "../../components/TestSheet";
import LoaderContainer from "../../components/LoaderContainer";
import "../../static/css/styles.css";
import "./TestBg.css";

const Test8 = () => {
  return (
    <LoaderContainer>
      <div className="w-375px h-667px p-12 bg8">
        <div className="mt-56">
          <TestSheet
            one={"매운 음식을 시켜먹는다."}
            two={"이불 속에 들어간다."}
            three={"슬라임을 만지작 거린다."}
            four={"샤워를 하면서 좋아하는 노래를 부른다.(듣는다.)"}
            nextHrefName={"/#/test9"}
            btColor={"text-black"}
          >
            <div className="w-80% progress"></div>
          </TestSheet>
        </div>
      </div>
    </LoaderContainer>
  );
};

export default Test8;
