import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  const classes =
    'tracking-wide rounded-full bg-stone-400 uppercase font-semibold inline-block px-4 py-3 hover:bg-stone-300 border border-gray-300 hover:border-stone-400 transition-colors duration-300 focus:outline-none disabled:cursor-not-allowed sm:px-6 sm:py-4';

  const base =
    'tracking-wide rounded-full bg-stone-400 uppercase font-semibold inline-block  hover:bg-stone-300 border border-gray-300 hover:border-stone-400 transition-colors duration-300 focus:outline-none disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-2 py-2 md:px-5 md:py-2.5 text-xs',
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
