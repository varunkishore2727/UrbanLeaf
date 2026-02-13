import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sprout, ShieldCheck, Truck } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
        <img
  src="/images/hero.jpg"
  alt="Microgreens background"
  className="
    w-full h-full object-cover
    scale-100
    animate-[heroZoom_20s_ease-in-out_infinite]
  "
/>


          <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Fresh Microgreens for <span className="text-emerald-400">Modern Living</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Nutrient-dense, sustainably grown, and harvested hours before delivery. Elevate your meals with UrbanLeaf.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/products" 
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Order Now</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              to="/about" 
              className="bg-white hover:bg-slate-100 text-emerald-900 px-8 py-3 rounded-full font-semibold transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose UrbanLeaf?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We believe in quality without compromise. Our vertical farming methods ensure consistent, clean, and delicious greens year-round.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-6">
                <Sprout className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Grown Locally</h3>
              <p className="text-slate-600">
                Cultivated right here in the city using advanced vertical farming to reduce food miles and carbon footprint.
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-6">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Chemical-Free</h3>
              <p className="text-slate-600">
                100% pesticide-free. We use organic seeds and purified water to grow the cleanest greens possible.
              </p>
            </div>

            <div className="p-8 bg-slate-50 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-6">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Harvested Fresh</h3>
              <p className="text-slate-600">
                Harvested on delivery day to ensure maximum nutritional value and peak flavor when it reaches your door.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Microgreens Grid Section */}
<section className="py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        Our Microgreens
      </h2>
      <p className="text-slate-600 max-w-2xl mx-auto">
        Carefully grown, freshly harvested, and packed with nutrition.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      
      {/* Broccoli */}
      <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
        <img
          src="/images/broccoli.jpg"
          alt="Broccoli Microgreens"
          className="w-full h-56 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Broccoli Microgreens
          </h3>
          <p className="text-slate-600 text-sm">
            Rich in antioxidants and supports immune health.
          </p>
        </div>
      </div>

      {/* Pea Shoots */}
      <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
        <img
          src="/images/pea.jpg"
          alt="Pea Shoots"
          className="w-full h-56 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Pea Shoots
          </h3>
          <p className="text-slate-600 text-sm">
            Sweet flavor, high in protein and vitamins.
          </p>
        </div>
      </div>

      {/* Radish */}
      <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
        <img
          src="/images/radish.jpg"
          alt="Radish Microgreens"
          className="w-full h-56 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Radish Microgreens
          </h3>
          <p className="text-slate-600 text-sm">
            Spicy crunch that boosts digestion.
          </p>
        </div>
      </div>

      {/* Sunflower */}
      <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
        <img
          src="/images/sunflower.jpg"
          alt="Sunflower Microgreens"
          className="w-full h-56 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Sunflower Greens
          </h3>
          <p className="text-slate-600 text-sm">
            Nutty taste with healthy fats and minerals.
          </p>
        </div>
      </div>

      {/* Beetroot */}
      <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
        <img
          src="/images/beetroot.jpg"
          alt="Beetroot Microgreens"
          className="w-full h-56 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Beetroot Microgreens
          </h3>
          <p className="text-slate-600 text-sm">
            Earthy flavor packed with iron and folate.
          </p>
        </div>
      </div>

      {/* Mustard */}
      <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
        <img
          src="/images/mustard.jpg"
          alt="Mustard Microgreens"
          className="w-full h-56 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Mustard Greens
          </h3>
          <p className="text-slate-600 text-sm">
            Bold flavor that stimulates metabolism.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to taste the difference?</h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our weekly box and get fresh microgreens delivered to your doorstep at a 15% discount.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Start Your Subscription
          </Link>
        </div>
      </section>
    </div>
  );
};