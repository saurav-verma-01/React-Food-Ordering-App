import "./NavBar.css";
import logoHighRes from "../assets/deluciousHres2.jpg";

const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="#">
        <img
          src={logoHighRes}
          alt="delucious company logo"
          className="logo"
          height={100}
        />
      </a>

      <ul className="nav-list">
        <li>
          <a href="#" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            How It Works
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Testimonials
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Cart
          </a>
        </li>
        <li>
          <a href="#" className="nav-link primary-link">
            Order Now
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
