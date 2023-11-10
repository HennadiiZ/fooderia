import Footer from './Footer';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import Loader from './Loader';
import { Outlet, useNavigation } from 'react-router-dom';

function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);
  const isLoading = navigation.state === 'loading';
  // {state: 'idle', location: undefined,…}
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

      {/*  */}

      <div className='bg-stone-200 text-stone-600 p-4 sm:p-6 md:p-8 lg:p-10'>
        <div className='w-1/2 border border-gray-400 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg'>
          <form className='flex flex-col space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10'>
            <div>
              <label className='block text-lg text-stone-800' htmlFor='name'>
                Name:
              </label>
              <input
                className='w-full p-2 border rounded-md focus:outline-none focus:border-blue-500'
                type='text'
                id='name'
                name='name'
                placeholder='Enter your name'
              />
            </div>
            <div>
              <label className='block text-lg text-stone-800' htmlFor='surname'>
                Surname:
              </label>
              <input
                className='w-full p-2 border rounded-md focus:outline-none focus:border-blue-500'
                type='text'
                id='surname'
                name='surname'
                placeholder='Enter your surname'
              />
            </div>
            <div>
              <label className='block text-lg text-stone-800' htmlFor='email'>
                Email:
              </label>
              <input
                className='w-full p-2 border rounded-md focus:outline-none focus:border-blue-500'
                type='email'
                id='email'
                name='email'
                placeholder='Enter your email'
              />
            </div>
            <button
              className='bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600'
              type='submit'
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/*  */}
    </div>
  );
}

export default AppLayout;
