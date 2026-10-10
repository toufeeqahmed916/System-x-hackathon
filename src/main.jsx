import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Self-hosted fonts: only the weights the site actually uses
import "@fontsource/space-grotesk/latin-700.css";
import "@fontsource/hanken-grotesk/latin-400.css";
import "@fontsource/jetbrains-mono/latin-400.css";
import "@fontsource/jetbrains-mono/latin-700.css";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
