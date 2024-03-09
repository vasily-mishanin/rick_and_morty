import { PropsWithChildren } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Spinner from './common/Spinner';

type Props = {
  permit: boolean;
  redirectPath: string;
  isLoading?: boolean;
};

const ProtectedRoute = ({
  permit,
  redirectPath,
  children,
  isLoading,
}: Props & PropsWithChildren) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (!isLoading && permit) {
    return children ? children : <Outlet />;
  }

  return <Navigate to={redirectPath} replace />;
};
export default ProtectedRoute;
