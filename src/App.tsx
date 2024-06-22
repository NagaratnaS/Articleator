import React from 'react';
import { render } from 'react-dom';
import Card from './views/Card';
import CardGrid from './views/CardGrid';
import './views/style.css';
import ArticleApi from './api/ArticleApi';

const App = () => (
  <ArticleApi/>
)

render(<App />, document.getElementById('root'));
export default App;
