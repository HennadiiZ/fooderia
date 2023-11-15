import { useSelector } from 'react-redux';

function UserName() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className='md:inline-block hidden text-sm font-semibold'>
      {username}
    </div>
  );
}

export default UserName;
