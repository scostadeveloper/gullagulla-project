import React from 'react';
import { Button } from 'flowbite-react';
import { HiPhone, HiQuestionMarkCircle } from 'react-icons/hi2';

interface HeaderProps {
  onOpenFAQ: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenFAQ }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5521976958970';
    const message = 'Olá! Vi o site da Gulla Gulla e gostaria de fazer um pedido dos seus salgados fresquinhos! 🤤';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="bg-gradient-to-r from-orange-500 to-red-500 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 py-4">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-yellow-300 tracking-tight">
              Gulla Gulla
            </h1>
            <p className="text-sm font-medium text-white/90">
              Fábrica de Salgados & Dolos
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-lg"
              size="sm"
            >
              <HiPhone className="w-5 h-5 mr-2" />
              PEDIR AGORA
            </Button>
            
            <Button
              onClick={onOpenFAQ}
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              size="sm"
            >
              <HiQuestionMarkCircle className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;