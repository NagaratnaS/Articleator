import React from 'react'
import './style.css'

export default function CardGrid({ children }) {
  return (
    <div className="cardGrid">
      {children}
    </div>
  );
};
