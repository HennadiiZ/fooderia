// Test ID: IIDSAT
// CQE92U
import { useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import OrderItem from '../order/OrderItem';

// const order = {
//   id: 'ABCDEF',
//   customer: 'Hennadii',
//   phone: '123456789',
//   address: 'Arroios, Lisbon , Portugal',
//   priority: true,
//   estimatedDelivery: '2027-04-25T10:00:00',
//   cart: [
//     {
//       pizzaId: 7,
//       name: 'Napoli',
//       quantity: 3,
//       unitPrice: 16,
//       totalPrice: 48,
//     },
//     {
//       pizzaId: 5,
//       name: 'Diavola',
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//     {
//       pizzaId: 3,
//       name: 'Romana',
//       quantity: 1,
//       unitPrice: 15,
//       totalPrice: 15,
//     },
//   ],
//   position: '-9.000,38.000',
//   orderPrice: 95,
//   priorityPrice: 19,
// };

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're  gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className='px-4 py-6 space-y-8'>
      <div className='flex items-center justify-between flex-wrap gap-2'>
        <h2 className='text-xl font-semibold'>Order #{id}</h2>

        <div>
          {priority && (
            <span className='mr-1 rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50'>
              Priority{' '}
            </span>
          )}
          <span className='rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50'>
            {status} order
          </span>
        </div>
      </div>

      <div className='flex items-center justify-between flex-wrap gap-2  bg-stone-300 px-6 py-5'>
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left`
            : 'Order should have arrived'}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className='dive-stone-200 divide-y border-b border-t border-stone-400'>
        {cart.map((item) => (
          // <OrderItem item={item} key={item.id} />
          <OrderItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div>
        <p>Price: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function orderLoader({ params }) {
  // instead of useEffect
  const order = await getOrder(params.orderId);
  console.log(order);
  return order;
}

export default Order;
