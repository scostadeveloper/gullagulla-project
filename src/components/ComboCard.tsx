import React, { useState } from 'react';
import { Card, Button, Badge } from 'flowbite-react';
import { HiFire, HiGift } from 'react-icons/hi2';
import type { Combo } from '../types';
import { useCart } from '../contexts/CartContext';
import FlavorSelectionModal from './FlavorSelectionModal';

interface ComboCardProps {
  combo: Combo;
}

const ComboCard: React.FC<ComboCardProps> = ({ combo }) => {
  const { addItem } = useCart();
  const [isFlavorModalOpen, setIsFlavorModalOpen] = useState(false);

  const handleAddToCart = () => {
    if (combo.requiresFlavors && combo.flavors) {
      setIsFlavorModalOpen(true);
    } else {
      addItem(combo, 'combo');
    }
  };

  const handleFlavorConfirm = (selectedFlavors: string[]) => {
    addItem(combo, 'combo', selectedFlavors);
  };

  return (
    <>
    <Card className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl overflow-hidden h-full flex flex-col">
      {/* Hide badges on mobile for cleaner look */}
      {combo.highlight && (
        <Badge 
          icon={HiFire}
          className="hidden sm:flex absolute top-4 right-4 z-10 font-bold text-white bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 rounded-full text-sm shadow-lg animate-pulse"
        >
          MAIS VENDIDO
        </Badge>
      )}
      
      {combo.savings && (
        <Badge 
          icon={HiGift}
          className="hidden sm:flex absolute top-4 left-4 z-10 font-bold text-white bg-gradient-to-r from-green-500 to-green-600 px-4 py-2 rounded-full text-sm shadow-lg"
        >
          {combo.savings}
        </Badge>
      )}

      <div className="relative overflow-hidden flex justify-center items-center">
        <img
          src={combo.image}
          alt={combo.name}
          className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-cover rounded-full shadow-md mt-4 sm:mt-6 mb-2 bg-white"
        />
        <div className="absolute top-1 sm:top-2 right-1 sm:right-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-2 sm:px-3 py-1 rounded-full font-bold text-xs sm:text-sm shadow-lg transform rotate-12">
          R$ {combo.price.toFixed(2).replace('.', ',')}
        </div>
      </div>

      <div className="flex flex-col h-full justify-between p-3 sm:p-4 lg:p-6 items-center">
        <div className="w-full flex flex-col justify-start">
          <h5 className="text-lg sm:text-xl lg:text-2xl font-bold text-center text-gray-800 leading-tight mb-2">
            {combo.name}
          </h5>
          {/* Description hidden on mobile */}
          <p className="hidden sm:block text-center text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
            {combo.description}
          </p>
        </div>
        <div className="w-full flex justify-center mt-auto">
          <Button
            onClick={handleAddToCart}
            className="w-full h-11 sm:h-13 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 sm:py-4 px-3 text-xs sm:text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="hidden sm:inline">ADICIONAR AO CARRINHO</span>
            <span className="sm:hidden">ADICIONAR</span>
          </Button>
        </div>
      </div>
    </Card>
    
    <FlavorSelectionModal
      isOpen={isFlavorModalOpen}
      onClose={() => setIsFlavorModalOpen(false)}
      combo={combo}
      onConfirm={handleFlavorConfirm}
    />
    </>
  );
};

export default ComboCard;