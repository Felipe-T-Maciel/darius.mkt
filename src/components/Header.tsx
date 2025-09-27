import React, { useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-red-800 via-red-400 to-red-300 bg-clip-text">
               Darius.mkt
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-white hover:text-purple-400 transition-colors duration-200">Início</a>
            <a href="#hot" className="text-white hover:text-red-400 transition-colors duration-200">Hot</a>
            <a href="#igaming" className="text-white hover:text-cyan-400 transition-colors duration-200">iGaming</a>
            <a href="#black" className="text-white hover:text-yellow-400 transition-colors duration-200">Black</a>
            <a href="#contato" className="text-white hover:text-purple-400 transition-colors duration-200">Contato</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="bg-gradient-to-r from-purple-600 to-yellow-500 text-black px-6 py-2 rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Flame size={20} />
              Quero Vender Mais
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-purple-400 transition-colors duration-200"
            >
              {/* {isMenuOpen ? <X size={24} /> : <Menu size={24} />} */} 
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md rounded-lg mt-2">
              <a href="#inicio" className="block px-3 py-2 text-white hover:text-purple-400 transition-colors duration-200">Início</a>
              <a href="#hot" className="block px-3 py-2 text-white hover:text-red-400 transition-colors duration-200">Hot</a>
              <a href="#igaming" className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors duration-200">iGaming</a>
              <a href="#black" className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-200">Black</a>
              <a href="#contato" className="block px-3 py-2 text-white hover:text-purple-400 transition-colors duration-200">Contato</a>
              <button className="w-full mt-3 bg-gradient-to-r from-purple-600 to-yellow-500 text-black px-6 py-2 rounded-full font-bold flex items-center justify-center gap-2">
                <Flame size={20} />
                Quero Vender Mais
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;