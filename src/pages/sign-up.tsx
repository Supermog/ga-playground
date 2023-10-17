import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '@/libs/firebase';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '@/config/route-paths.config';

function SignUp() {
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
    await createUserWithEmailAndPassword(auth, email, password);
    navigate(ROUTE_PATHS.home);
  };

  return (
    <>
      <Helmet>
        <title>Sign up</title>
      </Helmet>

      <div className="flex flex-col gap-3 w-52">
        <h1>Sign Up</h1>
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
          Register
        </button>
      </div>
    </>
  );
}

export { SignUp };
