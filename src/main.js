/**
 * App entry point
 */

// Polyfill
import 'babel-polyfill';

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import rootReducer from './common/reducers/index';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise';

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware));

// Routes
import Routes from './common/components/Routes';

// Base styling
import './common/base.css';

// ID of the DOM element to mount app on

const DOM_APP_EL_ID = 'app';

// Render the router
ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      {Routes}
    </Router>
  </Provider>
), document.getElementById(DOM_APP_EL_ID));
