import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import "../styles/RestaurantMenu.css";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () => {
  
  
  const params = useParams();
  const { restaurantId } = params;
  const {restaurant, menu} = useRestaurant(restaurantId);
  

  if (restaurant === null) return <Shimmer/>;
  const { name, city, locality ,cloudinaryImageId} = restaurant;

  return (
    <div className="restaurant-menu">
    <div>
      <h1>Restaurant Menu</h1>
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{city}</h4>
      <h4>{locality}</h4>
    </div>
    <div className="menu">
        {console.log(menu)}
        {menu?.filter((item) => item?.card?.card?.itemCards?.length > 0)?.map((item) => {
            const itemCategory = item?.card?.card?.title;
            return (
            <div key={itemCategory} className="menu-category">
                <h2>{itemCategory}</h2>
                {item?.card?.card?.itemCards?.map((menuItem) => {
                const { name, price, description ,imageId} = menuItem.card.info;
                return (
                    <div key={name} className="menu-item">
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+imageId} alt={name}/>
                    <h3>{name}</h3>
                    <p>{description}</p>

                    <p>Price: ₹{price / 100}</p>
                    </div>
                );
                })}
            </div>
            );
        })}
    </div>
    </div>
  );
};

export default RestaurantMenu;
