import React from "react";
import "../static/css/styles.css";

const Prestart = () => {
  return (
    <div className="flex flex-col relative w-375px h-1100px">
      <img
        src={require("../images/Start/prebg.svg")}
        alt="Lio"
        title="Lio"
        className="absolute w-375px"
      />
      <div className=""></div>
    </div>
  );
};

export default Prestart;
