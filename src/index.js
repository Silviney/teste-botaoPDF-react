import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './main/Form';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>Links para PDF</h1>
      <Form />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
