// Reusable Avatar component

import React from 'react';
import '../styles/Avatar.css';



const Avatar = ({ src, alt }) => (
  <img
    className="avatar"
    src={src}
    alt={alt}
  />
);

export default Avatar;
