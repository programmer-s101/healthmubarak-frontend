import Link from "next/link";
import { getProducts } from "../lib/api";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">HealthMubarak</h1>

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
