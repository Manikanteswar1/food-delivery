import { clearCart } from "../utils/cartSlice";
import FoodItemCard from "./FoodItemCard";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center">
        <div className="text-center p-12 bg-white rounded-xl shadow-lg border border-slate-200 mb-44">
          <h2 className="text-3xl font-bold mb-4 text-slate-800">
            Your Cart is Empty
          </h2>
          <p className="text-slate-600 text-lg">
            Add some delicious items to get started!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Your Cart</h1>
          <button
            className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold cursor-pointer transition-all duration-300 shadow-lg border border-red-500 hover:border-red-600"
            onClick={() => handleClear()}
          >
            Clear Cart
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {cartItems.map((item, index) => (
            <FoodItemCard key={item.id + "-" + index} info={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
