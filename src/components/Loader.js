import React from "react";
import { CubeGrid } from "styled-loaders-react";
import "../static/css/styles.css";

const Loader = () => {
  return (
    <div className="body w-375px h-screen items-center justify-center">
      <div className="text-sm absolute z-50">
        {/* <CubeGrid color="#f26431" size="30px" /> */}
        <CubeGrid color="#ffffff" size="30px" />
        {/* <Circular color="#ffffff" size="30px" /> */}
      </div>
    </div>
  );
};

export default Loader;
