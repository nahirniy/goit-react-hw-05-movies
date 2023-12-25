import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import './index.css';
import './services/movies-api';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-05-movies">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
