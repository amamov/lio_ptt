import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../static/css/styles.css";
import "../static/css/fonts.css";

const Start = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 3000);
  }, []);

  return (
    <div className="body bg-startBg items-center">
      {isReady ? (
        <div className="w-full flex justify-center relative">
          <img
            src={require("../images/startWow.png")}
            alt="Lio"
            title="Lio"
            className="w-414px h-736px"
          />
          <Link
            to={{ pathname: "/intro" }}
            className="absolute top-0 animate-pulse"
          >
            <img
              src={require("../images/startChar.png")}
              alt="Lio"
              title="Lio"
              className="w-414px h-736"
            />
          </Link>
        </div>
      ) : (
        <div className="w-full flex justify-center">
          <img
            src={require("../images/startImage.png")}
            alt="Lio"
            title="Lio"
          />
        </div>
      )}
    </div>
  );
};

export default Start;
