import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../utilits/ThemeContext";
import { LOGO_CDN } from "../utilits/constants";
import { Button } from "@mui/material";
import useOnlineStatus from "./COSTAMHOOKS/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./store/CartSlice";

const Header = () => {
  const [btn, setBtn] = useState("login");
  const OnlineStatus = useOnlineStatus();
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const cart = useSelector((store) => store.cart.itemes);

  // console.log(cart);
  return (
    <div>
      <div className="flex justify-between items-center border-4 border-indigo-500/100  w-full">
        <div className="logo">
          <img src={LOGO_CDN} className="mix-blend-multiply" />
        </div>
        <div className="nav-links">
          <ul className="flex pl-70 items-center">
            <li className="px-10">online:{OnlineStatus ? "✔" : "🔴"}</li>
            <li className="px-10">
              {" "}
              <Link className="link" to="/">
                home
              </Link>
            </li>
            <li className="px-10">
              <Link className="link" to="/about">
                about
              </Link>
            </li>
            <li className="px-10">
              <Link className="link" to="/contact">
                contact
              </Link>
            </li>
            <li className="px-10">
              {" "}
              <Link className="link" to="/grocery">
                Grocery
              </Link>
            </li>
            <Link to='/cart'>
            <li className="px-10 font-bold text-xl">
              cart({cart.length}items)
            </li>
            </Link>
            <Link to="/login">
              <Button
                variant="contained"
                sx={{ marginRight: "40px" }}
                onClick={() => {
                  btn === "login" ? setBtn("logout") : setBtn("login");
                }}
              >
                {btn}
              </Button>
            </Link>
            <button
              onClick={toggleTheme}
              className="relative py-6 wx-4 inline-flex items-center h-10 px-10 transition-colors duration-300 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700"
            >
              <span
                className={`absolute left-1 h-8 w-8 bg-white rounded-full shadow-md transform transition-transform ${
                  isDarkTheme ? "translate-x-6" : ""
                }`}
              ></span>
              <span className="absolute left-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                🌞
              </span>
              <span className="absolute right-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                🌙
              </span>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
