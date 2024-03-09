import { PropsWithChildren } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Spinner from './common/Spinner';
import PropTypes from 'prop-types';

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

ProtectedRoute.propTypes = {
  permit: PropTypes.bool.isRequired,
  redirectPath: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
};

export default ProtectedRoute;
