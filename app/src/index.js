import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
// import './fonts/Gilroy/Gilroy-Regular.ttf';

const appContainer = document.createElement("div");
document.body.appendChild(appContainer);
if (!appContainer) {
    throw new Error("Can not find AppContainer");
}
const root = createRoot(appContainer);
console.log(appContainer);

root.render(<App />);
