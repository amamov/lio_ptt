import React from "react";
import "../static/css/styles.css";

const Prestart = () => {
  return (
    <div className="flex flex-col relative w-375px h-1100px">
      <img
        src={require("../images/Start/prebg.svg")}
        // src={require("../images/3.svg")}
        alt="Lio"
        title="Lio"
        className="absolute"
      />
      <div className=""></div>
    </div>
  );
};

export default Prestart;
