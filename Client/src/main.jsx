import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./styles/theme.css";
import "./styles/style.css";

AOS.init({
  duration:1000,
  once:true
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);