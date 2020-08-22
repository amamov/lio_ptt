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
            Q10. 긴 하루를 끝내고 당신은 잠에 들었습니다. 어떤 꿈을 꾸고 있나요?
            행복해보이네요...
          </span>
          <div className="flex flex-col items-start mt-10 animate-pulse">
            <button
              className="text-left"
              style={{ display: showA() }}
              onClick={(event) => handleClickA(event)}
            >
              기억나지 않는다. 그런데 누군가와 싸우고 있었던 것 같다.
            </button>

            <button
              className="text-left mt-3"
              style={{ display: showB() }}
              onClick={(event) => handleClickB(event)}
            >
              물에 빠져 허우적거리는 꿈을 꾸었다.
            </button>

            <button
              className="text-left mt-3"
              style={{ display: showC() }}
              onClick={(event) => handleClickC(event)}
            >
              사방이 벽으로 된 밀폐된 창고에 갇혀있는 꿈을 꾸었다.
            </button>

            <button
              className="text-left mt-3"
              style={{ display: showD() }}
              onClick={(event) => handleClickD(event)}
            >
              누군가에게 계속 쫒기다가 공간이 바뀌었는데 또 꿈이었다. 겨우 깼다.
              |꿈속의 꿈|
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
