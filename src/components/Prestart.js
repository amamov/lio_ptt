import React from "react";
import "../static/css/styles.css";
import "./positionStyle.css";

const Prestart = () => {
  return (
    <div className="flex flex-col relative w-375px h-667px">
      <img
        src={require("../images/Start/bg1.svg")}
        alt="Lio"
        title="Lio"
        className="absolute"
      />
      <div className="absolute usewidthtocentercheck"></div>
    </div>
  );
};

export default Prestart;
