import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const {
    cart,
    incrementQty,
    decrementQty,
    removeFromCart,
    clearCart,
  } = useCart();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-semibold mb-4">Your Cart is Empty 🛒</h2>
        <Link
          to="/products"
          className="bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10">Your Cart</h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-2xl shadow-md"
          >
            {/* Product Info */}
            <div className="flex items-center gap-6 w-full md:w-auto">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-xl"
              />

              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-slate-500">
                  ₹{item.price} × {item.quantity}
                </p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <button
                onClick={() => decrementQty(item.id)}
                className="bg-slate-200 px-3 py-1 rounded-lg"
              >
                -
              </button>

              <span className="font-semibold">{item.quantity}</span>

              <button
                onClick={() => incrementQty(item.id)}
                className="bg-slate-200 px-3 py-1 rounded-lg"
              >
                +
              </button>
            </div>

            {/* Remove */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:underline mt-4 md:mt-0"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-12 bg-slate-50 p-8 rounded-2xl shadow-md">
        <div className="flex justify-between text-xl font-semibold mb-6">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <button className="w-full bg-emerald-600 text-white py-4 rounded-xl hover:bg-emerald-700 transition mb-4">
          Proceed to Checkout
        </button>

        <button
          onClick={clearCart}
          className="w-full border border-slate-300 py-3 rounded-xl hover:bg-slate-100 transition"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};
