import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import footer_lg from '../assets/logo_big.png'
import inst_icon from '../assets/instagram_icon.png'
import pint_icon from '../assets/pintester_icon.png'
import whstpp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_lg} alt='' />
        <p>TheMarketPlace</p>
      </div>

      <div className="footer-links">
        <ul>
          <li><Link to="/coming-soon">Company</Link></li>
          <li><Link to="/coming-soon">Product</Link></li>
          <li><Link to="/coming-soon">Offices</Link></li>
          <li><Link to="/coming-soon">About</Link></li>
          <li><Link to="/coming-soon">Contact</Link></li>
        </ul>

        <div className="footer-social-icons">
          <div className="footer-icons-container">
            <Link to="/coming-soon">
              <img src={inst_icon} alt='Instagram' />
            </Link>
          </div>
          <div className="footer-icons-container">
            <Link to="/coming-soon">
              <img src={pint_icon} alt='Pinterest' />
            </Link>
          </div>
          <div className="footer-icons-container">
            <Link to="/coming-soon">
              <img src={whstpp_icon} alt='WhatsApp' />
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        <hr />
        <p>Copyright @2023 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
