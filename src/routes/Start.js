import React from "react";
import "../static/css/styles.css";
import "../static/css/fonts.css";
import LoaderContainer from "../components/LoaderContainer";
import StartPresenter from "../components/StartPresenter";

const Start = () => {
  return (
    <LoaderContainer>
      <div className="body md:h-screen md:items-center">
        <StartPresenter />
      </div>
    </LoaderContainer>
  );
};

export default Start;
