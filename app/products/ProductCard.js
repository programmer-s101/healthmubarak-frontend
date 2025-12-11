"use client";

import Link from "next/link";

export default function ProductCard({ product }) {
  const img = product.image || `https://via.placeholder.com/600x600.png?text=${encodeURIComponent(product.name)}`;

  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">
        <div className="w-full h-56 bg-gray-100 overflow-hidden">
          <img src={img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <div className="flex items-center justify-between mt-3">
            <span className="text-green-600 font-bold">₹{product.price}</span>
            <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition text-sm">View</button>
          </div>
        </div>
      </div>
    </Link>
  );
}
