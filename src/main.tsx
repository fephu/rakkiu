import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <Router>
    <App />
    <Toaster richColors position="top-center" />
  </Router>
);
