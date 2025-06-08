import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RewardProvider } from "./context/RewardContext";
import ThemeProvider from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <ThemeProvider>
    <RewardProvider>
      <App />
    </RewardProvider>
    </ThemeProvider>
  </React.StrictMode>
);
