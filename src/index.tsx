import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./bridge";
import "./style.css";

ReactDOM.render(<App />, document.getElementById("root"));

if (process.env.NODE_ENV === "development") import("./eruda");
