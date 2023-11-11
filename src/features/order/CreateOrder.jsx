// import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      {/* <Form method='POST' action='/order/new'> */}
      <Form method='POST'>
        <div>
          <label>First Name</label>
          <input type='text' name='customer' required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type='tel' name='phone' required />
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type='text' name='address' required />
          </div>
        </div>

        <div>
          <input
            type='checkbox'
            name='priority'
            id='priority'
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor='priority'>Want to yo give your order priority?</label>
        </div>

        <div>
          <input type='hidden' name='cart' value={JSON.stringify(cart)} />
          <button
            className='tracking-wide rounded-full
            bg-stone-400 uppercase font-semibold inline-block px-4 
            py-3 hover:bg-stone-300 
            border border-gray-300 hover:border-stone-400 transition-colors duration-300
            focus:outline-none disabled:cursor-not-allowed'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Ordering...' : 'Order now'}
          </button>
        </div>
      </Form>
    </div>
  );
}

// action
export async function createOrderAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log('Data', data);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  };

  console.log('order', order);

  const errors = {};

  if (!isValidPhone(order.phone)) {
    errors.phone = 'The phone number is not correct.';
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  // if averything is ok, create new order and redirect
  const newOrder = await createOrder(order);
  console.log('newOrder', newOrder);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
