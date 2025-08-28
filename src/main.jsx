import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/Search-and-Filtering-System-with-React">
    <App />
  </BrowserRouter>
);
