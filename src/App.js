import React, { Suspense, lazy } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";
import Login from "./components/Login";
import Register from "./components/Register";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Body />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="grocery"
          element={
            <Suspense fallback={<h1>Loading...</h1>}>
              <Grocery />
            </Suspense>
          }
        />
        <Route path="restarent/:resId" element={<RestaurentMenu />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
