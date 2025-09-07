import React from "react";
import "./Footer.css"; // Create this file for styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/sitemap">Site Map</a>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Micah Projects.
      </div>
    </footer>
  );
}

export default Footer;
