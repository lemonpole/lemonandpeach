import React from 'react';
import { Route } from 'react-router';
import AppCmp from './components/App';
import HomeCmp from './components/Home/Home';

export default (
  <Route component={ AppCmp }>
    <Route path='/' component={ HomeCmp } />
  </Route>
);
