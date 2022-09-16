import React from 'react';
import ReactDOM from 'react-dom/client';
import Content from './Content/Content';
import GlobalStyle from './GlobalStyle/GlobalStyle';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Content/>
  </React.StrictMode>
);
