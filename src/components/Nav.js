import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav  style={{backgroundColor:"rgba(242, 161, 30, 0.2)"}}>
        <ul>
          <li>
            <Link style={{color:"black"}} to="/">Home</Link>
          </li>
          <li>
            <Link style={{color:"black"}} to="/users"> Users</Link>
          </li>
          <li>
            <Link style={{color:"black"}} to="/attractions"> Attractions</Link>
          </li>
          <li>
            <Link style={{color:"black"}} to="/hotels"> Hotels</Link>
          </li>
          <li>
            <Link style={{color:"black"}} to="/restaurants"> Restaurants</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default Navigation;
