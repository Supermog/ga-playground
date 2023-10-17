import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/libs/firebase';
import { ROUTE_PATHS } from '@/config/route-paths.config';
import { useNavigate } from 'react-router-dom';
import { renderGtagScript } from '@/utils/script-renderers';

function SignIn() {
  const navigate = useNavigate();

  const emailRef = React.useRef<string>('');
  const passwordRef = React.useRef<string>('');

  const onSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(ROUTE_PATHS.home);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Helmet>
        <title>Sign in</title>
        {renderGtagScript()}
      </Helmet>

      <div className="flex flex-col gap-3 w-52">
        <h1>Sign In</h1>
        <p>Email</p>
        <input
          className="border-2 border-black"
          onChange={e => {
            emailRef.current = e.target.value;
          }}
        />
        <p>Password</p>
        <input
          className="border-2 border-black"
          onChange={e => {
            passwordRef.current = e.target.value;
          }}
        />
        <button
          className="border-2 border-black"
          onClick={() =>
            onSubmit({ email: emailRef.current, password: passwordRef.current })
          }
        >
          Log in
        </button>
      </div>
    </>
  );
}

export { SignIn };
