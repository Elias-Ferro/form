import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import theme from "./Theme";
import { ThemeProvider } from "styled-components";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
