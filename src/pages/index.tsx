import { Helmet } from 'react-helmet-async';

import { auth } from '@/libs/firebase';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '@/config/route-paths.config';

function Home() {
  const navigate = useNavigate();

  const onClick = async () => {
    await auth.signOut();
    navigate(ROUTE_PATHS.signIn);
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div>
        <h1>Home</h1>
        <button onClick={() => onClick()}>Log out</button>
      </div>
    </>
  );
}

export { Home };