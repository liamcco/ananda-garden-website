import React from 'react';
import './article.css';

const Article = ({ text, link }) => (
  <a href={link}>
  <div className="article">
    <div className="article-content">
      <div>
        <h3>{text}</h3>
      </div>
      <p>Läs mer!</p>
    </div>
  </div>
  </a>
);

export default Article;
