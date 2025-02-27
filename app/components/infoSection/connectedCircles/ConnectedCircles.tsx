"use client";

import React from "react";
import styles from "./connectedCircles.module.css";

interface ConnectedCirclesProps {
  circleCount?: number; // Number of circles
  circleRadius?: number; // Radius of each circle
  circleColor?: string; // Fill color of circles
  lineColor?: string; // Stroke color of connecting lines
  lineWidth?: number; // Stroke width of lines
}

const ConnectedCircles: React.FC<ConnectedCirclesProps> = ({
  circleCount = 3,
  circleRadius = 40,
  circleColor = "blue",
  lineColor = "black",
  lineWidth = 4,
}) => {
  const circles = Array.from({ length: circleCount });

  return (
    <div className={styles.connectedCircles}>
      <svg
        width="100%"
        height={circleRadius * 2 + 20}
        viewBox={`0 0 ${circleCount * (circleRadius * 2)} ${circleRadius * 2 + 20}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connecting Lines */}
        {circles.map((_, i) => {
          return i < circles.length - 1 ? (
            <line
              key={`line-${i}`}
              x1={`${(i * 100) / (circleCount - 1)}%`}
              y1="50%"
              x2={`${((i + 1) * 100) / (circleCount - 1)}%`}
              y2="50%"
              stroke={lineColor}
              strokeWidth={lineWidth}
            />
          ) : null;
        })}

        {/* Circles */}
        {circles.map((_, i) => (
          <circle
            key={`circle-${i}`}
            cx={`${(i * 100) / (circleCount - 1)}%`}
            cy="50%"
            r={circleRadius}
            fill={circleColor}
          />
        ))}
      </svg>
    </div>
  );
};

export default ConnectedCircles;
