import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="./Home">Home</Link>
          </li>
          <li>
            <Link to="./Movies">Movies</Link>
          </li>
          <li>
            <Link to="./Podcast">Podcast</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
