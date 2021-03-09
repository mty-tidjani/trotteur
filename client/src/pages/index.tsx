import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import StorageManager from '../_utils/storage.manager';
import Auth from './Auth';
import NotFoundPage from './error/404';
import HomePage from './home/Home';

const isLogged = StorageManager.getUserData();

// Routes used when user is logged in
const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) => {
      if (isLogged) return <Component {...props} />;
      return <Redirect to="/auth" />;
    }}
  />
);
// Routes used for authentification
const AuthRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) => {
      if (!isLogged) return <Component {...props} />;
      return <Redirect to="/" />;
    }}
  />
);

const IndexPage: React.FC = () => {
  return (
      <BrowserRouter>
        <Switch>
          <AuthRoute path="/auth" component={Auth} />
          <PrivateRoute path="/" exact component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
  );
};

export default IndexPage;
