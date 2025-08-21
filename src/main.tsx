import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { initMetaPixel } from "./lib/metaPixel";

// Inicializa o Meta Pixel (client-side) quando a variável VITE_META_PIXEL_ID estiver definida
const pixelId = (import.meta as any).env?.VITE_META_PIXEL_ID;
if (pixelId) initMetaPixel(String(pixelId));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
