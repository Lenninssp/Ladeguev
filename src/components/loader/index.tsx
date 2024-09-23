import React from "react";
import "./styles.css";

const LoaderComponent = () => {
  return (
    <div className="h-screen w-screen bg-alg flex justify-center items-center">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoaderComponent;
