import React from 'react'
import './Footer.css'
import footer_lg from '../assets/logo_big.png'
import inst_icon from '../assets/instagram_icon.png'
import pint_icon from '../assets/pintester_icon.png'
import whstpp_icon from '../assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_lg} alt=''/>
            <p>TheMarketPlace</p>
        </div>
        <div className="footer-links">
            <ul>
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={inst_icon} alt=''/>
                </div>
                <div className="footer-icons-container">
                    <img src={pint_icon} alt=''/>
                </div>
                <div className="footer-icons-container">
                    <img src={whstpp_icon} alt=''/>
                </div>
            </div>
        </div>
        <div className="footer-copy">
            <hr/>
            <p>Copyright @2023 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer