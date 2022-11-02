import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/" className="home-link">
        <h1>METaphor</h1>
      </Link>
      <div className="nav-link-container">
        <Link to="/about" className="nav-link">
          <p>ABOUT</p>
        </Link>
        <Link to="/personal-gallery" className="nav-link">
          <p>PERSONAL GALLERY</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
