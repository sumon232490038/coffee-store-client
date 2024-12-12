import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
const Router = ({ children }) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
    },
    {
      path: "/addCoffee",
      element: <AddCoffee></AddCoffee>,
    },
    {
      path: "/updateCoffee",
      element: <UpdateCoffee></UpdateCoffee>,
    },
  ]);

  return <RouterProvider router={router}>{children}</RouterProvider>;
};

export default Router;
