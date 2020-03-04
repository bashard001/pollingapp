import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/card-style.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Cards";



ReactDOM.render(<Card />, document.getElementById("root"));
registerServiceWorker();
