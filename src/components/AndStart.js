import React from "react";
import { Link } from "react-router-dom";
import "../static/css/styles.css";

const Andstart = () => {
  return (
    <div className="w-full flex justify-center relative">
      <img src={require("../images/startWow.png")} alt="Lio" title="Lio" />
      <Link to={{ pathname: "/intro" }} style={{ position: "absolute" }}>
        <img
          src={require("../images/startChar.png")}
          alt="Lio"
          title="Lio"
          className="animate-pulse"
        />
      </Link>
    </div>
  );
};

export default Andstart;
