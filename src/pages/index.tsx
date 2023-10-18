import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { auth } from '@/libs/firebase';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '@/config/route-paths.config';
import { renderGtagScript } from '@/utils/script-renderers';
import { ScriptComponent } from '@/components/script-component';

function Home() {
  const navigate = useNavigate();
  const [scriptComponentOpen, setScriptComponentOpen] =
    React.useState<boolean>(false);

  const onClick = async () => {
    await auth.signOut();
    navigate(ROUTE_PATHS.signIn);
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
        {renderGtagScript()}
      </Helmet>

      <div>
        <h1>Home</h1>
        <button onClick={() => onClick()}>Log out</button>
        <button onClick={() => setScriptComponentOpen(prev => !prev)}>
          Open script component
        </button>
        {scriptComponentOpen ? (
          <div className="mt-10">
            <ScriptComponent />
          </div>
        ) : null}
      </div>
    </>
  );
}

export { Home };
