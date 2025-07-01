import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import "./index.css";
import App from "./App.jsx";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
// import "primereact/resources/themes/arya-orange/theme.css";
// import "primereact/resources/themes/saga-orange/theme.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>
);
