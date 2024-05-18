import React from "react";
import * as ReactDOM from 'react-dom/client';


const heading = React.createElement("div", {},[
    React.createElement("div", {}, React.createElement("h1", {id:"heading"},"hello" ))
    ] );
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);