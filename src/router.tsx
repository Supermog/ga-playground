import { Navigate, createBrowserRouter } from 'react-router-dom';
import { ROUTE_PATHS } from '@/config/route-paths.config';

import { RouteWrapper } from '@/components/utils/route-wrapper';
import { Layout } from '@/components/layouts/layout';
import { AuthGuard } from '@/components/auth/auth-guard';
import { GuestGuard } from '@/components/auth/guest-guard';

import { Home } from '@/pages/index';
import { SignIn } from '@/pages/sign-in';
import { SignUp } from './pages/sign-up';

const router = createBrowserRouter([
  {
    element: <RouteWrapper guard={AuthGuard} layout={Layout} />,
    children: [
      {
        path: ROUTE_PATHS.root,
        element: <Navigate to={ROUTE_PATHS.home} />,
      },
      {
        path: ROUTE_PATHS.home,
        element: <Home />,
      },
    ],
  },
  {
    path: ROUTE_PATHS.auth,
    element: <RouteWrapper guard={GuestGuard} layout={Layout} />,
    children: [
      {
        path: ROUTE_PATHS.signIn,
        element: <SignIn />,
      },
      {
        path: ROUTE_PATHS.signUp,
        element: <SignUp />,
      },
    ],
  },
]);

export { router };
