import { ROUTE_PATHS } from '@/config/route-paths.config';
import { auth } from '@/libs/firebase';
import * as React from 'react';
import { Navigate } from 'react-router-dom';

// import { useAuth } from '../../hooks/useAuth';

type GuestGuardProps = {
  children?: React.ReactNode;
};

function GuestGuard({ children }: GuestGuardProps) {
  // const { authUser } = useAuth();
  const authUser = auth.currentUser;

  if (authUser) {
    return <Navigate to={ROUTE_PATHS.root} />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export { GuestGuard };
