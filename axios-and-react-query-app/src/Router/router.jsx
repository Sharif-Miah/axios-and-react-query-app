import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import DetailsProduct from "../Page/HomePage/DetailsProduct/DetailsProduct";
import Home from "../Page/HomePage/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detailsProduct/:id",
        element: <DetailsProduct />,
        loader: async ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
      },
    ],
  },
]);

export default router;
