import { Link } from "react-router-dom";
import type { Product } from "../types";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <Link
      to={`/products/${product.slug}`}
      data-product={product.name.toLowerCase()}
      className="
        relative group block
        bg-white
        rounded-3xl
        border border-slate-100
        shadow-[0_8px_24px_rgba(0,0,0,0.08)]
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
        transition-all duration-500 ease-out
        hover:-translate-y-2
        overflow-hidden
      "
    >
      {/* Image Section */}
      <div className="relative overflow-hidden rounded-t-3xl">
        <img
          src={product.image}
          alt={product.name}
          className="
            w-full h-60 object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-110
          "
        />

        {/* Gradient for depth */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-black/25 via-black/5 to-transparent
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
          "
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-1 tracking-tight">
          {product.name}
        </h3>

        <p className="text-sm text-slate-500 mb-4">
          {product.weight}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-emerald-600 font-semibold text-lg">
            ₹{product.price}
          </span>

          <span
            className="
              text-xs font-medium
              px-3 py-1
              rounded-full
              bg-emerald-50
              text-emerald-700
              border border-emerald-100
            "
          >
            {product.availability}
          </span>
        </div>
      </div>

      {/* AI Glow Overlay (only visible when highlighted) */}
      <div className="absolute inset-0 pointer-events-none rounded-3xl ai-overlay" />
    </Link>
  );
}

export default ProductCard;
