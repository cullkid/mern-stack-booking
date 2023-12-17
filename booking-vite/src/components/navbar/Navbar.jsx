import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navContainer">
          <Link to="/" className="link">
            <span className="logo">A.C-Booking.</span>
          </Link>
          <div className="navItems">
            <Link to="/register">
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
