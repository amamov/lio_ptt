import React, { useState, useEffect } from "react";
import "../../static/css/styles.css";
import Loader from "../../components/Loader";

const RT_LS = "result_types";
let rt_list = [];

const Test10 = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    rt_list = JSON.parse(localStorage.getItem(RT_LS));
    setIsReady(true);
  }, []);

  const handleClickA = (event) => {
    event.preventDefault();
    document.location.href = "/#/resultA";
  };
  const handleClickB = (event) => {
    event.preventDefault();
    document.location.href = "/#/resultB";
  };
  const handleClickC = (event) => {
    event.preventDefault();
    document.location.href = "/#/resultC";
  };
  const handleClickD = (event) => {
    event.preventDefault();
    document.location.href = "/#/resultD";
  };

  const showA = () => {
    if (rt_list.includes("A")) {
      return "block";
    } else {
      return "none";
    }
  };

  const showB = () => {
    if (rt_list.includes("B")) {
      return "block";
    } else {
      return "none";
    }
  };

  const showC = () => {
    if (rt_list.includes("C")) {
      return "block";
    } else {
      return "none";
    }
  };

  const showD = () => {
    if (rt_list.includes("D")) {
      return "block";
    } else {
      return "none";
    }
  };

  return (
    <div className="body">
      {isReady ? (
        <div id="container" className="container">
          <span className="block text-center text-3xl">
            스트레스 유형 진단하기
          </span>
          <span className="block mt-10 text-xl">
            Q10. 자기 전, 내일 먹을 점심을 고민합니다. 무엇을 먹을까요?
          </span>
          <div className="flex flex-col items-start mt-10 animate-pulse">
            <button
              className="text-left"
              style={{ display: showA() }}
              onClick={(event) => handleClickA(event)}
            >
              떡볶이
            </button>

            <button
              className="text-left mt-3"
              style={{ display: showB() }}
              onClick={(event) => handleClickB(event)}
            >
              셀러드
            </button>

            <button
              className="text-left mt-3"
              style={{ display: showC() }}
              onClick={(event) => handleClickC(event)}
            >
              정갈한 가정식
            </button>

            <button
              className="text-left mt-3"
              style={{ display: showD() }}
              onClick={(event) => handleClickD(event)}
            >
              내일 생각하자.. 인생이란...
            </button>
          </div>

          <div id="progress_bar" className="progress_bar">
            <div className="w-full progress"></div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Test10;
