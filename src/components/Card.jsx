// Reusable Card component for products

import React from 'react';
import '../styles/Card.css';

const Card = ({ children, onClick, style, ...props }) => (
  <div className="card" onClick={onClick} style={style} {...props}>
    {children}
  </div>
);

export default Card;
