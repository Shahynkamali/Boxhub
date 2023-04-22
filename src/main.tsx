import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import { bootstrap } from "./bootstrap";
import "./index.css";
import "./tailwind.css";

bootstrap().then(() => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
