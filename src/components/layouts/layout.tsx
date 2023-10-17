import { ROUTE_PATHS } from '@/config/route-paths.config';
import { Link } from 'react-router-dom';

type LayoutProps = {
  children?: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="p-10">
      <header>
        <nav className="flex flex-row gap-5">
          <Link to={ROUTE_PATHS.signIn}>Sign in</Link>
          <Link to={ROUTE_PATHS.signUp}>Sign up</Link>
        </nav>
      </header>
      {children}
    </div>
  );
}

export { Layout };
