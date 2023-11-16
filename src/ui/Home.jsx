import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className='my-10 text-center sm:my-16 px-4'>
      <h1 className='mb-8 text-xl font-semibold text-center md:text-3xl'>
        The best food.
        <br />
        <span className='text-stone-400'>
          Only fresh and healthy ingredients.
        </span>
      </h1>
      {username === '' ? (
        <CreateUser />
      ) : (
        <>
          <p className='p-4 pl-2'>Welcome, {username} </p>
          <Button to='/menu' type='small'>
            Go to Menu
          </Button>
        </>
      )}
    </div>
  );
}

export default Home;
