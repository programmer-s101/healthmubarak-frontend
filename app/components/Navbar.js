"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* left: logo */}
        <Link href="/" className="text-2xl font-extrabold text-green-600">
          HealthMubarak
        </Link>

        {/* center: simple nav */}
        <div className="hidden md:flex items-center gap-6 text-gray-700">
          <Link href="/products" className="hover:text-green-600">Products</Link>
          <Link href="/checkout" className="hover:text-green-600">Checkout</Link>
        </div>

        {/* right: cart */}
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative">
            <span className="text-gray-700 hover:text-green-600 font-medium">Cart</span>
            {cart?.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
