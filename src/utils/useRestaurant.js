import { useState, useEffect } from "react";
import { Restaurant_Menu_URL } from "../constants";
const useRestaurant = (restaurantId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(Restaurant_Menu_URL + restaurantId); //Api Call
    const json = await data.json();
    const restaurantData = json?.data?.cards[2]?.card?.card?.info;
    const menuData = json?.data?.cards
      ?.find((obj) => obj?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (obj) =>
          obj?.card?.card["@type"]?.includes("ItemCategory") ||
          obj?.card?.card["@type"]?.includes("NestedItemCategory")
      );
    setRestaurant(restaurantData);
    setMenu(menuData);
  }
  return { restaurant, menu };
};

export default useRestaurant;
