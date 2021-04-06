import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react'
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import 'leaflet/dist/leaflet.css';
import App from './App';

const theme = {
  colors: {
    primary: '#181818'
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme} >
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
