import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-5">
      <div className="ms-auto footer-wrapper mb-5">
        <a href="/" className="nav-link">HOME</a>
        <a href="/#projects" className="nav-link mt-3">PROJECTS</a>
        <a href="/#aboutme" className="nav-link mt-3">ABOUTME</a>
      </div>
      <p className="text-center mb-5">© Shinya Aoi - All Rights Reserved</p>
    </div>
  )
}

export default Footer;