import { PropsWithChildren } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type Props = {
  permit: boolean;
  redirectPath: string;
};

const ProtectedRoute = ({
  permit,
  redirectPath,
  children,
}: Props & PropsWithChildren) => {
  if (permit) {
    return children ? children : <Outlet />;
  }

  return <Navigate to={redirectPath} replace />;
};
export default ProtectedRoute;
