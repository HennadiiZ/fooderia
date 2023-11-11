function Button({ children, disabled }) {
  return (
    <button
      disabled={disabled}
      className='tracking-wide rounded-full
      bg-stone-400 uppercase font-semibold inline-block px-4 
      py-3 hover:bg-stone-300 
      border border-gray-300 hover:border-stone-400 transition-colors duration-300
      focus:outline-none disabled:cursor-not-allowed
      sm:px-6 sm:py-4'
    >
      {children}
    </button>
  );
}

export default Button;
