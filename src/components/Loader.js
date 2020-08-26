import React from "react";
import { CubeGrid } from "styled-loaders-react";
import "../static/css/styles.css";

const Loader = () => {
  return (
    <div className="w-375px h-screen flex items-center justify-center bg-black">
      <div className="absolute z-50">
        <CubeGrid color="#ffffff" size="30px" />
      </div>
    </div>
  );
};

export default Loader;
