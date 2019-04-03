import React from 'react';

const Loading = () => (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100vh">
  
  <rect x="0" y="0" fill="#222" width="100%" height="100%" />
  
  <text x="50%" text-anchor="middle" y="50%" dy="0.4em" fill="url(#pattern)" font-family="muli" font-size="10vh" font-weight="700">PEGASUS IMAGERY</text>
  
  <defs>  
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0">
      <stop offset="0%" style={{stopColor: '#303030'}} />
      <stop offset="25%" style={{stopColor: '#545454'}} />
      <stop offset="50%" style={{stopColor: '#679CD3'}} />
      {/* <stop offset="75%" style={{stopColor: '#F5F5F5'}} /> */}
      <stop offset="100%" style={{stopColor: '#303030'}} />
    </linearGradient>
    
    <pattern id="pattern" x="0" y="0" width="300%" height="100%" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="150%" height="100%" fill="url(#gradient)">
        <animate attributeType="XML"
                 attributeName="x"
                 from="0" to="150%"
                 dur="3s"
                 repeatCount="indefinite"/>
      </rect>
      <rect x="-150%" y="0" width="150%" height="100%" fill="url(#gradient)">
        <animate attributeType="XML"
                 attributeName="x"
                 from="-150%" to="0"
                 dur="3s"
                 repeatCount="indefinite"/>
      </rect>
    </pattern>
  </defs>
</svg>
)

export default Loading;