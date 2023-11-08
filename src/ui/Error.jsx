import { useNavigate, useRouteError } from 'react-router-dom';

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
        {error.status} {error.statusText}
      </p>
      <p>{error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
