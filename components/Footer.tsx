import React from 'react';
import { Leaf, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6 text-emerald-400" />
              <span className="text-lg font-bold">UrbanLeaf</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Bringing fresh, sustainable, and nutrient-dense microgreens directly to your table. Grown home with love.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Quick Links</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shop Microgreens</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wholesale</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Contact</h3>
            <div className="space-y-2 text-slate-300 text-sm">
              <p>Varun Kishore Karumanchi</p>
              <p>diligentxports@gmail.com</p>
              <p>+91 7680929108</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors"><Twitter className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} UrbanLeaf Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};