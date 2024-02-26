const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      <img className="res-logo" src={resData.info.image.url} alt="food"></img>
      <h3>{resData.info.name}</h3>
      <h4>
        {resData.info.cuisine.map((category) => category.name).join(", ")}
      </h4>
      <span>{resData.info.rating.aggregate_rating} Stars</span>
      <h5>{resData.order.deliveryTime}</h5>
    </div>
  );
};

export default RestaurantCard;
