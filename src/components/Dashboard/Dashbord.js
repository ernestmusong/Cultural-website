import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';
import { FaBookOpen } from 'react-icons/fa6';
import MobileNavigation from './MobileNavigation';

const NavigationPanel = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    navigate('/login');
  };
  return (
    <>
      <aside className="sidebar">
        <nav className="navbar">
          <ul>
            <li  >
              <FaBookOpen />
              <NavLink
                to='/my-contributions'
                className={({ isActive }) => (isActive ? 'active' : 'normal')}
              >
                my contributions
              </NavLink>
            </li>
          </ul>
        </nav>
        <button type="button" className="btn" onClick={() => logout()}>Log out</button>
      </aside>
      <MobileNavigation />
    </>
  );
};

export default NavigationPanel;