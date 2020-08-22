import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../static/css/styles.css";
import "../static/css/fonts.css";

const Start = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 5000);
  }, []);

  return (
    <div className="body">
      {isReady ? (
        <Link to={{ pathname: "/intro" }}>
          {/* <img src={require("../images/.png")} alt="Lio" title="Lio" /> */}
          <div className="poster-font w-full h-screen">
            image(터치하면 넘어 간다.)
          </div>
        </Link>
      ) : (
        <div id="startLoader" className="bg-blue">
          <img
            src={require("../images/startLoadingImage.PNG")}
            alt="Lio"
            title="Lio"
          />
        </div>
      )}
    </div>
  );
};

export default Start;
