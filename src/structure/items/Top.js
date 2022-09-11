import React from 'react';

const Top = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div
      style={{
        display: 'inline-block',
        backgroundColor: 'white',
        height: '5px',
        width: '10px',
      }}
    ></div>
    <h1 style={{ color: 'white', display: 'inline-block' }}>
      Fed<span style={{ color: '#ff6347' }}>MG</span>
    </h1>
    <div
      style={{
        display: 'inline-block',
        backgroundColor: 'white',
        height: '5px',
        width: '10px',
      }}
    ></div>
  </div>
);

export default Top;
