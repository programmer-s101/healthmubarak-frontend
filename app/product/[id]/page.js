import { getProduct } from "../../../lib/api";
import ProductClient from "./ProductClient";

export default async function ProductPage(props) {
  const { id } = await props.params;       // ✅ params is a Promise in Next.js 16

  const product = await getProduct(id);    // ✅ fetch on server

  return <ProductClient product={product} />;
}
