import React from "react";
import "../static/css/styles.css";

// const [isReady, setIsReady] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {setIsReady(true)}, 2000);
//   }, []);

const Loader = () => {
  return (
    <div className="body h-screen">
      <div id="loader" className="text-sm"></div>
    </div>
  );
};

export default Loader;
