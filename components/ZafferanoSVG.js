import React from 'react';

const ZafferanoSVG = () => {
  return (
    <div>
      <svg width="250" height="100" viewBox="0 0 250 100">
        <style>
          {`
            .text {
              fill: #7D3C98;
              font-family: "Courier", monospace;
              font-size: 30px;
              letter-spacing: 1.5px;
            }
          `}
        </style>
        <text x="10" y="40" className="text">
          ZAFFERANO
          <tspan x="10" y="80">MEDITERRANEO</tspan>
        </text>
        {/* Simulating disconnections */}
        <path d="M15 58 L17 58" stroke="#A0C8E1" strokeWidth="0.5" />
        <path d="M45 62 L47 62" stroke="#A0C8E1" strokeWidth="0.5" />
        <path d="M95 56 L97 56" stroke="#A0C8E1" strokeWidth="0.5" />
        <path d="M20 98 L22 98" stroke="#A0C8E1" strokeWidth="0.5" />
        <path d="M80 102 L82 102" stroke="#A0C8E1" strokeWidth="0.5" />
        <path d="M150 96 L152 96" stroke="#A0C8E1" strokeWidth="0.5" />
      </svg>
    </div>
  );
};

export default ZafferanoSVG;