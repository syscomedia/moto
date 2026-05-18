'use client';

import React, { useState } from 'react';

interface DataPoint {
  date: string;
  count: number;
}

interface VisitorChartProps {
  data: DataPoint[];
}

export default function VisitorChart({ data }: VisitorChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!data || data.length === 0) {
    return (
      <div className="h-64 flex items-center justify-center bg-slate-900/40 border border-slate-800/80 rounded-2xl text-slate-500">
        Pas de données disponibles
      </div>
    );
  }

  // Chart dimensions
  const width = 600;
  const height = 220;
  const paddingLeft = 40;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 30;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  // Find max value for Y scaling (min is 0)
  const maxCount = Math.max(...data.map(d => d.count), 5); // Default to at least 5 for scale
  
  // Generate points
  const points = data.map((d, index) => {
    const x = paddingLeft + (index / (data.length - 1)) * chartWidth;
    const y = paddingTop + chartHeight - (d.count / maxCount) * chartHeight;
    return { x, y, ...d };
  });

  // Create smooth bezier curve path string
  let linePath = '';
  let areaPath = '';

  if (points.length > 0) {
    // Smooth bezier helper
    linePath = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const curr = points[i];
      const next = points[i + 1];
      const cpX1 = curr.x + (next.x - curr.x) / 2;
      const cpY1 = curr.y;
      const cpX2 = curr.x + (next.x - curr.x) / 2;
      const cpY2 = next.y;
      linePath += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${next.x} ${next.y}`;
    }

    // Connect area back to bottom baseline
    areaPath = `${linePath} L ${points[points.length - 1].x} ${height - paddingBottom} L ${points[0].x} ${height - paddingBottom} Z`;
  }

  // Formatting date for display (e.g. "18 Mai")
  const formatDate = (dateStr: string) => {
    try {
      const parts = dateStr.split('-');
      if (parts.length !== 3) return dateStr;
      const date = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
      return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
    } catch {
      return dateStr;
    }
  };

  // Horizontal grid lines (3 divisions)
  const yGridLines = [0, 0.5, 1];

  return (
    <div className="relative bg-slate-900/30 backdrop-blur-xl border border-slate-800/80 p-5 rounded-2xl shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
          Activité sur les 7 derniers jours
        </h3>
        {hoveredIndex !== null && (
          <div className="text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">
            {formatDate(data[hoveredIndex].date)} : <span className="text-white font-bold">{data[hoveredIndex].count}</span> visite(s)
          </div>
        )}
      </div>

      <div className="w-full relative h-[220px]">
        <svg 
          viewBox={`0 0 ${width} ${height}`} 
          className="w-full h-full overflow-visible"
        >
          {/* DEFINITIONS FOR GRADIENTS */}
          <defs>
            <linearGradient id="chart-area-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="chart-line-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>

          {/* HORIZONTAL GRID LINES & LABELS */}
          {yGridLines.map((ratio, i) => {
            const yVal = paddingTop + ratio * chartHeight;
            const labelVal = Math.round(maxCount * (1 - ratio));
            return (
              <g key={i} className="opacity-40">
                <line 
                  x1={paddingLeft} 
                  y1={yVal} 
                  x2={width - paddingRight} 
                  y2={yVal} 
                  stroke="#334155" 
                  strokeWidth="1" 
                  strokeDasharray="4 4" 
                />
                <text 
                  x={paddingLeft - 10} 
                  y={yVal + 4} 
                  fill="#94a3b8" 
                  fontSize="10" 
                  fontFamily="monospace"
                  textAnchor="end"
                >
                  {labelVal}
                </text>
              </g>
            );
          })}

          {/* GRADIENT FILL UNDER THE LINE */}
          {areaPath && (
            <path 
              d={areaPath} 
              fill="url(#chart-area-grad)" 
              className="animate-fade-in" 
            />
          )}

          {/* MAIN NEON LINE PATH */}
          {linePath && (
            <path 
              d={linePath} 
              fill="none" 
              stroke="url(#chart-line-grad)" 
              strokeWidth="3.5" 
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-[0_4px_12px_rgba(99,102,241,0.4)]"
            />
          )}

          {/* X AXIS GRID LABELS */}
          {points.map((point, index) => (
            <text
              key={index}
              x={point.x}
              y={height - 8}
              fill={hoveredIndex === index ? '#fff' : '#64748b'}
              fontSize="10"
              fontWeight={hoveredIndex === index ? 'bold' : 'normal'}
              textAnchor="middle"
              className="transition-all duration-200 cursor-pointer"
              onClick={() => setHoveredIndex(index)}
            >
              {formatDate(point.date)}
            </text>
          ))}

          {/* INTERACTIVE DATA NODE DOTS */}
          {points.map((point, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <g key={index}>
                {/* Large transparent hover trigger circle */}
                <circle
                  cx={point.x}
                  cy={point.y}
                  r="15"
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
                {/* Visible node circle */}
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={isHovered ? 6 : 4}
                  fill={isHovered ? '#a855f7' : '#6366f1'}
                  stroke="#0f172a"
                  strokeWidth={isHovered ? 2 : 1.5}
                  className="transition-all duration-150 pointer-events-none"
                />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
