import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";

import MuiThemeProvider from "@mui/system/ThemeProvider";
import Theme from "./MuiTheme";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MuiThemeProvider theme={Theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>
);
