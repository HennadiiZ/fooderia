import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

function Header() {
  return (
    <header className='bg-stone-400 uppercase px-4 py-3 border-b border-stone-600'>
      <Link to='/' className='tracking-wider'>
        Pizzaria
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
