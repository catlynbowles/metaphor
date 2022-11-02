import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/" className="home-link">
        <h1>METaphor</h1>
      </Link>
      <Link to="/about" className="nav-link">
        <h2>About</h2>
      </Link>
      <Link to="/user-gallery" className="nav-link">
        <h2>User Gallery</h2>
      </Link>
    </div>
  );
};

export default Header;
