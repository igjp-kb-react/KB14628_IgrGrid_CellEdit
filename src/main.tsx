import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/app";

import "@infragistics/igniteui-react-grids/grids";
import "@infragistics/igniteui-react-grids/grids/themes/light/bootstrap.css";

import { IgrGridModule } from "@infragistics/igniteui-react-grids";

[IgrGridModule].forEach((module) => module.register());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
