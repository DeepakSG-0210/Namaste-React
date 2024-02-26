import { cloudinaryImage } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  // console.log(Object.keys(resData.info.cuisines).map(function(k){return resData.info.cuisines[k]}).join(","))
  return (
    <div className="res-card">
      <img className="res-logo" src={cloudinaryImage + resData.info.cloudinaryImageId} alt="food"></img>
      <h3>{resData.info.name}</h3>
      <h4>
        
        {resData.info.cuisines.join(", ")}
      </h4>
      <span>{resData.info.avgRating} Stars</span>
      {/* <h5>{resData.sla.deliveryTime}</h5> */}
    </div>
  );
};

export default RestaurantCard;
