import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './GlobalStyle/GlobalStyle';
import { BrowserRouter } from "react-router-dom";
import Content from './pages/Content/Content';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle/>
      <Content/>
    </BrowserRouter>
  </React.StrictMode>
);
