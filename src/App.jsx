import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import CreateUser from './features/user/CreateUser';
import Menu, { menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import Order, { orderLoader } from './features/order/Order';
import CreateOrder, { createOrderAction } from './features/order/CreateOrder';
// import OrderItem from './features/order/OrderItem';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/user',
        element: <CreateUser />,
        // loader: teamLoader,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
      // {
      //   path: '/order',
      //   element: <Order />,
      //   loader: orderLoader,
      //   children: [
      //     {
      //       path: 'new',
      //       element: <CreateOrder />,
      //     },
      //     {
      //       path: ':id',
      //       element: <OrderItem />,
      //     },
      //   ],
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// cd pizzaria
// npm install
// npm run dev

// npm i eslint vite-plugin-eslint eslint-config-react-app --save-dev

// npm i react-router-dom@6
