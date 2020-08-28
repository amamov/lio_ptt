import React, { useState, useEffect, useCallback } from "react";
import "../static/css/styles.css";

const PT_LS = "personality_type";
const RT_LS = "result_types";

const TestSheet = ({
  one,
  two,
  three,
  four,
  nextHrefName,
  btColor,
  mt = "mt-8",
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
    console.log(result_list);
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
    <div className="flex flex-col items-start">
      <button
        className="text-left animate-pulse w-full bt_hover"
        onClick={(event) => handleClickD(event)}
      >
        <span className={`${btColor} mr-2 text-extrabold text-16px w-full`}>
          1
        </span>
        <span className="text-16px text-extrabold">{four}</span>
      </button>
      <button
        className={`text-left ${mt} animate-pulse w-full bt_hover`}
        onClick={(event) => handleClickB(event)}
      >
        <span className={`${btColor} mr-2 text-extrabold text-16px`}>2</span>
        <span className="text-16px text-extrabold">{two}</span>
      </button>
      <button
        className={`text-left ${mt} animate-pulse w-full bt_hover`}
        onClick={(event) => handleClickA(event)}
      >
        <span className={`${btColor} mr-2 text-extrabold text-16px`}>3</span>
        <span className="text-16px text-extrabold">{one}</span>
      </button>

      <button
        className={`text-left ${mt} animate-pulse w-full bt_hover`}
        onClick={(event) => handleClickC(event)}
      >
        <span className={`${btColor} mr-2 text-extrabold text-16px`}>4</span>
        <span className="text-16px text-extrabold">{three}</span>
      </button>
    </div>
  );
};

export default TestSheet;
