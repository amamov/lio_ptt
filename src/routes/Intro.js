import React from "react";
import { Link } from "react-router-dom";
import "../static/css/styles.css";

const Intro = () => {
  const PT_LS = "personality_type";
  localStorage.setItem(PT_LS, JSON.stringify({ A: 0, B: 0, C: 0, D: 0 })); //초기화
  return (
    <div className="body">
      {/* <div id="loader" className="my-auto text-sm">
    Loding
  </div>  */}
      <div id="container" className="container">
        <div>
          <span id="title" className="block text-xl mb-4">
            스트레스,
            <br />
            행복을 위해 소멸되다.
          </span>
          <span id="sub-title" className="block mb-4">
            community platform
            <br />
            2020.
          </span>
        </div>
        <div id="description" className="w-full h-25rem overflow-auto"></div>
        {/* <div className="move-bt">

        </div> */}
        <Link to={{ pathname: "./test1" }} className="move-bt">
          테스트 시작하기
        </Link>
      </div>
    </div>
  );
};

export default Intro;
