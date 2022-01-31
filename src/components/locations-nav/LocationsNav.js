import React from "react";
import { Link } from "react-router-dom";

export default function LocationsNav() {
  return (
    <nav className="locations-nav">
      <ul className="locations-nav__list">
        <li className="locations-nav__item">
          <Link to="/murmansk">Murmansk</Link>
        </li>
        <li className="locations-nav__item">
          <Link to="/moscow">Moscow</Link>
        </li>
        <li className="locations-nav__item">
          <Link to="/saintpetersburg">Saint Petersburg</Link>
        </li>
        <li className="locations-nav__item">
          <Link to="/london">London</Link>
        </li>
        <li className="locations-nav__item">
          <Link to="/oslo">Oslo</Link>
        </li>
        <li className="locations-nav__item">
          <Link to="/warsawa">Warsawa</Link>
        </li>
        <li className="locations-nav__item">
          <Link to="/berlin">Berlin</Link>
        </li>
      </ul>
    </nav>
  );
}
