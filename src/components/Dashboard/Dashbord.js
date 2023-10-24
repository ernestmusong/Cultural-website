import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';
import {
  FaTwitter, FaFacebookF, FaVimeoV, FaPinterestP,
} from 'react-icons/fa6';
import { TfiGoogle } from 'react-icons/tfi';
import logo from '../assets/Frame.png';
import MobileNavigation from './MobileNavigation';

const links = [
  { path: '/my-contributions', text: 'My contributions' },
  { path: '/make-reservations', text: 'Reserve a car', id: 'border' },
  { path: '/my-reservations', text: 'My reservations' },
  { path: '/add-car', text: 'Add car' },
  { path: '/delete-car', text: 'Delete car' },
];
const currentYear = new Date().getFullYear();
const NavigationPanel = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    navigate('/login');
  };
  return (
    <>
      <aside className="navigation-panel">
        <nav className="navbar">
          <ul>
            {links.map((link) => (
              <li key={link.text}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? 'active' : 'normal')}
                  id={link.id}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <button type="button" className="btn" onClick={() => logout()}>Log out</button>
      </aside>
      <MobileNavigation />
    </>
  );
};

export default NavigationPanel;