import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
        <a href="https://www.npci.org.in/">NPCI</a>
        </div>
         
        <div className="footer-social">
          <a href="#" target="_blank">Facebook</a>
          <a href="#" target="_blank">Twitter</a>
          <a href="#" target="_blank">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
