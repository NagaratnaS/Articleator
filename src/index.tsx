import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router, Route, BrowserRouter, Routes, useParams, Navigate } from 'react-router-dom';
import ArticleApi from './api/ArticleApi';
import DisplayArticleSummary from './routes/DisplayArticleSummary';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <h3 style= {{marginLeft: '45%',marginTop: '0', marginBottom: '3%'}}>Articleator</h3>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/article" replace />} />
        <Route path="/article" element={<ArticleApi />} />
        <Route path="/article/:id" element = {<DisplayArticleSummary/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
