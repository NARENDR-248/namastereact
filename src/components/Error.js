import React from "react";
import { useLocation } from "react-router-dom";

const Error = () => {
  let location = useLocation();

  return (
    <div>
      <h1>404 Not Found</h1>
      <p>No match for <code>{location.pathname}</code></p>
    </div>
  );
};

export default Error;
