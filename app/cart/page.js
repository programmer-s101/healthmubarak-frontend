"use client";

import { useCart } from "../../context/CartContext";
import Link from "next/link";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <div className="p-6 text-xl">Cart is empty.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.map((item) => (
        <div key={item.cartId} className="flex justify-between border p-4 mb-3">
          <div>
            <h2 className="text-xl">{item.name}</h2>
            <p className="text-green-600 font-bold">₹{item.price}</p>
          </div>

          <button
            onClick={() => removeFromCart(item.cartId)}
            className="bg-red-600 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      <Link href="/checkout">
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
          Go to Checkout
        </button>
      </Link>
    </div>
  );
}
