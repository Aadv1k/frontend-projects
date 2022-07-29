import "windi.css"; // eslint-disable-line
import "./index.css";

import React from "react";
import reactDom from "react-dom/client";

import App from "./App";

const root = reactDom.createRoot(document.getElementById("root"));

root.render(<App />);
