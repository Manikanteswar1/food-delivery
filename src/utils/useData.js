import { useEffect, useState } from "react";
import { restaurantsList } from "../constants";

const useData = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const apiData =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (apiData?.length > 0) {
        setAllRestaurants(apiData);
        setFilteredRestaurants(apiData);
      } else {
        setAllRestaurants(restaurantsList);
        setFilteredRestaurants(restaurantsList);
      }
    } catch (err) {
      console.error("Error fetching restaurant data", err);
      setAllRestaurants(restaurantsList);
      setFilteredRestaurants(restaurantsList);
    }
  }

  return {
    allRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    searchText,
    setSearchText,
  };
};

export default useData;
