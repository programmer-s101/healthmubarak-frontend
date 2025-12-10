"use client";

import { useCart } from "../../context/CartContext";

export default function Checkout() {
  const { cart, clearCart } = useCart();

  const handleCheckout = () => {
    clearCart();
    alert("Order placed successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-3">Checkout</h1>

      <p>Total Items: {cart.length}</p>

      <button
        onClick={handleCheckout}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Place Order
      </button>
    </div>
  );
}
