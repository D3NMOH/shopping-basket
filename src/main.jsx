import "./index.css";
import "./App.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./components/ProductList";
import { ProductDetails } from "./components/ProductDetails";
import * as React from "react";
import RootLayout from "./components/RootLayout";
import HomePage from "./components/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/HomePage", element: <HomePage /> },
      {
        path: "/Products",
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
