import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './GlobalStyle/GlobalStyle';
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle/>
      <AppRoutes/>
    </BrowserRouter>
  </React.StrictMode>
);
