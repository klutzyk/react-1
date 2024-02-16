import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const navbar = (
  <nav>
    <h1>First navbar</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
    </ul>
  </nav>
)

const body = (
  <div>
    <head>
      <title>1st React page</title>
    </head>
    
    <body>
      <h1>This is the first React page</h1>
    </body>
  </div>
)

root.render([navbar, body])
