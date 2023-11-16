import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateCartItemQuantity({ id }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Button type='small' onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
      <Button type='small' onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
    </div>
  );
}

export default UpdateCartItemQuantity;
