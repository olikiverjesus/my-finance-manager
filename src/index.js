import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/styles.css'; // O caminho deve ser relativo ao `index.js`

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
