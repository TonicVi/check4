import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLog } from './context/auth';

function PrivateRoute({ component: Component, ...rest }) {
  const { isLoggedIn } = useLog();
  return (
    <Route
      {...rest}
      render={props => (isLoggedIn ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired
};

export default PrivateRoute;