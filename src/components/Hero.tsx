import React, { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';
import { HiStar } from 'react-icons/hi2';

const Hero: React.FC = () => {
  // Carousel data - 5 featured items
  const carouselItems = [
    {
      id: '20-mini-pasteis',
      name: '20 Mini Pastéis',
      price: 19.99,
      image: '/images/pastelzinho.jpg'
    },
    {
      id: '50-salgadinhos',
      name: '50 Salgadinhos',
      price: 24.49,
      image: '/images/salgadinhos.jpg'
    },
    {
      id: '50-mini-churros',
      name: '50 Mini Churros',
      price: 24.99,
      image: '/images/churrinhos.jpg'
    },
    {
      id: '60-salgados-refri',
      name: 'Combo + Refri 1.5L',
      price: 31.99,
      image: '/images/salgadinhos_refri_1litro.jpg'
    },
    {
      id: '100-salgadinhos',
      name: '100 Salgadinhos',
      price: 38.99,
      image: '/images/salgadinhos.jpg'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const handleItemClick = (itemId: string) => {
    const menuSection = document.getElementById('combos');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
    
    // Highlight the clicked item (you can add more specific targeting here)
    setTimeout(() => {
      const itemElement = document.querySelector(`[data-item-id="${itemId}"]`);
      if (itemElement) {
        itemElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 500);
  };

  const scrollToMenu = () => {
    const menuSection = document.getElementById('combos');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-gradient-to-r from-orange-200/30 to-red-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-gradient-to-r from-yellow-200/20 to-orange-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10 pt-16 sm:pt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Social Proof - Hidden on mobile */}
            <div className="hidden sm:flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg w-fit mx-auto lg:mx-0">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-700 font-semibold text-xs sm:text-sm">
                +1000 clientes satisfeitos
              </span>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="text-gray-900">Salgadinhos</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                  feitos com amor
                </span>
              </h1>
              
              <p className="text-base sm:text-xl lg:text-2xl text-gray-700 font-medium">
                Fresquinhos, saborosos e irresistíveis
              </p>
            </div>
            
            {/* Value Proposition - Simplified for mobile */}
            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">
              <p className="text-base sm:text-xl font-bold mb-1 sm:mb-2">🔥 Combos para sua festa!</p>
              <p className="text-sm sm:text-lg opacity-90 hidden sm:block">
                Entrega rápida no Bairro Urucânia e adjacências
              </p>
              <p className="text-sm opacity-90 sm:hidden">
                Entrega em Urucânia
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              
              <Button
                size="xl"
                className="bg-white/90 backdrop-blur-sm text-gray-800 border-2 border-orange-400 hover:border-red-500 px-8 py-5 text-lg font-semibold rounded-2xl hover:bg-orange-50 transition-all duration-300"
                onClick={scrollToMenu}
              >
                Ver Cardápio
              </Button>
            </div>
          </div>
          
          {/* Right Column - Clean Carousel */}
          <div className="relative">
            <div 
              className="relative cursor-pointer group"
              onClick={() => handleItemClick(carouselItems[currentSlide].id)}
            >
              <img
                src={carouselItems[currentSlide].image}
                alt={carouselItems[currentSlide].name}
                className="w-full h-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
              
              {/* Simple price tag */}
              <div className="absolute top-6 right-6 bg-orange-500 text-white px-4 py-2 rounded-xl font-bold text-lg shadow-xl">
                <div className="text-yellow-100 text-sm">A partir de</div>
                <div className="text-xl">R$ {carouselItems[currentSlide].price.toFixed(2).replace('.', ',')}</div>
              </div>
              
              {/* Product name */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-xl font-semibold">
                {carouselItems[currentSlide].name}
              </div>
            </div>
            
            {/* Clean navigation dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-orange-500 scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
            
            {/* Action hint */}
            <p className="text-center text-gray-600 mt-2 text-sm">
              Clique na imagem para ver no cardápio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;