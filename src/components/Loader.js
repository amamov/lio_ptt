import React from "react";
import { CubeGrid } from "styled-loaders-react";
import "../static/css/styles.css";

const Loader = () => {
  return (
    <div className="body w-375px h-667px items-center justify-center bg-black">
      <div className="absolute z-50">
        {/* <CubeGrid color="#f26431" size="30px" /> */}
        <CubeGrid color="#ffffff" size="30px" />
        {/* <Circular color="#ffffff" size="30px" /> */}
      </div>
    </div>
  );
};

export default Loader;
