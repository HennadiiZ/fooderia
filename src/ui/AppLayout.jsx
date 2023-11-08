import Footer from './Footer';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
      <Footer />
    </>
  );
}

export default AppLayout;
