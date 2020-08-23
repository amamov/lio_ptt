import React from "react";
import { Link } from "react-router-dom";
import "../static/css/styles.css";
import "./positionStyle.css";

const Andstart = () => {
  return (
    <div className="flex flex-col relative items-center w-375 h-667px">
      <img
        src={require("../images/Start/bg2.svg")}
        type=""
        alt="Lio"
        title="Lio"
        className="w-375 h-667px"
      />
      <Link
        to={{ pathname: "/intro" }}
        style={{ position: "absolute", bottom: 95 }}
      >
        <img
          src={require("../images/Start/h.svg")}
          alt="Lio"
          title="Lio"
          className="animate-pulse"
        />
      </Link>
      <img
        src={require("../images/Start/m.svg")}
        alt="Lio"
        title="Lio"
        className="absolute bottom-0 w-375px"
      />
    </div>
  );
};

export default Andstart;
