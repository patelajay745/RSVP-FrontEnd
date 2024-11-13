import { RouteObject } from "react-router-dom";
import Layout from "../pages/Layout";
import { ErrorPage } from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
];
