import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Router, Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';

import Home from './component/article';
import SingleArticle from './component/article/singleArticle';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <h3 style= {{marginLeft: '45%',marginTop: '0', marginBottom: '3%'}}>Articleator</h3>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/article" replace />} />
        <Route path="/article" element={<Home />} />
        <Route path="/article/:id" element = {<SingleArticle/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
