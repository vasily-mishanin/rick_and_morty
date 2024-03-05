import { PropsWithChildren, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

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
    return <p>Loading...</p>;
  }

  if (!isLoading && permit) {
    return children ? children : <Outlet />;
  }

  return <Navigate to={redirectPath} replace />;
};
export default ProtectedRoute;
