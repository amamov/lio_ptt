import React, { useState, useEffect } from "react";
import "../static/css/styles.css";
import "../static/css/fonts.css";
import Prestart from "./Prestart";
import Andstart from "./AndStart";

const StartPresenter = () => {
  const [timeDelay, setTimeDelay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTimeDelay(false);
    }, 1000000);
  }, []);

  return timeDelay ? <Prestart /> : <Andstart />;
};

export default StartPresenter;
