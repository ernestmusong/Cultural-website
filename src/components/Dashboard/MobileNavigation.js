import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaAlignJustify, FaTimes } from 'react-icons/fa';
import logo from '../../assets/Frame.png';
import '../../styles/MobileNavigation.css';

const MobileNavigation = () => {
  const links = [
    { path: '/home', text: 'Cars' },
    { path: '/make-reservations', text: 'Reserve a car', id: 'border' },
    { path: '/my-reservations', text: 'My reservations' },
    { path: '/add-car', text: 'Add car' },
    { path: '/delete-car', text: 'Delete car' },
  ];

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const [height, setHeight] = useState(0);
  const [overFlow, setOverFlow] = useState('hidden');

  const clearHeight = () => {
    if (height !== 0) {
      setHeight(0);
      setOverFlow('hidden');
    }
  };
  const handleClickMenu = () => {
    if (height === 0) {
      setHeight('auto');
      setOverFlow('visible');
    }
  };
  return (
    <nav id="nav">
      <div className="nav-center">
        <div className="nav-header">
          {/* Mobile logo */}
          <div className="mobile-logo-container">
            <NavLink to="/home" onClick={() => clearHeight()}>
              <div style={{ width: '50px', height: '50%' }} className="logo-div">
                <img src={logo} alt="logo" className="logo" style={{ maxWidth: '100%' }} />
              </div>
            </NavLink>
          </div>

          {/* Mobile menu open and close */}
          {height === 0 ? (
            <div className="nav-toggle target" role="button" onClick={() => handleClickMenu()} onKeyDown={() => handleClickMenu()} tabIndex={0}>
              <FaAlignJustify className="target" />
            </div>
          ) : (
            <div className=" nav-toggle" role="button" onKeyDown={() => clearHeight()} tabIndex={0} onClick={() => clearHeight()}>
              <FaTimes />
            </div>
          )}
        </div>
        {/* Menu */}
        <div id="links-container" className="links-container target" style={{ height, overflow: overFlow }}>
          <div className="links target">
            {links.map((link) => (
              <NavLink
                key={link.text}
                to={link.path}
                className={({ isActive }) => (isActive ? 'active' : 'normal')}
                id={link.id}
                role="button"
                onKeyDown={() => clearHeight()}
                tabIndex={0}
                onClick={() => clearHeight()}
              >
                {link.text}
              </NavLink>
            ))}
          </div>
          <button className="btn" type="button" onClick={() => logout()}>Log out</button>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavigation;
