import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/ecommerce-logo.jpg';
import profile from '../assets/login.jpg'

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <NavLink to='/'>  
        <img className='img-logo' src={logo} alt="Logo"  />
      </NavLink>
      <ul>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          <li>Home</li>
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
          <li>Products</li>
        </NavLink>
        <NavLink to="/loginpage" className={({ isActive }) => (isActive ? 'active' : '')}>
          <li>Login</li>
        </NavLink>
        <NavLink to="/loginpage">
          <img className='img-profile' src={profile} alt="Profile" style={{ cursor: 'pointer' }} />
        </NavLink>
      </ul>
      
    </nav>
  );
};

export default Navbar;
