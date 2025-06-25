import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import "../styles/RestaurantMenu.css";
import useRestaurant from "../utils/useRestaurant";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams();
  const { restaurantId } = params;
  const { restaurant, menu } = useRestaurant(restaurantId);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItems = (item) => {
    dispatch(removeItem(item));
  };

  if (restaurant === null) return <Shimmer />;
  const { name, city, locality, cloudinaryImageId } = restaurant;

  return (
    <div className="restaurant-menu">
      <div>
        <h1>Restaurant Menu</h1>
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{city}</h4>
        <h4>{locality}</h4>
      </div>
      <div className="menu ">
        {console.log(menu)}
        {menu
          ?.filter((item) => item?.card?.card?.itemCards?.length > 0)
          ?.map((item) => {
            const itemCategory = item?.card?.card?.title;
            return (
              <div key={itemCategory} className="menu-category ">
                <h2>{itemCategory}</h2>
                {item?.card?.card?.itemCards?.map((menuItem) => {
                  const { name, price, description, imageId } =
                    menuItem.card.info;
                  const itemInCart = cartItems.find(
                    (i) => i.id === menuItem.card.info.id
                  );
                  const quantity = itemInCart ? itemInCart.quantity : 0;
                  return (
                    <div
                      key={name}
                      className="menu-item flex justify-between items-start gap-6 p-4 border-b bg-white rounded shadow-sm"
                    >
                      {/* Text Info Section */}
                      <div className="flex flex-col flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {name}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {description}
                        </p>
                        <p className="text-sm font-bold text-gray-700 mt-2">
                          Price: ₹{price / 100}
                        </p>
                      </div>

                      {/* Image and Button Section */}
                      <div className="flex flex-col items-center justify-between min-w-[120px]">
                        <img
                          src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                            imageId
                          }
                          alt={name}
                          className="w-[100px] h-80 object-cover rounded-lg border"
                        />

                        {quantity === 0 ? (
                          <button
                            className="mt-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold py-1.5 px-4 rounded-full shadow transition duration-200"
                            onClick={() => handleAddItems(menuItem.card.info)}
                          >
                            Add
                          </button>
                        ) : (
                          <div className="flex items-center justify-center gap-3 mt-2 border border-gray-300 rounded-full px-3 py-1 bg-gray-50 shadow-sm">
                            <button
                              className="text-lg font-bold text-red-600 hover:text-red-700 transition cursor-pointer"
                              onClick={() =>
                                handleRemoveItems(menuItem.card.info)
                              }
                            >
                              −
                            </button>
                            <span className="font-semibold text-gray-800">
                              {quantity}
                            </span>
                            <button
                              className="text-lg font-bold text-green-600 hover:text-green-700 transition cursor-pointer"
                              onClick={() => handleAddItems(menuItem.card.info)}
                            >
                              +
                            </button>
                          </div>
                        )}
                      </div>
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
