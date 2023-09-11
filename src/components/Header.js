import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaAlignJustify, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import logo from 'becuda-logo.png';

const branches = [
  { path: '/comming-soon', text: 'bamenda' },
  {
    path: '/comming-soon', text: 'buea', id: 'border',
  },
  { path: '/comming-soon', text: 'muea' },
  { path: '/comming-soon', text: 'mutengene' },
  { path: '/comming-soon', text: 'limbe' },
  { path: '/comming-soon', text: 'douala' },
  { path: '/comming-soon', text: 'yaounde' },
  { path: '/comming-soon', text: 'diaspora' },
];
const associations = [
  { path: '/comming-soon', text: 'befang youths association', id: 2 },
];
const culture = [
  { id: 1, path: '/comming-soon', text: 'about befang' },
  { id: 2, path: '/comming-soon', text: 'marriage' },
  { id: 3, path: '/comming-soon', text: 'cultural dance' },
  { id: 4, path: '/comming-soon', text: 'funeral' },
  { id: 5, path: '/comming-soon', text: 'The dialect' },
];

const Header = () => {
  const currentUser = '';
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

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <>
      {/* top nav */}
      <div className="top-nav">
        {/* Logo */}
        <NavLink to="/">
          <div style={{ width: '250px' }}>
            <img src={logo} alt="logo" className="logo" style={{ maxWidth: '100%' }} />
          </div>
        </NavLink>
        {/* Support menu */}
        <div className="support">
          <NavLink to="/web-creator" className="support">
            Click here to support the website
          </NavLink>
          <NavLink to="/web-supporters" className="support">
            See List Of Supporters
          </NavLink>
        </div>
        {/* Location */}
        <a href="/" style={{ color: 'var(--mainOrange)' }}>
          <FaMapMarkerAlt style={{ marginRight: '1rem' }} />
          <span>Cameroon, North West Region, Menchum Valley Sub Division.</span>
        </a>
      </div>
      {/* Navigation */}
      <nav id="nav">
        <div className="nav-center">
          <div className="nav-header">
            {/* Mobile logo */}
            <div className="mobile-logo-container">
              <NavLink to="/" onClick={() => clearHeight()}>
                <div style={{ width: '100px', height: '100%' }} className="logo-div">
                  <img src={logo} alt="logo" className="logo" style={{ maxWidth: '100%' }} />
                </div>
              </NavLink>
            </div>
            {/* Mobile support menu */}
            <div className="moble-support">
              <NavLink to="/web-creator" className="support" onClick={() => clearHeight()}>
                Click to support the website
              </NavLink>
              <NavLink to="/web-supporters" className="support" onClick={() => clearHeight()}>
                See List Of Supporters
              </NavLink>
            </div>
            {/* Mobile menu open and close */}
            {height === 0 ? (
              <button type="button" className="nav-toggle target" onClick={() => handleClickMenu()}>
                <FaAlignJustify className="target" style={{ color: 'var(--mainOrange)' }} />
              </button>
            ) : (
              <button type="button" className=" nav-toggle" onClick={() => clearHeight()}>
                <FaTimes style={{ color: 'var(--mainOrange)' }} />
              </button>
            )}
          </div>
          {/* Menu */}
          <div id="links-container" className="links-container target" style={{ height, overflow: overFlow }}>
            <div className="links target">
              <NavLink to="/" className="clear" onClick={() => clearHeight()}>
                Home
              </NavLink>
              <div className="dropdown">
                <NavLink to="#">branches</NavLink>
                <div className="dropdown-content">
                  {branches.map((b) => (
                    <NavLink
                      to={b.path}
                      key={b.text}
                      className="clear dropdown-link"
                      onClick={() => clearHeight()}
                    >

                      {b.text}
                    </NavLink>
                  ))}
                </div>

              </div>
              <NavLink
                to="/all-projects"
                className="clear"
                onClick={() => clearHeight()}
              >
                Projects
              </NavLink>
              <div className="dropdown">
                <NavLink to="#" style={{ zIndex: '-1' }}>associations</NavLink>
                <div className="dropdown-content">
                  {associations.map((a) => (
                    <NavLink
                      to={a.path}
                      key={a.id}
                      className="clear dropdown-link"
                      onClick={() => clearHeight()}
                    >
                      {a.text}
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className="dropdown">
                <NavLink to="#" style={{ zIndex: '-1' }}>culture</NavLink>
                <div className="dropdown-content">
                  {culture.map((c) => (
                    <NavLink
                      to={c.path}
                      key={c.id}
                      className="clear dropdown-link"
                      onClick={() => clearHeight()}
                    >
                      {c.text}
                    </NavLink>
                  ))}
                </div>
              </div>
              <NavLink to="/constitution" className="clear" onClick={() => clearHeight()}>
                Constitution
              </NavLink>
              <NavLink to="/events" className="clear" onClick={() => clearHeight()}>
                News
              </NavLink>
              <div className="dropdown">
                <NavLink to="#" style={{ zIndex: '-1' }}>contributions</NavLink>
                <div className="dropdown-content">
                  <NavLink to="/contributors" className="clear dropdown-link" onClick={() => clearHeight()}>
                    Water Project
                  </NavLink>
                </div>
              </div>
              {currentUser !== '' ? (
                <NavLink to="/user">
                  dashboard
                </NavLink>
              ) : (
                ''
              )}

              {currentUser !== '' ? (

                <div style={{ display: 'flex', justifyContent: 'spaceBetween', width: '10%' }}>

                  <NavLink to="/profile">
                    {currentUser.username}
                  </NavLink>

                  <a href="/" onClick={() => logout()} className="clear ml-2">
                    Logout
                  </a>

                </div>
              ) : (
                <div className="register-link">

                  <NavLink to="/login" className="clear nav-link" onClick={() => clearHeight()}>
                    Login
                  </NavLink>

                  <NavLink to="/register" className="clear nav-link reg" onClick={() => clearHeight()}>
                    <button type="button">Register</button>
                  </NavLink>

                </div>
              )}
            </div>

          </div>
        </div>
      </nav>
      <div className="info-wrapper">
        <p className="info text-uppercase">
          Welcome to the befang cultural and development association...
          <span className="text-uppercase">becuda</span>
        </p>
      </div>
    </>
  );
};

export default Header;
