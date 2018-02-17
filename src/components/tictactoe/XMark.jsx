import React from 'react';

const XMark = ({ className }) => (
  <svg className={className} height="100" width="100">
    <line
      x1="10"
      y1="10"
      x2="90"
      y2="90"
      stroke="#000"
      strokeWidth="15"
      strokeLinecap="round"
    />
    <line
      x1="10"
      y1="90"
      x2="90"
      y2="10"
      stroke="#000"
      strokeWidth="15"
      strokeLinecap="round"
    />
  </svg>
);

export default XMark;
