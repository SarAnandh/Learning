// ./Reuse/DnaBackground.jsx
import React from 'react';
import './dna.css'; // Import styles

const DnaBackground = () => {
  return (
    <div className="dna-bg">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          className="helix-path"
          d="M10,0 C30,25 30,75 10,100 M90,0 C70,25 70,75 90,100"
          fill="none"
          stroke="#00FFAA"
          strokeWidth="2"
        />
      </svg>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
  <path className="helix-path" d="M10,0 C30,25 30,75 10,100" />
  <path className="helix-path" d="M90,0 C70,25 70,75 90,100" />
  <path className="helix-path" d="M50,0 C40,50 60,50 50,100" />
</svg>

    </div>
  );
};

export default DnaBackground;
