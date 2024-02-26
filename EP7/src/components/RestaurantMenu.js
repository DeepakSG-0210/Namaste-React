import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";  
import { MENU_API } from "../utils/constants";  
const RestaurantMenu = () => {
    const [restaurantMenu, setRestaurantMenu] = useState(null);

    const { resId } = useParams();
    console.log(resId);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json.data);
        setRestaurantMenu(json?.data);
    };

    if (restaurantMenu === null) {
        return <Shimmer />
    }

    const { name, cuisines, costForTwoMessage } = restaurantMenu?.cards[2]?.card?.card.info;

    const itemCards = restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards;
    // console.log(itemCards);
    // console.log(data);
    return (
        <div>
            <h1>{name}</h1>
            <hr />
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <ul>
                {itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100}</li>)}
            </ul>
        </div>
    );
};

export default RestaurantMenu