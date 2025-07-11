import { useParams } from "react-router-dom";
import "../styles/RestaurantMenu.css";
import useRestaurant from "../utils/useRestaurant";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import ShimmerMenu from "./ShimmerMenu";

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

  if (restaurant === null) return <ShimmerMenu />;
  const { name, city, locality, cloudinaryImageId } = restaurant;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Restaurant Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-slate-200">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-800 mb-6">Restaurant Menu</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <img
                className="w-48 h-48 object-cover rounded-xl shadow-lg border-2 border-slate-300"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  cloudinaryImageId
                }
                alt={name}
              />
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-slate-800 mb-2">{name}</h2>
                <p className="text-xl text-slate-600 font-medium">{city}</p>
                <p className="text-lg text-slate-500">{locality}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="space-y-8">
          {/* {console.log(menu)} */}
          {menu
            ?.filter((item) => item?.card?.card?.itemCards?.length > 0)
            ?.map((item) => {
              const itemCategory = item?.card?.card?.title;
              return (
                <div key={itemCategory} className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
                  <h2 className="text-3xl font-bold text-slate-800 mb-6 pb-3 border-b border-slate-200">
                    {itemCategory}
                  </h2>
                  <div className="space-y-4">
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
                          className="flex justify-between items-start gap-6 p-6 border border-slate-200 bg-slate-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          {/* Text Info Section */}
                          <div className="flex flex-col flex-1">
                            <h3 className="text-xl font-bold text-slate-800 mb-2">
                              {name}
                            </h3>
                            <p className="text-slate-600 mb-3 leading-relaxed">
                              {description}
                            </p>
                            <p className="text-lg font-bold text-amber-600">
                              Price: ₹{price / 100}
                            </p>
                          </div>

                          {/* Image and Button Section */}
                          <div className="flex flex-col items-center justify-between min-w-[140px]">
                            <img
                              src={
                                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                                imageId
                              }
                              alt={name}
                              className="w-[120px] h-[120px] object-cover rounded-lg border-2 border-slate-300 shadow-md mb-4"
                            />

                            {quantity === 0 ? (
                              <button
                                className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 border border-amber-500 hover:border-amber-600 cursor-pointer"
                                onClick={() => handleAddItems(menuItem.card.info)}
                              >
                                Add
                              </button>
                            ) : (
                              <div className="flex items-center gap-3 border-2 border-slate-300 rounded-full px-4 py-2 bg-white shadow-md">
                                <button
                                  className="text-xl font-bold text-red-600 hover:text-red-700 hover:bg-red-50 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 cursor-pointer"
                                  onClick={() =>
                                    handleRemoveItems(menuItem.card.info)
                                  }
                                >
                                  −
                                </button>
                                <span className="font-bold text-slate-800 px-2">
                                  {quantity}
                                </span>
                                <button
                                  className="text-xl font-bold text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 cursor-pointer"
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
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;