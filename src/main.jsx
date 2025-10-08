import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../src/index.css";
// import "../src/utils/validation";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
