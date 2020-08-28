import React from "react";
import "../static/css/styles.css";

const Loader = () => {
  return (
    <>
      <div id="loader">
        <div className="face">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="270px"
            height="270px"
            viewBox="0.032 0 270 270"
            overflow="visible"
            enableBackground="new 0.032 0 270 270"
          >
            <defs></defs>
            <g id="supervisior">
              <g className="head">
                <path
                  fill="#58585A"
                  d="M135,10c33.389,0,64.778,13.002,88.388,36.612S260,101.611,260,135s-13.003,64.779-36.612,88.388
        S168.389,260,135,260s-64.778-13.002-88.388-36.612C23.002,199.779,10,168.389,10,135s13.002-64.779,36.612-88.388
        C70.222,23.002,101.611,10,135,10 M135,0C60.442,0,0,60.441,0,135s60.442,135,135,135s135-60.441,135-135S209.558,0,135,0L135,0z"
                />
              </g>
              <g id="eyeLeft">
                <g className="eyeLeft">
                  <circle
                    className="eye"
                    fill="none"
                    stroke="#58585A"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    cx="66.063"
                    cy="127.51"
                    r="18.849"
                  />
                  <circle
                    className="pupil"
                    fill="#58585A"
                    cx="66.063"
                    cy="127.511"
                    r="8.949"
                  />
                </g>
                <path
                  className="closedLeft"
                  fill="none"
                  stroke="#58585A"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  d="
      M47.238,127.972c0.247,10.194,8.57,18.387,18.824,18.387s18.579-8.193,18.826-18.387"
                />
              </g>
              <g id="eyeRight">
                <g className="eyeRight">
                  <circle
                    className="eye"
                    fill="none"
                    stroke="#58585A"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    cx="203.936"
                    cy="127.51"
                    r="18.849"
                  />
                  <circle
                    className="pupil"
                    fill="#58585A"
                    cx="203.935"
                    cy="127.511"
                    r="8.949"
                  />
                </g>
                <path
                  className="closedRight"
                  fill="none"
                  stroke="#58585A"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  d="
      M185.11,127.972c0.247,10.194,8.571,18.387,18.824,18.387c10.255,0,18.579-8.193,18.826-18.387"
                />
              </g>
              <g className="mouth">
                <polyline
                  className="bar"
                  fill="none"
                  stroke="#58585A"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  points="
      111.532,232.832 135.032,232.832 158.532,232.832 "
                />
                <path
                  className="smile"
                  fill="none"
                  stroke="#58585A"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  d="
      M62.485,168.615c0.951,35.593,33.016,64.198,72.511,64.198c39.503,0,71.566-28.605,72.519-64.198"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="loading-bar"></div>
      </div>
    </>
  );
};

export default Loader;
