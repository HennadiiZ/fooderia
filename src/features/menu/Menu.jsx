import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from '../menu/MenuItem';

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul>
      {menu.map((food) => (
        <MenuItem food={food} key={food.id} />
      ))}
    </ul>
  );
}

export async function menuLoader() {
  // instead of useEffect
  const menu = await getMenu();
  return menu;
}

export default Menu;
