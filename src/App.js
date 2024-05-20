import React from "react";
import * as ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";






const AppLayout = () => {
  return (
    <div className="container">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
