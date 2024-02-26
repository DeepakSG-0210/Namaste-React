import { cloudinaryImage } from "../utils/constants";
import { Link } from "react-router-dom";
const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={cloudinaryImage + cloudinaryImageId} alt="food"></img>
      <h3>{name}</h3>
      <h4>
        {cuisines.join(", ")}
      </h4>
      <span>{avgRating} Stars</span>
      <h5>{sla.slaString}</h5>
    </div>
  );
};

export default RestaurantCard;
