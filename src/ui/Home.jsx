import CreateUser from '../features/user/CreateUser';

function Home() {
  return (
    <div className='my-10 text-center'>
      <h1 className='mb-8 text-xl font-semibold text-center'>
        The best pizza.
        <br />
        <span className='text-stone-400'>
          Only fresh and healthy ingredients.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
