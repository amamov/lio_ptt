import React from "react";
import TestSheet from "../../components/TestSheet";
import LoaderContainer from "../../components/LoaderContainer";
import "../../static/css/styles.css";
import "./TestBg.css";

const Test5 = () => {
  return (
    <LoaderContainer>
      <div className="w-375px h-667px p-12 bg5">
        <div className="mt-56">
          <TestSheet
            one={"가장 친한 친구에게 전화를 걸어 잡담을 한다."}
            two={"부모님에게 전화해서 하소연한다."}
            three={
              "더친한 친구들로 구성된 단톡방에서 친구들에게 아까 나를 넘어뜨린 사람에 대해 욕을 한다."
            }
            four={"연락을 하지 않고 이어폰을 끼고 좋아하는 음악을 듣는다."}
            nextHrefName={"/#/test6"}
            btColor={"text-orange"}
          >
            <div className="w-50% progress"></div>
          </TestSheet>
        </div>
      </div>
    </LoaderContainer>
  );
};

export default Test5;
