import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div
      className='flex justify-between items-center md:text-base text-sm bg-stone-600 
     text-stone-200 uppercase px-4 py-4 sm:px-6'
    >
      <p className='sm:space-x-6 font-semibold  text-stone-300 space-x-4'>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
