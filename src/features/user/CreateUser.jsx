import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { setUser } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // console.log('hi', username);

    if (!username) {
      return;
    }

    dispatch(setUser(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='mb-4 text-sm text-stone-600 md:text-base'>
        Hello! Tell us your name:
      </p>

      <input
        type='text'
        placeholder='Your full name'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-72 mb-8 input'
      />

      {username !== '' && (
        <div>
          <Button type='primary'>
            {/* {isSubmitting ? 'Ordering...' : 'Start ordering'} */}
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
