import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fontsource/source-sans-pro"; // Defaults to 400 normal
import "@fontsource/source-sans-pro/700.css"; // For bold usage

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
