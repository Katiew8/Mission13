import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center justify-content-center">
        <ul className="nav nav-pills navbar-right">
          <li className="nav-item">
            <Link className="nav-link text-light" to="./Home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="./Movies">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="./Podcast">
              Podcast
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
