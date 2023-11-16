import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartOverview() {
  const cart = useSelector((state) => state.cart.cart);

  const { totalItems, totalPrice } = cart.reduce(
    (acc, item) => {
      acc.totalItems += item.quantity;
      acc.totalPrice += item.totalPrice;
      return acc;
    },
    { totalItems: 0, totalPrice: 0 }
  );

  if (cart.length === 0) {
    return null;
  }

  return (
    <div
      className='flex justify-between items-center md:text-base text-sm bg-stone-600 
     text-stone-200 uppercase px-4 py-4 sm:px-6'
    >
      <p className='sm:space-x-6 font-semibold  text-stone-300 space-x-4'>
        <span>{totalItems} items</span>
        <span>${totalPrice}</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
