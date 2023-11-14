import { useNavigate, useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);
  // ErrorResponseImpl{status: 404, statusText: 'Not Found', internal: true, data: 'Error: No route matches URL "/jhjkh"', error: Error: No route matches URL "/jhjkh"
  console.log(error.status, error.statusText);

  return (
    <div>
      <h1>Something went wrong</h1>

      <p>
        <>{error.status}&nbsp;</>
        {error.statusText}&nbsp; {error.message}
      </p>

      <LinkButton to='-1'>&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
