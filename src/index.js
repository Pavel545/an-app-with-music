import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import Bar from './Bar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='wrapper'>
      <div className='container'>
        <Main />
        <Bar />
        <footer className="footer"></footer>
      </div>
    </div>
  </React.StrictMode>
);
