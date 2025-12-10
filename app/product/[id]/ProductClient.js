"use client";

import { useCart } from "../../../context/CartContext";

export default function ProductClient({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-green-600 text-xl font-semibold">₹{product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
