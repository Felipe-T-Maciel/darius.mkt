import React from 'react';
import { Flame, Gamepad2, Crown } from 'lucide-react';
import { MdWhatsapp } from "react-icons/md";

const Categories = () => {

  const handleWhatsAppClick = (message:string) => {
    const phoneNumber = "5521979400015"; // Replace with actual WhatsApp number
    const messageZap = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${messageZap}`;
    window.open(whatsappUrl, '_blank');
  };

  const categories = [
    {
      id: 'hot',
      title: 'HOT',
      icon: <Flame size={48} />,
      description: 'Venda de conteúdo de terceiros',
      bgClass: 'bg-gradient-to-br from-red-600 to-orange-500',
      hoverClass: 'hover:from-red-500 hover:to-orange-400',
      image: 'https://i.pinimg.com/736x/ea/6d/8e/ea6d8ed457e4f90c99111f903e0e7db1.jpg',
      message: 'Olá! Quero fazer R$40.000 no HOT.'
    },
    {
      id: 'igaming',
      title: 'iGAMING',
      icon: <Gamepad2 size={48} />,
      description: 'Mercado de apostas esportivas',
      bgClass: 'bg-gradient-to-br from-cyan-600 to-blue-500',
      hoverClass: 'hover:from-cyan-500 hover:to-blue-400',
      image: 'https://i.pinimg.com/736x/e3/34/27/e33427639c4d9e2fb460108ffa0d41cb.jpg',
      message: 'Olá! Quero fazer R$40.000 no IGAMING.'
    },
    {
      id: 'black',
      title: 'BLACK',
      icon: <Crown size={48} />,
      description: 'Ofertas agressivas',
      bgClass: 'bg-gradient-to-br from-gray-900 to-yellow-600',
      hoverClass: 'hover:from-gray-800 hover:to-yellow-500',
      image: 'https://i.pinimg.com/736x/b9/63/51/b9635152f843e6427d11b155cf356702.jpg',
      message: 'Olá! Quero fazer R$40.000 no BLACK.'
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent text-white bg-clip-text mb-4">
            não vendo curso e nem mentoria, te ensino <span  style={{'color':'#e40c0c'}}>DE GRAÇA</span > como fazer <p  style={{'color':'#11c443'}}>R$40.000</p > por mês com:
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {/* Cada categoria foi desenvolvida para maximizar seus resultados em nichos específicos */}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden h-96 ${category.bgClass} ${category.hoverClass} transition-all duration-500 transform hover:scale-105 hover:shadow-2xl`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-30 transition-opacity duration-500"
                style={{ backgroundImage: `url(${category.image})` }} 
              ></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <div className="text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-200 text-lg mb-4">
                  {category.description}
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white flex gap-1 items-center text-black px-6 py-2 rounded-full font-bold hover:bg-green-400 transition-colors duration-200"
                    onClick={() => {
                      handleWhatsAppClick(category.message); 
                    }}>
                    <MdWhatsapp />
                    WhatsApp
                  </button>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;