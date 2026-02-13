export const API_BASE_URL = "http://localhost:8000/api";

export async function fetchProducts() {
  const res = await fetch(`${API_BASE_URL}/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export async function fetchProductBySlug(slug: string) {
  const res = await fetch(`${API_BASE_URL}/products/${slug}`);
  if (!res.ok) {
    throw new Error("Product not found");
  }
  return res.json();
}
