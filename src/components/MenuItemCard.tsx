import React, { useState } from 'react';
import { HiFire, HiGift } from 'react-icons/hi2';
import type { Product, Combo, FlavorQuantity } from '../types';
import { formatPrice } from '../data/menuData';
import { useCart } from '../contexts/CartContext';
import FlavorSelectionModal from './FlavorSelectionModal';

interface MenuItemCardProps {
  item: Product | Combo;
  type: 'product' | 'combo';
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, type }) => {
  const { addItem } = useCart();
  const [isFlavorModalOpen, setIsFlavorModalOpen] = useState(false);

  const isCombo = type === 'combo';
  const combo = isCombo ? (item as Combo) : null;
  const product = !isCombo ? (item as Product) : null;

  const handleAddToCart = () => {
    if (isCombo && combo?.requiresFlavors && combo?.flavors) {
      setIsFlavorModalOpen(true);
    } else {
      addItem(item, type);
    }
  };

  const handleFlavorConfirm = (selectedFlavors: FlavorQuantity[]) => {
    if (combo) {
      // Convert FlavorQuantity[] to string[] format for cart
      const flavorStrings = selectedFlavors.map(f => 
        `${f.quantity}x ${f.flavor}`
      );
      addItem(combo, 'combo', flavorStrings);
    }
  };

  const getImageSrc = () => {
    if (isCombo) {
      return combo?.image || '/images/salgadinhos_com_refrigerante.jpg';
    }
    return product?.image || '/images/salgadinhos_com_refrigerante.jpg';
  };

  const getPrice = () => {
    if (isCombo) {
      return `R$ ${combo?.price.toFixed(2).replace('.', ',')}`;
    }
    return formatPrice(product?.price || 0);
  };

  return (
    <>
      <div className="group relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
        {/* Badges para highlights */}
        {isCombo && combo?.highlight && (
          <div className="absolute top-2 right-2 z-10">
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
              <HiFire className="w-3 h-3" />
              TOP
            </span>
          </div>
        )}
        
        {isCombo && combo?.savings && (
          <div className="absolute top-2 left-2 z-10">
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
              <HiGift className="w-3 h-3" />
              {combo.savings}
            </span>
          </div>
        )}

        {/* Container da imagem */}
        <div className="relative h-32 sm:h-36 bg-gray-50 flex items-center justify-center p-3">
          <img
            src={getImageSrc()}
            alt={item.name}
            className="w-full h-full object-contain"
            loading="lazy"
            decoding="async"
          />
          {/* Badge de preço */}
          <div className="absolute bottom-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-lg font-bold text-sm shadow-lg">
            {getPrice()}
          </div>
        </div>

        {/* Conteúdo do card */}
        <div className="p-3 sm:p-4 flex flex-col flex-grow">
          <h3 className="font-bold text-gray-800 text-sm sm:text-base leading-tight line-clamp-2 mb-2">
            {item.name}
          </h3>
          <p className="text-gray-600 text-xs leading-relaxed line-clamp-2 flex-grow">
            {item.description}
          </p>
          
          {/* Botão de adicionar - sempre no final */}
          <button
            onClick={handleAddToCart}
            className="w-full mt-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-4 rounded-lg text-sm transition-all duration-200 hover:shadow-md active:scale-95 min-h-[44px] touch-manipulation"
            aria-label={`Adicionar ${item.name} ao carrinho`}
            type="button"
          >
            <span className="hidden sm:inline">Adicionar</span>
            <span className="sm:hidden">+</span>
          </button>
        </div>
      </div>
      
      {/* Modal de seleção de sabores apenas para combos */}
      {isCombo && combo && (
        <FlavorSelectionModal
          isOpen={isFlavorModalOpen}
          onClose={() => setIsFlavorModalOpen(false)}
          combo={combo}
          onConfirm={handleFlavorConfirm}
        />
      )}
    </>
  );
};

export default MenuItemCard;

// Componentes de conveniência para manter compatibilidade
export const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <MenuItemCard item={product} type="product" />
);

export const ComboCard: React.FC<{ combo: Combo }> = ({ combo }) => (
  <MenuItemCard item={combo} type="combo" />
);