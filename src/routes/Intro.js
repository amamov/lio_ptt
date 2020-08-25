import React from "react";
import { Link } from "react-router-dom";
import "../static/css/styles.css";
import "./image.css";
import LoaderContainer from "../components/LoaderContainer";

const Intro = () => {
  const PT_LS = "personality_type";
  localStorage.setItem(PT_LS, JSON.stringify({ A: 0, B: 0, C: 0, D: 0 })); //초기화
  return (
    <LoaderContainer delay={0}>
      <div
        id="container"
        className="flex flex-col justify-end items-center w-375px h-1300px bgIntro"
      >
        <Link to={{ pathname: "./test1" }}>
          <div className="bg-blue-2 w-286px h-48px flex justify-center items-center rounded-md mb-8">
            <span>테스트 시작하기</span>
          </div>
        </Link>
      </div>
    </LoaderContainer>
  );
};

export default Intro;
