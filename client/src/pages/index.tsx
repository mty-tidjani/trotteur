import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFoundPage from './error/404';
import HomePage from './home/Home';

const IndexPage: React.FC = () => {


  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
  );
};

export default IndexPage;
