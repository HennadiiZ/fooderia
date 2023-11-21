import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import CreateUser from './features/user/CreateUser';
import Menu, { menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import Order, { orderLoader } from './features/order/Order';
import CreateOrder, { createOrderAction } from './features/order/CreateOrder';
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

// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p
// npm install -D prettier prettier-plugin-tailwindcss
// npm install @reduxjs/toolkit react-redux

// http://localhost:9000/data
// npm i json-server
// npm run server

// Test ID: IIDSAT
// CQE92U
