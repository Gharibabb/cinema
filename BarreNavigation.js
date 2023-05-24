// frontend/src/components/BarreNavigation.js
import React from 'react';
import { Link } from 'react-router-dom';

function BarreNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/films">Films</Link>
        </li>
      </ul>
    </nav>
  );
}

export default BarreNavigation;
