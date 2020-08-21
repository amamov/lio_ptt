import React, { useState, useEffect } from "react";
import "../static/css/styles.css";

const PT_LS = "personality_type";

const TestSheet = ({ question, one, two, three, four, nextHrefName }) => {
  const [pt_obj, setPt_obj] = useState(JSON.parse(localStorage.getItem(PT_LS)));

  useEffect(() => {
    localStorage.setItem(PT_LS, JSON.stringify(pt_obj));
    return () => {
      document.location.href = nextHrefName;
    };
  }, [pt_obj, nextHrefName]);

  const handleClickA = (event) => {
    event.preventDefault();
    setPt_obj({
      A: pt_obj["A"] + 1,
      B: pt_obj["B"],
      C: pt_obj["C"],
      D: pt_obj["D"],
    });
  };
  const handleClickB = (event) => {
    event.preventDefault();
    // setReadyToGo(true);
    setPt_obj({
      A: pt_obj["A"],
      B: pt_obj["B"] + 1,
      C: pt_obj["C"],
      D: pt_obj["D"],
    });
  };
  const handleClickC = (event) => {
    event.preventDefault();
    // setReadyToGo(true);
    setPt_obj({
      A: pt_obj["A"],
      B: pt_obj["B"],
      C: pt_obj["C"] + 1,
      D: pt_obj["D"],
    });
  };
  const handleClickD = (event) => {
    event.preventDefault();
    // setReadyToGo(true);
    setPt_obj({
      A: pt_obj["A"],
      B: pt_obj["B"],
      C: pt_obj["C"],
      D: pt_obj["D"] + 1,
    });
  };
  return (
    <div id="container" className="container">
      <span className="block text-center text-3xl">스트레스 유형 진단하기</span>
      <span className="block mt-10 text-xl">{question}</span>
      <div className="flex flex-col items-start mt-10 animate-pulse">
        <button className="text-left" onClick={(event) => handleClickA(event)}>
          {one}
        </button>

        <button
          className="text-left mt-3"
          onClick={(event) => handleClickB(event)}
        >
          {two}
        </button>

        <button
          className="text-left mt-3"
          onClick={(event) => handleClickC(event)}
        >
          {three}
        </button>

        <button
          className="text-left mt-3"
          onClick={(event) => handleClickD(event)}
        >
          {four}
        </button>
      </div>

      <div id="progress_bar" className="progress_bar">
        <div className="w-10% progress"></div>
      </div>
    </div>
  );
};

export default TestSheet;
