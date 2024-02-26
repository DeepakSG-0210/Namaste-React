import RestaurantCard from "./RestaurantCard";
import { RES_LIST } from "../utils/constants";
import { useState } from "react";
import { useEffect } from "react";

const Body = () => {
  const [restaurantList, setListOfRestaurants] = useState(RES_LIST);
  return (
    <div className="body-container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.rating.aggregate_rating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top-Rated
        </button>
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
