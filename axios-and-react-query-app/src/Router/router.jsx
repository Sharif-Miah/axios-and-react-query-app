import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import DetailsProduct from '../Page/HomePage/DetailsProduct/DetailsProduct';
import Home from '../Page/HomePage/Home';
import AddProduct from '../Page/HomePage/AddProduct/AddProduct';
import LoginForm from '../forms/LoginForm/LoginForm';
import RegisterForm from '../forms/RegisterForm/RegisterForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/detailsProduct/:id',
        element: <DetailsProduct />,
      },
      {
        path: '/add-product',
        element: <AddProduct />,
      },
      {
        path: '/login',
        element: <LoginForm />,
      },
      {
        path: '/register',
        element: <RegisterForm />,
      },
    ],
  },
]);

export default router;
