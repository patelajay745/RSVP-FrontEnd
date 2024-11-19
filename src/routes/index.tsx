import { RouteObject } from "react-router-dom";
import Layout from "../pages/Layout";
import { ErrorPage } from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { DashBoardPage } from "@/pages/DashBoardPage";
import { SignupPage } from "@/pages/SignupPage";
import WelcomeDashboard from "@/pages/WelcomePage";
import DashBoardLayout from "@/pages/DashBoardLayout";

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

      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/welcome",
        element: <WelcomeDashboard />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashBoardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <DashBoardPage />,
      },
    ],
  },
];
