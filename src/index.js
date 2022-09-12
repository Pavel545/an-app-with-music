import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main/Main';
import Bar from './Bar/Bar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='wrapper'>
      <div className='container'>
        <Main />
        <Bar />
      </div>
    </div>
  </React.StrictMode>
);
