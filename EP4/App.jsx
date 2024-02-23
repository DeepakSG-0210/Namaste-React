import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * -Logo
 * -Nav Items
 * Body
 * -Search
 * -Restaurant Container
 * Footer
 * -Social Media
 * -Contact
 * -Address
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"
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

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2016/02/meghnasbiryani.jpg"
        alt="food"
      ></img>
      <h3>Meghana Foods</h3>
      <h4>Biryani, Chinese, North Indian</h4>
      <span>4.5 Stars</span>
      <h5>38 mins</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-container">Search</div>
      <div className="restaurant-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);