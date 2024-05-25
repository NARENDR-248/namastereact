import React, { useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_CDN } from "../utilits/constants";
import { Button } from "@mui/material";
import useOnlineStatus from "./COSTAMHOOKS/useOnlineStatus";

const Header = () => {
    const [btn,setBtn]=useState("login");
    const OnlineStatus=useOnlineStatus()
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={LOGO_CDN} />
        </div>
        <div className="nav-links">
          <ul>
            <li>online:{OnlineStatus?"✔":"🔴"}</li>
            <li> <Link className="link" to='/'>home</Link></li>
            <li> <Link className="link" to='/about'>about</Link></li>
            <li> <Link className="link" to="/contact">contact</Link></li>
            <li> <Link className="link" to="/grocery">Grocery</Link></li>
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
