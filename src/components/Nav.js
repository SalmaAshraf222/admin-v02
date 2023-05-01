import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/attractions">Attractions</Link>
          </li>
          <li>
            <Link to="/hotels">Hotels</Link>
          </li>
          <li>
            <Link to="/restaurants">Restaurants</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Navigation;
