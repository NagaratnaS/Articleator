import React from 'react'

export default function ArticleCard({ children,onClick }) {
  return (
    <div className="card" onClick = {onClick}>
      {children}
    </div>
  );
  
}
