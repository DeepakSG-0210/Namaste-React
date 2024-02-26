import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Restaurant</li>
          <li>Cart</li>
          <li>Profile</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;