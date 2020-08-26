import React from "react";
import "../static/css/styles.css";

// const [isReady, setIsReady] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {setIsReady(true)}, 2000);
//   }, []);

const Loader = () => {
  return (
    <div className="body w-375px h-667px items-center justify-center">
      <div id="loader" className="text-sm absolute z-50"></div>
    </div>
  );
};

export default Loader;
