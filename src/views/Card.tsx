import React from 'react'

export default ({ children,onClick }) => (
  <div className="card" onClick = {onClick}>
    {children}
  </div>
)
