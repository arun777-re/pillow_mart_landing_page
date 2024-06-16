import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaFacebook, FaInstagram, FaGoogle, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer-1'>

    <div className='footer-1-1'>
      <div>
    <img src={logo} alt="logoImage" />
      </div>
      <div className='footer-navigation'>
            <ul>
               <li>
                <Link to ="/">Home</Link>
               </li>
               <li>
                <Link to ="/about">About</Link>
               </li>
               <li>
                <Link to ="/">Product</Link>
               </li>
               <li>
                <Link >
                Pages
                </Link>
               </li>
               <li>
                <Link to ="/">Contact</Link>
               </li>
              
            </ul>
        </div>
    </div>
    <div className='footer-icons'>
      <Link>
    <FaFacebook />
      </Link>
      <Link>
      <FaInstagram />
      </Link>
      <Link>
      <FaGoogle />
      </Link>
      <Link>
      <FaLinkedin />
      </Link>
    </div>

    </section>
    <section className='footer-2'>
    <p>
    Copyright ©2024 All rights reserved | This website is made with  by CoderRun
    </p>
    <p>
    Terms & Conditions &nbsp; FAQ
    </p>
    </section>

    </footer>
  )
}

export default Footer;