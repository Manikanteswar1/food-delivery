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
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600">
          Add some delicious items to get started!
        </p>
      </div>
    );
  }
  return (
    <>
      <div className="text-center font-bold text-3xl">Cart</div>
      <div className="text-center">
        <button
          className="p-2 m-2 bg-red-500 rounded-lg text-white cursor-pointer"
          onClick={() => handleClear()}
        >
          Clear
        </button>
        
      </div>
      <div className="flex flex-wrap justify-center">
        {cartItems.map((item, index) => (
          <FoodItemCard key={item.id + "-" + index} info={item} />
        ))}
      </div>
    </>
  );
};

export default Cart;
