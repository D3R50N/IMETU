
import logo from '../assets/imetu-logo.png';
import logo_dark from '../assets/imetu-logo-light.png';

import { Link, useLocation } from 'react-router-dom';
import ThemeSwitch from './ThemeSwitch';
import React from 'react';
import "../css/Nav.css";

function NavBar() {
  const location = useLocation();

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary' : '';
  };

  function onThemeChange(isDark: boolean) {
    setIsDarkTheme(isDark);
  }

  return (
    <div className="flex justify-center  bg-base-100  w-full">
      <div className="navbar max-w-[80%] ">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            <img src={isDarkTheme ? logo_dark : logo} alt="Imetu Logo" className="h-10" />
          </Link>
        </div>
        <div className="flex-1 gap-2">
          <Link to="/" className={`btn btn-ghost ${isActive('/')} nav`}>
            Home
          </Link>
            <Link to="/stories" className={`btn btn-ghost ${isActive('/stories')} nav`}>
              Stories
            </Link>
        </div>
        <div className="flex-none gap-10">

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <ThemeSwitch onThemeChange={onThemeChange} />

        </div>
      </div>
    </div>
  );
}

export default NavBar;


