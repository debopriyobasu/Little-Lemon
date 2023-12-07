import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";
import Reservations from "./components/Pages/Reservations/BookingPage";
import InProgress from "./components/Pages/InProgress";
import ConfirmedBooking from "./components/Pages/Reservations/ConfirmedBooking";
import Error from "./components/Pages/Error";
import "./index.css";
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <InProgress />,
      },
      {
        path: "/menu",
        element: <InProgress />,
      },
      {
        path: "/reservations",
        element: <Reservations />,
      },
      {
        path: "/order-online",
        element: <InProgress />,
      },
      {
        path: "/login",
        element: <InProgress />,
      },
      {
        path: "/confirmed-booking",
        element: <ConfirmedBooking />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
