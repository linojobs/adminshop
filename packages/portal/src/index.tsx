import React from "react";
import {createRoot} from "react-dom/client";
import SignIn from "./components/sign-in";

import "@adminshop/theme/index.css";

const rootContianer = document.createElement("div");
rootContianer.classList.add("app-container");

const root = createRoot(rootContianer);
root.render(<SignIn />);

document.body.appendChild(rootContianer);