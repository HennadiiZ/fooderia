import Footer from './Footer';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import Loader from './Loader';
import { Outlet, useNavigation } from 'react-router-dom';

function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === 'loading';
  // {state: 'idle', location: undefined, …}
  // {state: 'loading', location: {…},…}

  return (
    <div className='layout'>
      {isLoading && <Loader />}
      <Header />
      {/* <main>{!isLoading ? <Outlet /> : <Loader />}</main> */}
      <main>
        <Outlet />{' '}
      </main>
      <CartOverview />
      <Footer />
    </div>
  );
}

export default AppLayout;
