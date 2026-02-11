import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../components/layouts/RootLayout";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      // Weitere Routes hier hinzufügen
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
