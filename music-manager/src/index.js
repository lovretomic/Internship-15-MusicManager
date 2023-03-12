import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { lsKey } from './enums';

if (!localStorage.getItem(lsKey))
  localStorage.setItem(lsKey, JSON.stringify([]))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
