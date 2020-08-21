import React, { useState, useEffect } from "react";
import "../static/css/styles.css";

const PT_LS = "personality_type";

const TestSheet = ({ question, one, two, three, four, nextPagePath }) => {
  const hrefName = `/#/${nextPagePath}`;
  const [pt_obj, setPt_obj] = useState({ A: 0, B: 0, C: 0, D: 0 });
  const [readyToGo, setReadyToGo] = useState(false);

  useEffect(() => {
    localStorage.setItem(PT_LS, JSON.stringify(pt_obj));
    setReadyToGo(true);
    if (readyToGo) {
      document.location.href = hrefName;
    }
  }, [pt_obj]);

  const handleClickA = (event) => {
    event.preventDefault();
    setPt_obj({ A: pt_obj["A"] + 1, B: 0, C: 0, D: 0 });
  };
  const handleClickB = (event) => {
    event.preventDefault();
    setPt_obj({ A: 0, B: pt_obj["B"] + 1, C: 0, D: 0 });
  };
  const handleClickC = (event) => {
    event.preventDefault();
    setPt_obj({ A: 0, B: 0, C: pt_obj["C"] + 1, D: 0 });
  };
  const handleClickD = (event) => {
    event.preventDefault();
    setPt_obj({ A: 0, B: 0, C: 0, D: pt_obj["D"] + 1 });
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
      <div Dd="progress_bar" className="progress_bar">
        <div className="w-10% progress"></div>
      </div>
    </div>
  );
};

export default TestSheet;
