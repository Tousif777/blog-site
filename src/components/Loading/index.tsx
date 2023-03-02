import React from "react";
import "./LoadingAnimation.css";

interface LoadingAnimationProps {
  size?: number;
  color?: string;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  size = 32,
  color = "#000000",
}) => {
  return (
    <div className="loading-animation" style={{ width: size, height: size }}>
      <div className="loading-animation-circle" style={{ borderColor: color }} />
      <div className="loading-animation-circle" style={{ borderColor: color }} />
      <div className="loading-animation-circle" style={{ borderColor: color }} />
      <div className="loading-animation-circle" style={{ borderColor: color }} />
    </div>
  );
};

export default LoadingAnimation;
