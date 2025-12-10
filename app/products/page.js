"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/product/${p.id}`}
            className="border p-4 rounded shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-green-600 font-bold">₹{p.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
