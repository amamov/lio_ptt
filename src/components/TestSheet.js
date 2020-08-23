import React, { useState, useEffect, useCallback } from "react";
import "../static/css/styles.css";

const PT_LS = "personality_type";
const RT_LS = "result_types";

const TestSheet = ({
  id,
  question,
  one,
  two,
  three,
  four,
  nextHrefName,
  children,
}) => {
  const [pt_obj, setPt_obj] = useState(JSON.parse(localStorage.getItem(PT_LS)));

  const goToResultPage = useCallback(
    (result_list) => {
      if (result_list.length === 1) {
        document.location.href = `/#/result${result_list[0]}`;
      } else {
        localStorage.setItem(RT_LS, JSON.stringify(result_list));
        document.location.href = nextHrefName;
      }
    },
    [nextHrefName]
  );

  const calculateResults = useCallback(() => {
    const { A, B, C, D } = pt_obj;
    const max = Math.max(A, B, C, D);
    let result_list = [];
    ["A", "B", "C", "D"].forEach((key) => {
      if (pt_obj[key] === max) {
        result_list.push(key);
      }
    });
    goToResultPage(result_list);
  }, [pt_obj, goToResultPage]);

  useEffect(() => {
    localStorage.setItem(PT_LS, JSON.stringify(pt_obj));

    return () => {
      if (nextHrefName !== "/#/test10") {
        document.location.href = nextHrefName;
      } else {
        calculateResults();
      }
    };
  }, [pt_obj, nextHrefName, calculateResults]);

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
    setPt_obj({
      A: pt_obj["A"],
      B: pt_obj["B"] + 1,
      C: pt_obj["C"],
      D: pt_obj["D"],
    });
  };
  const handleClickC = (event) => {
    event.preventDefault();
    setPt_obj({
      A: pt_obj["A"],
      B: pt_obj["B"],
      C: pt_obj["C"] + 1,
      D: pt_obj["D"],
    });
  };
  const handleClickD = (event) => {
    event.preventDefault();
    setPt_obj({
      A: pt_obj["A"],
      B: pt_obj["B"],
      C: pt_obj["C"],
      D: pt_obj["D"] + 1,
    });
  };
  return (
    <div>
      <div className="flex flex-row justify-between p-6 text-xs">
        <div>LIOLAB</div>
        <div>LIO STUDIO</div>
      </div>
      <span className="block text-center text-xl font-bold m-5">{id}</span>
      <div className="p-10 pb-0 pt-0 text-center">
        <span className="text-center text-xl font-bold ">{question}</span>
      </div>
      <div className="flex flex-col items-start mt-10 p-12 animate-pulse">
        <button className="text-left " onClick={(event) => handleClickA(event)}>
          <span className="text-orange mr-2">1</span>
          {one}
        </button>

        <button
          className="text-left mt-8"
          onClick={(event) => handleClickB(event)}
        >
          <span className="text-orange mr-2">2</span>
          {two}
        </button>

        <button
          className="text-left mt-8"
          onClick={(event) => handleClickC(event)}
        >
          <span className="text-orange mr-2">3</span>
          {three}
        </button>

        <button
          className="text-left mt-8"
          onClick={(event) => handleClickD(event)}
        >
          <span className="text-orange mr-2">4</span>
          {four}
        </button>
      </div>
      <div className="p-12">
        <div className="progress_bar">{children}</div>
      </div>
    </div>
  );
};

export default TestSheet;
