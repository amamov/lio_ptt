import React, { useState, useEffect } from "react";
import "../static/css/styles.css";
import "../static/css/fonts.css";
import Prestart from "./Prestart";
import Andstart from "./AndStart";
import LoadImage from "./LoadImage";

const StartPresenter = () => {
  const [timeDelay, setTimeDelay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTimeDelay(false);
    }, 3000);
  }, []);

  return (
    <>
      <LoadImage />
      {timeDelay ? <Prestart /> : <Andstart />}
    </>
  );
};

export default StartPresenter;
