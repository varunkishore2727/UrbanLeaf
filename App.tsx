import React from "react";
import {
  HashRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

import Login from "./pages/Login";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import Products from "./pages/Products";
import { Contact } from "./pages/Contact";
import { ProductDetail } from "./pages/ProductDetail";
import { Cart } from "./pages/Cart";

/* Scroll to top on route change */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/* Layout */
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      <ScrollToTop />
      <Header />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <Routes>

        {/* 🔐 ADMIN LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* 🌍 PUBLIC SITE */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:slug" element={<ProductDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />

        </Route>

      </Routes>
    </HashRouter>
  );
}
