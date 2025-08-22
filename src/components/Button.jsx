// Reusable Button component

import React from 'react';
import '../styles/Button.css';

const Button = ({ children, onClick, type = 'button', style, ...props }) => (
  <button className="btn" type={type} onClick={onClick} style={style} {...props}>
    {children}
  </button>
);

export default Button;
