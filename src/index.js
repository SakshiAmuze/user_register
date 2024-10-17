import React from "react";
import ReactDOM from "react-dom/client";

import {
  RouterProvider
} from "react-router-dom";
import customRouter from "./project-router.js";
import { Provider } from "react-redux";
import { store } from "./redux/userStore.js";


const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(<Provider store={store}><RouterProvider router={customRouter}></RouterProvider></Provider>);