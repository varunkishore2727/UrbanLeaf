import { useParams, Link, useNavigate } from "react-router-dom";
import { PRODUCTS } from "../constants";
import { ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";

export const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!slug || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <p className="text-2xl font-semibold mb-4">Product not found</p>
        <Link
          to="/products"
          className="text-emerald-600 hover:underline font-medium"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Back Button */}
      <Link
        to="/products"
        className="inline-flex items-center gap-2 text-emerald-600 mb-10 hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-14 items-start">
        {/* Image Section */}
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[420px] object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-4xl font-bold mb-3 tracking-tight">
            {product.name}
          </h1>

          <p className="text-emerald-700 font-semibold text-xl mb-6">
            ₹{product.price} / {product.weight}
          </p>

          <p className="text-slate-600 leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-50 p-5 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-1">🌱 Growing Time</h4>
              <p className="text-slate-600">{product.growingTime}</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl shadow-sm">
              <h4 className="font-semibold mb-1">❄ Shelf Life</h4>
              <p className="text-slate-600">
                {product.details?.shelfLife}
              </p>
            </div>
          </div>

          {/* Usage */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">🥗 Usage</h4>
            <p className="text-slate-600 leading-relaxed">
              {product.details?.usage}
            </p>
          </div>

          {/* Health Benefits */}
          <div className="mb-10">
            <h4 className="font-semibold mb-2">❤️ Health Benefits</h4>
            <p className="text-slate-600 leading-relaxed">
              {product.details?.healthBenefits}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full md:w-auto bg-emerald-600 text-white px-8 py-4 rounded-2xl hover:bg-emerald-700 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
