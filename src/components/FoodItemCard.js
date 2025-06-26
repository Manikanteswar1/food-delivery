import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
export const FoodItemCard = ({ info }) => {
  const { name, imageId, price } = info;
  const dispatch = useDispatch();

  return (
    <div className="group flex flex-col card w-64 bg-white rounded-xl transform shadow hover:shadow-lg hover:bg-gray-200 duration-300 p-4 m-4">
      <img
        className="w-full h-40 object-cover rounded-lg mb-3 group-hover:scale-101 duration-300"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          imageId
        }
        alt={name}
      />
      <h2 className="text-base font-bold text-gray-900 ">{name}</h2>
      <h4 className="text-sm text-gray-700 mt-1 font-semibold">Rs:{price / 100}</h4>
<div className="w-full flex justify-center mt-3">
      
      <div className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 bg-white shadow-md w-fit">
        <button
          className="text-lg font-bold text-red-600 hover:text-red-700 transition cursor-pointer"
          onClick={() => dispatch(removeItem(info))}
        >
          -
        </button>
        <span className="font-semibold text-gray-800 px-1">
          {info.quantity}
        </span>
        <button
          className="text-lg font-bold text-green-600 hover:text-green-700 transition cursor-pointer"
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
