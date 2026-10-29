import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

window.onerror = (message, source, lineno, colno, error) => {
  console.error('Global error:', message, 'at', source, ':', lineno, ':', colno, error);
  return true;
};

window.onunhandledrejection = (event) => {
  console.error('Unhandled promise rejection:', event.reason);
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
