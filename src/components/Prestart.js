import React from "react";
import "../static/css/styles.css";

const Prestart = () => {
  return (
    <div className="flex flex-col relative">
      <img
        src={require("../images/bg1.svg")}
        alt="Lio"
        title="Lio"
        className=""
      />
      <div className="absolute top-116px usewidthtocentercheck"></div>
    </div>
  );
};

export default Prestart;
