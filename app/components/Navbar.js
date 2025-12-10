"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <div className="p-4 bg-gray-900 text-white flex justify-between">
      <Link href="/">HealthMubarak</Link>

      <Link href="/cart">
        Cart ({cart.length})
      </Link>
    </div>
  );
}
