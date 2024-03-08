import "./index.css";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Route,
} from "react-router-dom";
import ProductList from "./components/ProductList";
import { ProductDetails } from "./components/ProductDetails.jsx";
import "./App.css";
import * as React from "react";
import RootLayout from "./components/RootLayout/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/ProductList",
        children: [
          {
            index: true,
            element: <ProductList />,
          },
          {
            path: ":prodId",
            element: <ProductDetails />,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
