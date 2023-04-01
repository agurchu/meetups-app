import React from "react";

import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <div>KJ Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">Fovorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
