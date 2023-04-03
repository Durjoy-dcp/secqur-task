import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import InfoContext from "./components/InfoContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InfoContext>
      <App />
    </InfoContext>
  </React.StrictMode>
);
