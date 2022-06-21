import Logo from "../assets/images/Logo.png";
import "../assets/sass/navbar.scss";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__container">
          <h1 className="navbar__logo">
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
          </h1>
          <div className="navbar__collapse">
            <ul className="navbar__nav">
              <li className="navs">
                <a href="/">Home</a>
              </li>
              <li className="navs">
                <a href="/">Our products</a>
              </li>
              <li className="navs">
                <a href="/">News</a>
              </li>
              <li className="navs">
                <a href="/">About Us</a>
              </li>
              <li className="navs">
                <a href="/">Career</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
