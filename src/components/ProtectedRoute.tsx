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
    console.log('A');
    return children ? children : <Outlet />;
  }
  console.log('B');
  return <Navigate to={redirectPath} replace />;
};
export default ProtectedRoute;
