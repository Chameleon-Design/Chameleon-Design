import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Page_1 from './routes/1/1.component';
import page_2 from './routes/2/2.component';
import page_3 from './routes/3/3.component';
import page_4 from './routes/4/4.component';
import page_5 from './routes/5/5.component';
import page_6 from './routes/6/6.component';
import page_7 from './routes/7/7.component';
import page_8 from './routes/8/8.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Routes>
      <Route element = { <App /> }  index />
      <Route element = { <Page_1 /> }  path="/1" />
      <Route element = { <page_2 /> }  path="/2" />
      <Route element = { <page_3 /> }  path="/3" />
      <Route element = { <page_4 /> }  path="/4" />
      <Route element = { <page_5 /> }  path="/5" />
      <Route element = { <page_6 /> }  path="/6" />
      <Route element = { <page_7 /> }  path="/7" />
      <Route element = { <page_8 /> }  path="/8" />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
