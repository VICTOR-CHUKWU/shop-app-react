import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './scss/style.css';
import {Provider} from 'react-redux';
import store from './redux/Store';
import {BrowserRouter as Router} from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
  <Router>
  <App /> 
  </Router>
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

