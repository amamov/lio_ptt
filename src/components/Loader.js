import React from "react";
import { CubeGrid } from "styled-loaders-react";
import "../static/css/styles.css";

const Loader = () => {
  return (
    <div className="w-375px h-screen flex items-center justify-center bg-Navy">
      <div className="absolute z-50">
        <CubeGrid color="#f26431" size="30px" />
      </div>
    </div>
  );
};

export default Loader;
