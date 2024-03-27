import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"
import { useAuthentication } from './AuthContext';

const Header = () => {
  const authenticData = useAuthentication();

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="active"> Home page </NavLink>
        </li>
        <li>
          {authenticData.user ?
            <button><NavLink to="/login" onClick={authenticData.logout} className="active"> Logout </NavLink></button> :
            <button><NavLink to="/login" className="active"> Login </NavLink></button>
          }

        </li>
        <li>
          <NavLink to="/Contact" className="active"> Contact </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
