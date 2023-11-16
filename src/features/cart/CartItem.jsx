import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
// import { formatCurrency } from '../../utils/helpers';
import { removeItem } from './cartSlice';
import DeleteCartItem from './DeleteCartItem';
import UpdateCartItemQuantity from './UpdateCartItemQuantity';

function CartItem({ item }) {
  // const { id, pizzaId, name, quantity, totalPrice, unitPrice } = item;
  const { id, name, quantity, unitPrice } = item;

  console.log('item', item);

  const dispatch = useDispatch();

  // const handleDelete = () => {
  //   dispatch(removeItem(id));
  // };

  return (
    <li className='py-3 sm:flex sm:item-center sm:justify-between'>
      <p className='mb-1 sm:mb-0'>
        {quantity}&times; {name}
      </p>
      <div className='flex items-center sm:gap-6 justify-between'>
        {/* <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p> */}
        <p className='text-sm font-bold'>${unitPrice * quantity}</p>
        {/* <Button className='' type='small' onClick={handleDelete}>
          Delete
        </Button> */}
        <UpdateCartItemQuantity id={id} />
        <DeleteCartItem id={id} />
      </div>
    </li>
  );
}

export default CartItem;
