import React from "react";
import "../../static/css/styles.css";
import { Link } from "react-router-dom";

const Result_C = () => {
  return (
    <div className="body">
      <div className="flex flex-col relative w-375px h-1100px">
        <img
          src={require("../../images/Result/5_result_tikiiitikiii.svg")}
          alt="Lio"
          title="Lio"
          className="absolute"
        />
        <Link to={{ pathname: "./final" }}>
          <div className="bg-blue-2 w-286px h-48px flex justify-center items-center rounded-md mb-8">
            <span className="text-white">다음으로</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Result_C;
