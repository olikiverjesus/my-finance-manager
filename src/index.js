import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/styles.css'; // Importando o CSS global

"scripts": {
  "build": "comando_para_construir_o_projeto"
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
