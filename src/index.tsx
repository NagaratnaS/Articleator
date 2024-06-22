import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router, Route, BrowserRouter, Routes, useParams } from 'react-router-dom';
import ArticleApi from './api/ArticleApi';
import DisplayArticleSummary from './routes/DisplayArticleSummary';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/article" element={<ArticleApi />} />
        <Route path="/article/:id" element = {<DisplayArticleSummary/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
