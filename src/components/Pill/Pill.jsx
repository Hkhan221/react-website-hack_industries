import React from 'react';
import './Pill.scss';

const Pill = ({ text }) => {
  return <div className="pill">Add to cart{text}</div>;
};

export default Pill;