import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import Details from "../components/details";
const Router = ({ children }) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      loader: () => fetch("http://localhost:5000/coffee"),
    },
    {
      path: "/coffee/:id",
      element: <UpdateCoffee></UpdateCoffee>,
      loader: ({ params }) =>
        fetch(`http://localhost:5000/coffee/${params.id}`),
    },
    {
      path: "/coffee/details/:id",
      element: <Details></Details>,
      loader: ({ params }) =>
        fetch(`http://localhost:5000/coffee/${params.id}`),
    },
    {
      path: "/addCoffee",
      element: <AddCoffee></AddCoffee>,
    },
  ]);

  return <RouterProvider router={router}>{children}</RouterProvider>;
};

export default Router;
