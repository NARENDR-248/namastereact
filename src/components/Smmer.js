import React from "react";

function Smmer() {
  return (
    
      <div className="main_shimar flex flex-wrap gap-4 p-4">
      {Array(20).fill("").map((_, index) => (
        <div key={index} className="shimmer-card bg-white p-4 rounded-lg shadow-md w-64">
          <div className="shimmer shimmer-image rounded-t-lg"></div>
          <div className="shimmer shimmer-line mt-4 rounded"></div>
          <div className="shimmer shimmer-line rounded"></div>
          <div className="shimmer shimmer-line short rounded"></div>
        </div>
      ))}
    </div>
  );
}

export default Smmer;
