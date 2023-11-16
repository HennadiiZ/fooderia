import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { removeItem } from './cartSlice';

function DeleteCartItem({ id }) {
  const dispatch = useDispatch();

  return (
    <Button className='' type='small' onClick={() => dispatch(removeItem(id))}>
      Delete
    </Button>
  );
}

export default DeleteCartItem;
