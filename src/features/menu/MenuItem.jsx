import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem } from '../cart/cartSlice';

function MenuItem({ food }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = food;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const handleAddToCart = () => {
    dispatch(addItem(food));
    console.log(cart);
  };

  return (
    <li className='flex gap-4 py-2'>
      <img
        src={imageUrl}
        alt={name}
        className={`h-25 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className='flex flex-col grow'>
        <p className='font-bold text-xl'>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div className='mt-auto flex items-center justify-between'>
          {!soldOut ? (
            <p className='text-sm'>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className='text-small uppercase text-stone-400'>Sold out</p>
          )}

          {!soldOut ? (
            <Button onClick={handleAddToCart} type='small'>
              Add to cart
            </Button>
          ) : (
            <Button type='small'>Not Available</Button>
          )}

          {/* <Button onClick={handleAddToCart} type='small'>
            Add to cart
          </Button> */}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
