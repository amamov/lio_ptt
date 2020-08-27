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
      <img
        src={require("../../images/q/10.png")}
        alt="Lio"
        title="Lio"
        className="absolute w-375px z-0"
      />
      <img
        src={require("../../images/w/10.svg")}
        alt="Lio"
        title="Lio"
        className="absolute w-375px z-10"
      />
      {isReady ? (
        <div className="w-375px h-667px p-12 z-30">
          <div className="mt-56">
            <div className="flex flex-col items-start">
              <button
                className="text-left animate-pulse"
                style={{ display: showA() }}
                onClick={(event) => handleClickA(event)}
              >
                <span className="mr-2">1</span>
                떡볶이
              </button>

              <button
                className="text-left mt-3 animate-pulse"
                style={{ display: showB() }}
                onClick={(event) => handleClickB(event)}
              >
                <span className="mr-2">2</span>
                셀러드
              </button>

              <button
                className="text-left mt-3 animate-pulse"
                style={{ display: showC() }}
                onClick={(event) => handleClickC(event)}
              >
                <span className="mr-2">3</span>
                정갈한 가정식
              </button>

              <button
                className="text-left mt-3 animate-pulse"
                style={{ display: showD() }}
                onClick={(event) => handleClickD(event)}
              >
                <span className="mr-2">4</span>
                내일 생각하자.. 인생이란...
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Test10;
