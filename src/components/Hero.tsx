import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-yellow-500/20 animate-pulse"></div>
        {/* Golden particles effect */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-gradient-to-r from-purple-400 via-white to-yellow-400 bg-clip-text animate-fade-in">
          Transforme seu Marketing Digital em Vendas Reais
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Escolha seu nicho e comece agora.
        </p>

        <button className="bg-gradient-to-r from-purple-600 to-yellow-500 text-black px-8 py-4 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 animate-fade-in flex items-center gap-3 mx-auto">
          Entrar Agora
          <ArrowRight size={24} />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;