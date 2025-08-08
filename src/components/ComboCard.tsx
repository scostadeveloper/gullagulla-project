import React from 'react';
import { Card, Button, Badge } from 'flowbite-react';
import { HiFire, HiGift } from 'react-icons/hi2';
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
    <Card className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl overflow-hidden h-full flex flex-col">
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

      <div className="relative overflow-hidden flex justify-center items-center">
        <img
          src={combo.image}
          alt={combo.name}
          className="w-40 h-40 object-cover rounded-full shadow-md mt-6 mb-2 bg-white"
        />
        <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm shadow-lg transform rotate-12">
          R$ {combo.price.toFixed(2).replace('.', ',')}
        </div>
      </div>

      <div className="flex flex-col h-full justify-between p-6 items-center">
        <div className="w-full flex flex-col justify-start">
          <h5 className="text-2xl font-bold text-center text-gray-800 leading-tight mb-2">
            {combo.name}
          </h5>
          <p className="text-center text-gray-600 leading-relaxed mb-4">
            {combo.description}
          </p>
        </div>
        <div className="w-full flex justify-center mt-auto">
          <Button
            onClick={handleOrderClick}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            PEDIR AGORA
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ComboCard;