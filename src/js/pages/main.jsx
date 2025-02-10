import React from "react";
import ReactDOM from "react-dom/client";
import "../../styles/index.css";
import Home from "../components/Home";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);