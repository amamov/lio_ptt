import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Start from "./routes/Start";
import Intro from "./routes/Intro";
import Test1 from "./routes/TestPages/Test1";
import Test2 from "./routes/TestPages/Test2";
// import Result_A from "../routes/ResultsPages/Result_A";
// import Result_B from "../routes/ResultsPages/Result_B";
// import Result_C from "../routes/ResultsPages/Result_C";
// import Result_D from "../routes/ResultsPages/Result_D";
// import Final from "../routes/Final";

export default () => {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Start} />
      <Route path="/intro" exact={true} component={Intro} />
      <Route path="/test1" exact={true} component={Test1} />
      <Route path="/test2" exact={true} component={Test2} />
      {/* <Route path="/test3" exact={true} component={Test3} />
      <Route path="/test4" exact={true} component={Test4} />
      <Route path="/test5" exact={true} component={Test5} />
      <Route path="/test6" exact={true} component={Test6} />
      <Route path="/test7" exact={true} component={Test7} />
      <Route path="/test8" exact={true} component={Test8} />
      <Route path="/test9" exact={true} component={Test9} />
      <Route path="/test10" exact={true} component={Test10} />
      <Route path="/resultA" exact={true} component={Result_A} />
      <Route path="/resultB" exact={true} component={Result_B} />
      <Route path="/resultC" exact={true} component={Result_C} />
      <Route path="/resultD" exact={true} component={Result_D} />
      <Route path="/final" exact={true} component={Final} /> */}
    </HashRouter>
  );
};
