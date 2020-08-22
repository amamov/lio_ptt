import React from "react";
import "../static/css/styles.css";

const Prestart = () => {
  return (
    <div className="flex flex-col relative">
      <img
        src={require("../images/prestartImage.png")}
        alt="Lio"
        title="Lio"
        className=""
      />
      <div className="absolute top-116px left-135px">title</div>
    </div>
  );
};

export default Prestart;
