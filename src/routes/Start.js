import React from "react";
import { Link } from "react-router-dom";
import "../static/css/styles.css";
import "../static/css/fonts.css";

const Start = () => {
  // const PT_LS = "personality_type";
  // const RT_LS = "result_types";

  // localStorage.setItem(PT_LS, {});
  // localStorage.setItem(RT_LS, []);

  return (
    <div className="body">
      {/* <div id="loader">
        <img src="./images/mdr2.png" alt="Loading..." title="Loading..." />
        Loding...
      </div> */}
      <Link to={{ pathname: "/intro" }}>
        {/* <img src={require("../images/.png")} alt="Lio" title="Lio" /> */}
        <div className="poster-font w-full h-screen">
          image(터치하면 넘어 간다.)
        </div>
      </Link>
    </div>
  );
};

export default Start;
