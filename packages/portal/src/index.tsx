import React from "react";
import {createRoot} from "react-dom/client";
import Login from "./components/Login";

import "@adminshop/theme/index.css";

const rootContianer = document.createElement("div");
rootContianer.classList.add("app-container");

const root = createRoot(rootContianer);
root.render(<Login />);

document.body.appendChild(rootContianer);