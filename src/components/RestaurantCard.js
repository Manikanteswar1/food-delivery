import { burgerking } from "../constants";
import { restaurantsList } from "../constants";

export const RestaurantCard = ({info}) => {
  const { name, cloudinaryImageId, avgRating, cuisines } = info;
  return (
    <div className="card w-64 bg-white rounded-xl transform shadow hover:shadow-lg hover:bg-gray-200 duration-300 hover:scale-105 p-4 m-4">
      <img className="w-full h-40 object-cover rounded-lg mb-3" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt={name}/>
      <h2 className="ttext-base font-semibold text-gray-900 truncate">{name}</h2>
      <h3 className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</h3>
      <h4 className="text-sm text-gray-700 mt-1 font-medium">{avgRating} stars</h4>
    </div>
  );
};