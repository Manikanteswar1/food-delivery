import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

export const FoodItemCard = ({ info }) => {
  const { name, imageId, price } = info;
  const dispatch = useDispatch();

  return (
    <div className="group flex flex-col card max-w-3xs max-h-1/12 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 border border-slate-200 hover:border-amber-300 cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            imageId
          }
          alt={name}
        />
      </div>
      <div className="flex-1 space-y-3">
        <h2 className="text-lg font-bold text-slate-800 line-clamp-2">{name}</h2>
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">Price:</span>
          <span className="text-lg font-bold text-amber-600">₹{price / 100}</span>
        </div>
      </div>
      
      <div className="w-full flex justify-center mt-4">
        <div className="flex items-center gap-3 border-2 border-slate-300 rounded-full px-4 py-2 bg-slate-50 shadow-md hover:shadow-lg transition-all duration-300">
          <button
            className="text-xl font-bold text-red-600 hover:text-red-700 hover:bg-red-50 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 cursor-pointer"
            onClick={() => dispatch(removeItem(info))}
          >
            −
          </button>
          <span className="font-bold text-slate-800 px-3 py-1 bg-white rounded-full border border-slate-200 min-w-[2rem] text-center">
            {info.quantity}
          </span>
          <button
            className="text-xl font-bold text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 cursor-pointer"
            onClick={() => dispatch(addItem(info))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItemCard;