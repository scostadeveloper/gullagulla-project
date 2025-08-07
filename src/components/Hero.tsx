import React from 'react';
import { Button } from 'flowbite-react';
import { HiArrowRight, HiStar, HiShoppingBag, HiSparkles, HiPhone } from 'react-icons/hi2';
import { generateWhatsAppURL } from '../data/menuData';

const Hero: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = 'Olá! Vi os salgados frescos no site e gostaria de fazer um pedido! 🤤';
    window.open(generateWhatsAppURL(message), '_blank');
  };

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-white min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-orange-400/15 to-red-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-gray-800 space-y-8">
            {/* Simple Rating Badge */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 font-medium flex items-center">
                Mais de 1000 clientes satisfeitos 
                <span className="text-red-500 ml-1 text-lg">♥</span>
              </span>
            </div>
            
            {/* Clean Typography */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                Salgados
                <span className="block text-gradient">
                  Artesanais
                </span>
              </h1>
              <p className="text-2xl lg:text-3xl font-medium text-orange-600 flex items-center">
                <HiSparkles className="w-7 h-7 mr-2 text-yellow-500" />
                Mini Churros fresquinhos!
              </p>
            </div>
            
            {/* Simplified Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Combos especiais com <strong className="text-red-600">até 17% OFF</strong>. 
              Entrega rápida no Rio de Janeiro. Feitos frescos todos os dias.
            </p>
            
            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="xl"
                onClick={handleWhatsAppClick}
                className="group relative overflow-hidden bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 transform border-0"
              >
                <div className="flex items-center justify-center relative z-10">
                  <HiPhone className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  PEDIR AGORA VIA WHATSAPP
                  <HiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                {/* Animated background shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
              
              <Button
                size="xl"
                className="group relative overflow-hidden bg-white/90 backdrop-blur-sm text-gray-800 border-2 border-orange-300 hover:border-orange-400 px-8 py-4 text-lg font-semibold rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                onClick={scrollToMenu}
              >
                <div className="flex items-center justify-center">
                  <HiShoppingBag className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Ver Cardápio Completo
                </div>
              </Button>
            </div>

            {/* Minimalist Stats */}
            <div className="grid grid-cols-4 gap-6 pt-8 border-t border-gray-200/50">
              <div className="text-center group">
                <div className="text-2xl font-bold text-orange-600 group-hover:scale-110 transition-transform duration-300">50+</div>
                <div className="text-sm text-gray-500">Variedades</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl font-bold text-orange-600 group-hover:scale-110 transition-transform duration-300">16h30</div>
                <div className="text-sm text-gray-500">Abertura</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl font-bold text-orange-600 group-hover:scale-110 transition-transform duration-300">23h</div>
                <div className="text-sm text-gray-500">Fechamento</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl font-bold text-orange-600 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <HiStar className="w-5 h-5 text-yellow-400 mr-1" />
                  4.9
                </div>
                <div className="text-sm text-gray-500">Avaliação</div>
              </div>
            </div>
          </div>
          
          {/* Clean Image Section */}
          <div className="relative">
            <div className="relative z-10 group">
              <img
                src="/images/hero.jpg"
                alt="Deliciosos salgados artesanais e mini churros"
                className="w-full h-auto rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700"
              />
              
              {/* Subtle Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Enhanced Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-xl animate-bounce flex items-center">
                <span className="text-yellow-300 mr-1">%</span>
                ATÉ 17% OFF
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-orange-400 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center opacity-60">
          <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;