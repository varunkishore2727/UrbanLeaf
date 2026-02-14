import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
    .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setVisibleCount(0);
      });
  }, []);

  useEffect(() => {
    if (visibleCount < products.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, products.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-semibold text-center mb-16 tracking-tight">
        Our Harvest 
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product, index) => {
          const isVisible = index < visibleCount;

          return (
            <div
              key={product._id}
              className={`transform transition-all duration-700
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
