import Footer from './Footer';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import Loader from './Loader';
import { Outlet, useNavigation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AppLayout() {
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === 'loading';
  // {state: 'idle', location: undefined,…}
  // {state: 'loading', location: {…},…}

  const isCartSubmit = useSelector((state) => state.cart.submit);

  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]'>
      {isLoading && <Loader />}
      <Header />

      <div className='overflow-scroll'>
        <main className='max-w-5xl mx-auto'>
          <Outlet />
        </main>
      </div>

      {!isCartSubmit && <CartOverview />}
      <Footer />
    </div>
  );
}

export default AppLayout;
