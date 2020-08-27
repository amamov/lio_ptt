import React from "react";
import { Link } from "react-router-dom";
import "../static/css/styles.css";

const Final = () => {
  return (
    <div className="body">
      <div id="container" class="container justify-center">
        <Link to={{ pathname: "/intro" }} class="move-bt">
          다시 검사하기
        </Link>
        <a
          href="https://www.google.com"
          class="move-bt"
          target="_blank"
          rel="noopener noreferrer"
        >
          텀블벅 바로가기
        </a>
      </div>
    </div>
  );
};

export default Final;
