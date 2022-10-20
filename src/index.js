import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import axios from 'axios';

axios.defaults.baseURL = "https://integrador-ayi.herokuapp.com"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

serviceWorkerRegistration.register();

