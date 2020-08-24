import React from "react";
import { Link } from "react-router-dom";
import "../static/css/styles.css";
import "./image.css";

const Intro = () => {
  const PT_LS = "personality_type";
  localStorage.setItem(PT_LS, JSON.stringify({ A: 0, B: 0, C: 0, D: 0 })); //초기화
  return (
    <div className="body">
      <div id="container" className="flex flex-col w-375px h-1436px bgIntro">
        <div className="header">
          <div>LIOLAB</div>
          <div>LIO STUDIO</div>
        </div>
        <div className="p-10 pt-5">
          <span id="title" className="block text-2xl font-bold mb-4">
            스트레스,
            <br />
            행복을 위해 소멸되다.
          </span>
          <span id="sub-title" className="block mb-4">
            community platform
            <br />
            20200707
          </span>

          <div id="description" className="w-full">
            ‘L I O LAB’은 현대인을 관찰하여 문제를 발견하고 분석하며, 리오만의
            새로운 해결 방식을 제시하는 프로젝트 연구실입니다. <br />
            <br />
            여느 때와 같이 20200720 리오랩은 연구 중, 스트레스 세포 ST-02∞를
            발견하였습니다. ST-02∞는 현대인의 스트레스를 유발하고 극대화하는
            바이러스 중 하나로, 우리가 살아가는 데 압박을 주는 내면의
            요소입니다. ST-02∞가 존재하는 한 현대인들이 만성 피로에서 벗어날 수
            없는 것이라는 결론이 도출되었습니다. 이 세포를 박멸하기 위해서는
            ‘소멸’ 형태의 면역 시스템이 필요합니다. 면역 시스템을 갖출 방법을
            모색하기 위해, 그간 LIO LAB에서는 연구가 활발히 진행되었습니다.
            <br />
            <br />
            연구 결과, 바이러스 세포를 네가지 유형으로 분류하였습니다. 또한
            각각의 바이러스에 대항하는 항체 anti ST-02 를 만들어 내는 데
            성공하였습니다. 리오랩은 스트레스를 소멸시키기 위한 방안으로
            ‘행위’에 주목 했습니다. 어떠한 행위를 함으로써 일부, 혹은 전체
            스트레스가 해소되는 현상에서 세포와 행위, 그 둘사이에 연관성을
            찾아내기 위해 노력하였습니다.
            <br />
            <br /> 행위를 따라하면 항체가 몸 내부에 생성되는 원리에
            집중하였는데요, 행위를 반복함으로써 항체가 강화 되고 ST-02∞를
            박멸하게 되는 긍정적인 해결방안이 만들어졌습니다. 리오랩은 이러한
            연구를 집약한 결과물인 ‘프리미엄 소멸코스’ 세상에 공개하고자 합니다.
          </div>
          <Link to={{ pathname: "./test1" }} className="move-bt">
            테스트 시작하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
