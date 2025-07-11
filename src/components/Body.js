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
    return (
      <div className="flex justify-center items-center h-96 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg border border-slate-300">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Connection Lost</h1>
          <p className="text-slate-600">Please check your internet connection and try again.</p>
        </div>
      </div>
    );
  }

  if (!allRestaurants || allRestaurants.length === 0) {
    return <Shimmer />;
  }

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <div className="search-container flex flex-col sm:flex-row justify-center mb-8">
          <div className="relative flex w-full sm:w-96 shadow-lg">
            <input
              type="text"
              className="flex-1 px-6 py-3 border-2 border-slate-300 rounded-l-lg bg-white text-slate-800 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-all duration-300"
              placeholder="Search for restaurants..."
              value={searchText}
              onChange={(e) => {
                const newText = e.target.value;
                setSearchText(newText);
                const data = filterData(newText, allRestaurants);
                setFilteredRestaurants(data);
              }}
            />
            <button
              className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-r-lg hover:bg-amber-700 transition-all duration-300 shadow-md border-2 border-amber-600 hover:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
              onClick={() => {
                const data = filterData(searchText, allRestaurants);
                setFilteredRestaurants(data);
              }}
            >
              Search
            </button>
          </div>
        </div>

        <div className="restaurant-list flex flex-wrap justify-center">
          {filteredRestaurants?.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
                className="w-full max-w-xs"
              >
                <RestaurantCard {...restaurant} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;