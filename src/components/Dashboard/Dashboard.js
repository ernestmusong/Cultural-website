import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../../styles/Dashboard.css';
import { FaBookOpen } from 'react-icons/fa6';
import { FaAlignJustify, FaTimes } from 'react-icons/fa';
import logo from 'becuda-logo.png';

const Dashboard = () => {
  const [className, setClassName] = useState('show-sidebar');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    navigate('/login');
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
        <button type="button" className="nav-toggle target" onClick={() => showSideBar()}>
          <FaAlignJustify className="target" style={{ color: 'var(--mainOrange)' }} />
        </button>
      </header>
      <aside className={className}>
        <div className="logo-wrapper">
          <NavLink to="/">
            <div style={{ width: '250px' }}>
              <img src={logo} alt="logo" className="logo" style={{ maxWidth: '100%' }} />
            </div>
          </NavLink>
          <button type="button" className=" nav-toggle" onClick={() => hideSideBar()}>
            <FaTimes style={{ color: 'var(--mainOrange)' }} />
          </button>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <FaBookOpen />
              <NavLink
                to="/my-contributions"
                className={({ isActive }) => (isActive ? 'active' : 'normal')}
              >
                my contributions
              </NavLink>
            </li>
          </ul>
        </nav>
        <button type="button" className="btn" onClick={() => logout()}>Log out</button>
      </aside>
    </>
  );
};

export default Dashboard;
