const BASE_URL = "http://127.0.0.1:8000";

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
}

export async function getProduct(id) {
  const res = await fetch(`${BASE_URL}/product/${id}`);
  return res.json();
}
