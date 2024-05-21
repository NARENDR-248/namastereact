import React, { useState } from "react";

import { LOGO_CDN } from "../utilits/constants";
import { Button } from "@mui/material";

const Header = () => {
    const [btn,setBtn]=useState("login")
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={LOGO_CDN} />
        </div>
        <div className="nav-links">
          <ul>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
            <li>cart</li>
            <Button variant="contained" sx={{marginRight:"40px"}} onClick={()=>{
                btn==="login"?setBtn("logout"):setBtn("login")
            }}>{btn}</Button>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
