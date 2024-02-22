import { PropsWithChildren } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type Props = {
  isLoggedIn: boolean;
  redirectPath: string;
};

const ProtectedRoute = ({
  isLoggedIn,
  redirectPath,
  children,
}: Props & PropsWithChildren) => {
  if (isLoggedIn) {
    return children ? isLoggedIn : <Outlet />;
  }
  return <Navigate to={redirectPath} replace />;
};
export default ProtectedRoute;
