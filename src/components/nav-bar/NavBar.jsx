import React from 'react'
import './NavBar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import UserMenu from '../UserMenu'

const NavBar = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  // Function to determine if a menu item is active
  const isActive = (menuItem) => {
    if (menuItem === "shop") {
      return location.pathname === '/';
    }
    return location.pathname.toLowerCase().includes(menuItem.toLowerCase());
  };

  return (
    <div className='nav-bar'>
      <Link to='/' className='nav-logo'>
        <img src={logo} alt='TheMarketPlace Logo'/>
        <p>TheMarketPlace</p>
      </Link>
      
      <ul>
        <li className={isActive("shop") ? "active" : ""}>
          <Link to={'/'}>Shop</Link>
          <hr/>
        </li>
        <li className={isActive("mens") ? "active" : ""}>
          <Link to={'/MENS'}>Men</Link>
          <hr/>
        </li>
        <li className={isActive("womens") ? "active" : ""}>
          <Link to={'/WOMENS'}>Women</Link>
          <hr/>
        </li>
        <li className={isActive("kids") ? "active" : ""}>
          <Link to={'/KIDS'}>Kids</Link>
          <hr/>
        </li>
      </ul>
      
      <div className='nav-loginCart'>
        {isAuthenticated() ? (
          <UserMenu />
        ) : (
          <button className='btn-secondary'>
            <Link to={'/login'}>Login</Link>
          </button>
        )}
        <Link to={'/cart'} className="cart-link">
          <img src={cart_icon} alt='Shopping Cart'/>
          {/* <div className="nav-cart-count">0</div> */}
        </Link>
      </div>
    </div>
  )
}

export default NavBar