import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../styles/Dashboard.css';
import { FaBookOpen } from 'react-icons/fa6';
import { FaTimes, FaAlignJustify, FaUser } from 'react-icons/fa';
import logo from 'becuda-logo.png';
import MobileNavigation from './MobileNavigation';

const Dashboard = () => {
  const currentUser = JSON.parse(localStorage.getItem('user'));
  const [className, setClassName] = useState('show-sidebar');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    navigate('/');
  };
  const hideSideBar = () => {
    setClassName('hide-sidebar');
  };

  const showSideBar = () => {
    setClassName('show-sidebar');
  };
  return (
    <>
      <header id="header">
        <button type="button" onClick={() => showSideBar()}>
          <FaAlignJustify />
        </button>
        <a href="/profile" style={{ color: 'var(--softWhite)' }}>
          <FaUser style={{ marginRight: '1rem' }} />
          <span className="text-uppercase text-light">
            {currentUser.title}
            {' '}
            {currentUser.firstName}
          </span>
        </a>
      </header>
      <aside className={className} id="sidebar">
        <div className="logo-wrapper">
          <NavLink to="/">
            <div style={{ width: '90px', height: '90px' }}>
              <img src={logo} alt="logo" className="logo" style={{ maxWidth: '100%' }} />
            </div>
          </NavLink>
          <button type="button" onClick={() => hideSideBar()}>
            <FaTimes style={{ color: 'var(--mainOrange)', fontSize: '24px' }} />
          </button>
        </div>
        <div className="d-navbar">
          <ul className="list">
            <li className="list-item">
              <FaBookOpen />
              <NavLink
                to="/my-contributions"
                className={({ isActive }) => (isActive ? 'active' : 'normal')}
              >
                my contributions
              </NavLink>
            </li>
            <li className="list-item">
              <FaBookOpen />
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : 'normal')}
              >
                go to website
              </NavLink>
            </li>
            <li className="list-item">
              <FaUser />
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? 'active' : 'normal')}
              >
                profile
              </NavLink>
            </li>
            <li className="list-item">
              <FaBookOpen />
              <button type="button" className="logout-btn" onClick={() => logout()}>Log out</button>
            </li>
          </ul>
        </div>
      </aside>
      <MobileNavigation />
    </>
  );
};

export default Dashboard;
