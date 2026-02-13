import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Leaf, Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { cart } = useCart();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/70 border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
          >
            <Leaf className="h-8 w-8 text-emerald-600 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-bold tracking-tight text-slate-900">
              UrbanLeaf
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 text-sm font-medium relative">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-slate-700 hover:text-emerald-600 transition-colors duration-300"
              >
                {link.name}

                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-emerald-600 transition-all duration-300 ${
                    location.pathname === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}

            {/* Admin Button */}
            <Link
              to="/login"
              className="px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Admin
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative group">
              <ShoppingCart className="h-6 w-6 text-slate-700 group-hover:text-emerald-600 transition-colors duration-300" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-700"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-slate-700 hover:text-emerald-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block text-emerald-600 font-semibold"
            >
              Admin
            </Link>

            <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="block text-slate-700"
            >
              Cart ({cartCount})
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
