import React from 'react';
import './Home.css';
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
  <section className="footer">
  <p>© {currentYear} Bade Priya. All rights reserved.</p>
  </section> );
}

export default Footer;
