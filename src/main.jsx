import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.jsx";
import AppLayout from "./components/universal/AppLayout.jsx";
import Dashboard from "./pages/dashboard.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Requests from "./pages/Requests.jsx";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import CreateRequest from "./pages/CreateRequest";
import action from "@/actions/createRequest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <p>Error page</p>,
    children: [
      { index: true, element: <App /> },
      {
        path: "requests",
        element: <Requests />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "create-request",
        element: <CreateRequest />,
        action: action,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
