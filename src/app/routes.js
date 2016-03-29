import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import AppCmp from './components/App';
import HomeCmp from './components/Home/Home';
import RSVPCmp from './components/RSVP/RSVP';
import InfoCmp from './components/Info/Info';

export default (
  <Router>
    <Route path="/" component={ AppCmp }>
      <IndexRoute component={ HomeCmp } />
      <Route path="rsvp" component={ RSVPCmp } />
      <Route path="info" component={ InfoCmp } />
    </Route>
  </Router>
);
