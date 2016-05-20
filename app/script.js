import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './App';

import {SigninContainer} from './pages/signin/Signin';
import {StartContainer} from './pages/start/Start';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    name: 'My App'
  }
});

const routes = (
  <Route path='/' component={App}>
    <IndexRedirect to='start' />
    <Route path='signin' component={SigninContainer} />
    <Route path='start' component={StartContainer} />
  </Route>
);

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  app
);
