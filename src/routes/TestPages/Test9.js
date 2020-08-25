import React from "react";
import TestSheet from "../../components/TestSheet";
import LoaderContainer from "../../components/LoaderContainer";
import "../../static/css/styles.css";
import "./TestBg.css";

const Test2 = () => {
  return (
    <LoaderContainer>
      <div className="w-375px h-667px p-12 bg8">
        <div className="mt-56">
          <TestSheet
            one={"기억나지 않는다. 그런데 누군가와 싸우고 있었던 것 같다."}
            two={"물에 빠져 허우적거리는 꿈을 꾸었다."}
            three={"사방이 벽으로 된 밀폐된 창고에 갇혀있는 꿈을 꾸었다."}
            four={
              "누군가에게 계속 쫒기다가 공간이 바뀌었는데 또 꿈이었다. 겨우 깼다.|꿈속의 꿈|"
            }
            nextHrefName={"/#/test10"}
            btColor={"text-orange"}
          >
            <div className="w-90% progress"></div>
          </TestSheet>
        </div>
      </div>
    </LoaderContainer>
  );
};

export default Test2;
