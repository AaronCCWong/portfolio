import React from 'react';

const XMark = ({ className }) => (
  <svg className={className} height="100" width="100">
    <line x1="0" y1="0" x2="100" y2="100" stroke="#000" strokeWidth="15" />
    <line x1="0" y1="100" x2="100" y2="0" stroke="#000" strokeWidth="15" />
  </svg>
);

export default XMark;
