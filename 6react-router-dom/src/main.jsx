import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import About from "./components/About/About";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "",
    element: <><Header /><Home /><Footer /></>
  },
  {
    path: "about",
    element: <About />
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);