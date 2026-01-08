import "@fontsource/space-grotesk";
import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ThemeChangeStore from "./store/themeChangeStore.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeChangeStore>
      <App />
    </ThemeChangeStore>
  </StrictMode>
);
