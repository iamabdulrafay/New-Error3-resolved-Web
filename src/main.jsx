import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { store } from './app/store'
import { Provider } from 'react-redux'
import './index.css';
import { RefContextProvider } from './contexts/RefContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RefContextProvider>
        <App />
      </RefContextProvider>
    </Provider>
  </React.StrictMode>,
)
