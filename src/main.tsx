import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

function ThemeInit() {
  useEffect(() => {
    try {
      const saved = localStorage.getItem("trip-theme");
      if (saved && JSON.parse(saved) === "dark") {
        document.documentElement.classList.add("dark");
      }
    } catch {
      /* ignore */
    }
  }, []);
  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeInit />
    <App />
  </StrictMode>
);
