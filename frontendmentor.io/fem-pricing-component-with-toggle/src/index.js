import "windi.css";
import "./index.css";

import React from "react";
import reactDom from "react-dom/client";

import App from "./App.jsx";

const root = reactDom.createRoot(document.getElementById("root"));

root.render(<App />);
