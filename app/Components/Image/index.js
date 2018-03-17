import React from 'react';
import './styles.sass';

const Image = ({ image }) => (
  <div className="pwa-img" style={{ backgroundImage: `url(${image})` }} />
);

export default Image;
