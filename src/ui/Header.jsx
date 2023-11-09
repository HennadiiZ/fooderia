import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header className="bg-stone-400">
      <Link to='/'>Pizzaria</Link>
      <SearchOrder />
      <p>User</p>
    </header>
  );
}

export default Header;
