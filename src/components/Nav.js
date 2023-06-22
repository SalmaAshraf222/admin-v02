import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav  style={{backgroundColor:"#F2A11E"}}>
        <ul>
          <li>
            <Link style={{color:"white"}} to="/">Home</Link>
          </li>
          <li>
            <Link style={{color:"white"}} to="/users"> Users</Link>
          </li>
          <li>
            <Link style={{color:"white"}} to="/attractions"> Attractions</Link>
          </li>
          <li>
            <Link style={{color:"white"}} to="/hotels"> Hotels</Link>
          </li>
          <li>
            <Link style={{color:"white"}} to="/restaurants"> Restaurants</Link>
          </li>
          <li>
            <Link style={{color:"white"}} to="/requests"> Requests</Link>
          </li>
        </ul>
      </nav>
 
      <Outlet />
    </div>
  );
}

export default Navigation;
