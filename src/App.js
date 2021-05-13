import React from "react";
import s from "./App.modules.scss";
import "./custom.css";
import cn from "classnames";

const App = () => {
  return <div className={cn(s.header, "color")}>This is React App</div>;
};

export default App;
