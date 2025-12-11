"use client";
export const dynamic = "force-dynamic";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4">HealthMubarak — Pure Health, Delivered</h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Organic products, lab-tested, delivered to your door. Discover home remedies, superfoods, and daily health essentials.</p>
          <Link href="/products" className="inline-block bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:opacity-95 transition">
            Shop Now
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Why Choose HealthMubarak?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">100% Organic</h3>
            <p>We only source natural, chemical-free products for your family.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Quality Tested</h3>
            <p>All items undergo strict quality control and lab tests.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p>Secure packaging and reliable courier partners across India.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
