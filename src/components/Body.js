import { RestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { restaurantsList } from "../constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useData from "../utils/useData";
import useOnline from "../utils/useOnline";



const Body = () => {
  const {
    allRestaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    searchText,
    setSearchText,
  } = useData();


  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Looks like you are offline. Please check your internet connection.</h1>;
  }

  // if (!allRestaurants) return null;
  
  // if (filteredRestaurants?.length === 0 && allRestaurants?.length === 0) {
  //   return <h1>No Restaurants Found</h1>;
  // }

  return (filteredRestaurants?.length===0) ? <Shimmer/> :(
    <>
      <div className="search-container flex flex-col sm:flex-row justify-center mt-4">
  <input
    type="text"
    className="px-4 py-2 border border-gray-500 rounded-lg rounded-r-none shadow-sm focus:outline-none focus:ring-1 focus:ring-orange-400 w-full sm:w-72"
    placeholder="Search for restaurants..."
    value={searchText}
    onChange={(e) => {
      setSearchText(e.target.value);
      const data = filterData(searchText, allRestaurants);
      setFilteredRestaurants(data);
    }}
  />
  <button
    className="px-2 bg-orange-500 text-white font-medium rounded-lg rounded-l-none  hover:bg-orange-600 transition-all duration-300 shadow-md w-full sm:w-auto"
    onClick={() => {
      const data = filterData(searchText, allRestaurants);
      setFilteredRestaurants(data);
    }}
  >
    Search
  </button>
</div>

    
       
      <div className="restaurant-list pt-4">
        {filteredRestaurants?.map((restaurant) => {
          return <Link to={"/restaurant/"+ restaurant?.info?.id}  key={restaurant?.info?.id}><RestaurantCard {...restaurant} /></Link>
        })}
      </div>
      
    </>
  );
};

export default Body;
