import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <ul className="nav">
      <li>
        <Link to="/">Articles</Link>
        <Link to="/contact">Contact Form</Link>
      </li>
    </ul>
  )
}

export default Nav