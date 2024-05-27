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
      <div className="flex justify-between items-center border-4 border-indigo-500/100  w-full"  >
        <div className="logo">
          <img src={LOGO_CDN} />
        </div>
        <div className="nav-links">
          <ul className="flex pl-70"> 
            <li className="px-10">online:{OnlineStatus?"✔":"🔴"}</li>
            <li className="px-10"> <Link className="link" to='/'>home</Link></li>
            <li className="px-10"><Link className="link" to='/about'>about</Link></li>
            <li className="px-10"><Link className="link" to="/contact">contact</Link></li>
            <li className="px-10"> <Link className="link" to="/grocery">Grocery</Link></li>
            <li className="px-10">cart</li>
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
