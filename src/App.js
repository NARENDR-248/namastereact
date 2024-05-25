import React, { Suspense, lazy } from "react";
import * as ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { RestaurantMenu } from "@mui/icons-material";
import RestaurentMenu from "./components/RestaurentMenu";
// import Grocery from "./components/Grocery";
const Grocery=lazy(()=>import("./components/Grocery"))





const AppLayout = () => {
  
  return (
    <div className="container">
      <Header />
      <Outlet />
      
    </div>
  );
};

const approuter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>this loading</h1>}>< Grocery /></Suspense>
      },
      {
        path:"/restarent/:resId",
        element:<RestaurentMenu />
      }


    ],
    errorElement:<Error/>
  }
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
