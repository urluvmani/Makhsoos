import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// ⚡ Remove heavy FontAwesome CSS if not needed
// import "@fortawesome/fontawesome-free/css/all.min.css";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"; // ✅ correct import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
