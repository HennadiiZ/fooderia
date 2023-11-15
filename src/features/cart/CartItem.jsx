import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
// import { formatCurrency } from '../../utils/helpers';
import { removeItem } from './cartSlice';

function CartItem({ item }) {
  const { id, pizzaId, name, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeItem(id));
  };

  return (
    <li className='py-3 sm:flex sm:item-center sm:justify-between'>
      <p className='mb-1 sm:mb-0'>
        {quantity}&times; {name}
      </p>
      <div className='flex items-center sm:gap-6 justify-between'>
        {/* <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p> */}
        <p className='text-sm font-bold'>${totalPrice}</p>
        <Button className='' type='small' onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
