import { burgerking } from "../constants";
import { restaurantsList } from "../constants";

export const RestaurantCard = ({info}) => {
  const { name, cloudinaryImageId, avgRating, cuisines,locality } = info;
  console.log(info);
  return (
    <div className="card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 p-6 m-4 border border-slate-200 hover:border-amber-300">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105" 
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} 
          alt={name}
        />
        <div className="absolute top-3 right-3 bg-slate-800 text-amber-400 px-2 py-1 rounded-full text-xs font-bold">
          ⭐ {avgRating}
        </div>
      </div>
      <div className="space-y-2">
        <h2 className="text-lg font-bold text-slate-800 truncate">{name}</h2>
        <h3 className="text-sm text-slate-600 truncate">{cuisines.join(", ")}</h3>
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm text-slate-500">{locality}</span>
          
        </div>
      </div>
    </div>
  );
};