import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBookOpen } from 'react-icons/fa6';
import { FaAlignJustify, FaTimes, FaUser } from 'react-icons/fa';
import logo from 'becuda-logo.png';
import '../../styles/Dashboard.css';

const MobileNavigation = () => {
  const [className, setClassName] = useState('show-sidebar');
  const hideSideBar = () => {
    setClassName('hide-sidebar');
  };

  const showSideBar = () => {
    setClassName('show-sidebar');
  };

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    navigate('/');
  };
  return (
    <>
      <nav id="mobile-dashboard-nav">
        <div className="nav-center">
          <div className="nav-header">
            <div className="mobile-logo-container">
              <NavLink to="/">
                <div style={{ width: '70px', height: '70px' }}>
                  <img src={logo} alt="logo" style={{ maxWidth: '100%' }} />
                </div>
              </NavLink>
            </div>

            {className === 'hide-sidebar' ? (
              <button type="button" className="nav-toggle target" onClick={() => showSideBar()}>
                <FaAlignJustify className="target" style={{ color: 'var(--mainOrange)' }} />
              </button>
            ) : (
              <button type="button" className=" nav-toggle" onClick={() => hideSideBar()}>
                <FaTimes style={{ color: 'var(--mainOrange)' }} />
              </button>
            )}
          </div>
        </div>
      </nav>
      <aside className={className} id="mobile-sidebar">
        <ul className="list">
          <li className="list-item">
            <FaBookOpen />
            <NavLink
              to="/my-contributions"
              className={({ isActive }) => (isActive ? 'active' : 'normal')}
              onClick={() => hideSideBar()}
            >
              my contributions
            </NavLink>
          </li>
          <li className="list-item">
            <FaBookOpen />
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : 'normal')}
              onClick={() => hideSideBar()}
            >
              go to website
            </NavLink>
          </li>
          <li className="list-item">
            <FaUser />
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? 'active' : 'normal')}
              onClick={() => hideSideBar()}
            >
              profile
            </NavLink>
          </li>
          <li className="list-item">
            <FaBookOpen />
            <button type="button" className="logout-btn" onClick={() => logout()}>Log out</button>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default MobileNavigation;
