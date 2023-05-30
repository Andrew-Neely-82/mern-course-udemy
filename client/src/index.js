import { AppProvider } from "./context/appContext";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "normalize.css";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
);
