import React from "react";
import "../static/css/styles.css";

const positionStyle = {
  top: "116px",
  left: "135px",
};

const Prestart = () => {
  return (
    <div className="flex flex-col relative">
      <img
        src={require("../images/prestartImage.png")}
        alt="Lio"
        title="Lio"
        className=""
      />
      <div class="absolute" style={positionStyle}>
        title
      </div>
    </div>
  );
};

export default Prestart;
