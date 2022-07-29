import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./index.css";

console.log("HELLO", process.env.REACT_APP_NAME);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
