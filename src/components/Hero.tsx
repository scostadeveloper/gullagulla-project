import React from 'react';
import { Button } from 'flowbite-react';
import { HiStar } from 'react-icons/hi2';
import { generateWhatsAppURL } from '../data/menuData';

const Hero: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = 'Olá! Vi os salgados no site e gostaria de fazer um pedido! 🤤';
    window.open(generateWhatsAppURL(message), '_blank');
  };

  const scrollToMenu = () => {
    const menuSection = document.getElementById('combos');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-orange-200/30 to-red-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-yellow-200/20 to-orange-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            
            {/* Social Proof */}
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg w-fit">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-700 font-semibold text-sm">
                +1000 clientes satisfeitos
              </span>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="text-gray-900">Salgados</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  Artesanais
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-700 font-medium">
                Fresquinhos, saborosos e irresistíveis
              </p>
            </div>
            
            {/* Value Proposition */}
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-6 shadow-xl">
              <p className="text-xl font-bold mb-2">🔥 Combos especiais com ATÉ 17% OFF</p>
              <p className="text-lg opacity-90">
                Entrega rápida no Rio de Janeiro
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="xl"
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0"
              >
                PEDIR AGORA
              </Button>
              
              <Button
                size="xl"
                className="bg-white/90 backdrop-blur-sm text-gray-800 border-2 border-orange-400 hover:border-red-500 px-8 py-5 text-lg font-semibold rounded-2xl hover:bg-orange-50 transition-all duration-300"
                onClick={scrollToMenu}
              >
                Ver Cardápio
              </Button>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative group">
              <img
                src="/images/salgadinhos_e_pastelzinhos.jpg"
                alt="Salgados artesanais deliciosos"
                className="w-full h-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Price badge */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-xl">
                <div className="text-yellow-300 text-sm">A partir de</div>
                <div className="text-xl">R$ 19,99</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;