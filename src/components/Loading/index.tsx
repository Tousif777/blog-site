import React from "react";
import "./LoadingAnimation.css";

interface LoadingAnimationProps {
  size?: number;
  color?: string;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  size = 60,
  color = "#000000",
}) => {
  return (<div className="mt-5" style={{height:"100%", width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
    <div className="loading-animation" style={{ width: size, height: size }}>
      <div className="loading-animation-circle" style={{ borderColor: color }} />
      <div className="loading-animation-circle" style={{ borderColor: color }} />
      <div className="loading-animation-circle" style={{ borderColor: color }} />
      <div className="loading-animation-circle" style={{ borderColor: color }} />
    </div>
  </div>
  );
};

export default LoadingAnimation;
