import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import configureStore from './store/configureStore';

const store = configureStore();

WebFont.load({
  google: {
    families: ['Lato:100,300,400,700,900', 'sans-serif']
  }
});

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
