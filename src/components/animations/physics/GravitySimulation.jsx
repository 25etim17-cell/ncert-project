import React, { useState, useEffect } from 'react';

const GravitySimulation = ({ playing }) => {
  const [height, setHeight] = useState(30);
  const [time, setTime] = useState(0);
  const g = 9.8;

  useEffect(() => {
    if (!playing) { setHeight(30); setTime(0); return; }
    const interval = setInterval(() => {
      setTime(prev => {
        const newT = prev + 0.05;
        const newH = 280 - 0.5 * g * (newT * newT) * 3;
        if (newH >= 280) {
          setHeight(280);
          return 0;
        }
        setHeight(Math.max(30, newH));
        return newT;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [playing]);

  return (
    <svg viewBox="0 0 400 320" className="w-full h-64 bg-gradient-to-b from-sky-100 to-sky-200 rounded-xl">
      {/* Ground */}
      <rect x="0" y="290" width="400" height="30" fill="#8B7355" rx="4" />
      <rect x="0" y="290" width="400" height="3" fill="#6d5a3a" />
      
      {/* Grass blades */}
      {[20, 60, 100, 150, 200, 250, 300, 350].map((x, i) => (
        <line key={i} x1={x} y1="290" x2={x + 3} y2="282" stroke="#4ade80" strokeWidth="2" />
      ))}

      {/* Ball */}
      <circle cx="200" cy={height} r="18" fill="#ef4444" stroke="#dc2626" strokeWidth="2">
        {playing && <animate attributeName="fill" values="#ef4444;#f97316;#ef4444" dur="0.3s" repeatCount="indefinite" />}
      </circle>
      
      {/* Ball shine */}
      <circle cx="193" cy={height - 6} r="5" fill="white" opacity="0.4" />

      {/* Height marker */}
      <line x1="50" y1={height} x2="50" y2="290" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,3" />
      <text x="55" y={(height + 290) / 2} fill="#3b82f6" fontSize="11" fontWeight="bold">
        h = {((290 - height) / 3).toFixed(1)}m
      </text>

      {/* v = 0 at top */}
      {height < 60 && (
        <text x="230" y={height + 5} fill="#dc2626" fontSize="11" fontWeight="bold">v = 0 (top)</text>
      )}

      {/* Info */}
      <rect x="220" y="10" width="170" height="55" rx="8" fill="white" opacity="0.9" />
      <text x="235" y="30" fill="#1e3a5f" fontSize="12" fontWeight="bold">Free Fall Simulation</text>
      <text x="235" y="48" fill="#666" fontSize="11">g = {g} m/s²</text>
      <text x="235" y="60" fill="#666" fontSize="11">t = {time.toFixed(2)}s</text>
    </svg>
  );
};

export default GravitySimulation;
