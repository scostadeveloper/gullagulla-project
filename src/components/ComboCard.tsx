import React from 'react';
import { Card, Button, Badge } from 'flowbite-react';
import { HiShoppingCart, HiFire, HiGift } from 'react-icons/hi2';
import type { Combo } from '../types';
import { formatPrice, generateWhatsAppURL } from '../data/menuData';

interface ComboCardProps {
  combo: Combo;
}

const ComboCard: React.FC<ComboCardProps> = ({ combo }) => {
  const handleOrderClick = () => {
    const message = `Olá! Gostaria de pedir o combo "${combo.name}" - ${combo.description} por ${formatPrice(combo.price)}. Pode me ajudar? 😋`;
    window.open(generateWhatsAppURL(message), '_blank');
  };

  return (
    <Card className={`
      bg-white shadow-lg max-w-md mx-auto group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border-0
      ${combo.highlight ? 'ring-4 ring-orange-500 ring-offset-4 scale-105' : ''}
    `}>
            
      {combo.highlight && (
        <Badge 
          icon={HiFire}
          className="absolute top-4 right-4 z-10 font-bold text-white bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 rounded-full text-sm shadow-lg animate-pulse"
        >
          MAIS VENDIDO
        </Badge>
      )}
      
      {combo.savings && (
        <Badge 
          icon={HiGift}
          className="absolute top-4 left-4 z-10 font-bold text-white bg-gradient-to-r from-green-500 to-green-600 px-4 py-2 rounded-full text-sm shadow-lg"
        >
          {combo.savings}
        </Badge>
      )}

      <div className="relative overflow-hidden">
        <img
          src={combo.image}
          alt={combo.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm shadow-lg transform rotate-12">
          R$ {combo.price.toFixed(2).replace('.', ',')}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h5 className="text-2xl font-bold text-center text-gray-800 leading-tight">
          {combo.name}
        </h5>
        
        <p className="text-center text-gray-600 leading-relaxed">
          {combo.description}
        </p>

        
        <div className="bg-orange-50 rounded-lg p-4">
          <h6 className="text-sm font-bold mb-3 text-orange-800 flex items-center">
            <span className="mr-2">📦</span>
            O que você recebe:
          </h6>
          <div className="space-y-2">
            {combo.items.map((item, index) => (
              <div key={index} className="flex items-center text-sm text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        
        <Button
          onClick={handleOrderClick}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <HiShoppingCart className="w-5 h-5 mr-2" />
          PEDIR AGORA VIA WHATSAPP
        </Button>

        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
          <p className="text-yellow-800 text-sm font-medium flex items-center">
            <span className="mr-2">⏰</span>
            Oferta por tempo limitado!
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ComboCard;