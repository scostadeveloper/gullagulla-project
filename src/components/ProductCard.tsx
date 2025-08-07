import React from 'react';
import { Card, Button } from 'flowbite-react';
import { HiShoppingCart, HiStar } from 'react-icons/hi2';
import type { Product } from '../types';
import { generateWhatsAppURL, formatPrice } from '../data/menuData';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleOrder = () => {
    const message = `Olá! Gostaria de pedir: ${product.name} (${product.description}) por ${formatPrice(product.price)}. Pode me ajudar? 😋`;
    window.open(generateWhatsAppURL(message), '_blank');
  };

  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case 'salgados-tradicionais':
        return '🥟';
      case 'salgados-especiais':
        return '⭐';
      case 'mini-churros':
        return '🍩';
      case 'bebidas':
        return '🥤';
      default:
        return '🍴';
    }
  };

  return (
    <Card className="bg-white shadow-lg max-w-sm mx-auto group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 rounded-2xl overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.image || '/images/hero.jpg'}
          alt={product.name}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Category badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          {getCategoryEmoji(product.category)}
        </div>

        {/* Price overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="text-center">
            <span className="text-white text-2xl font-bold">
              {formatPrice(product.price)}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h5 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
            {product.name}
          </h5>
          
          {product.description && (
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>
          )}
        </div>

        {/* Rating display */}
        <div className="flex items-center justify-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <HiStar key={i} className="w-4 h-4 text-yellow-400" />
          ))}
          <span className="text-sm text-gray-500 ml-2">4.8/5</span>
        </div>

        {/* Call to action button */}
        <Button
          onClick={handleOrder}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <HiShoppingCart className="w-5 h-5 mr-2" />
          PEDIR AGORA
        </Button>

        {/* Fresh indicator */}
        <div className="text-center">
          <span className="text-xs text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">
            ✨ Feito fresco no dia
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
