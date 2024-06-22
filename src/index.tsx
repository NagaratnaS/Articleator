import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router, Route, BrowserRouter, Routes } from 'react-router-dom';
import ArticleApi from './api/ArticleApi';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/article" element={<ArticleApi />} />
        <Route path="/article/:id" element = {<></>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
