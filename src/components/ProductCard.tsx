import React from 'react';
import { Card, Button } from 'flowbite-react';
import type { Product } from '../types';
import { formatPrice } from '../data/menuData';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, 'product');
  };

  return (
    <Card className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl overflow-hidden h-full flex flex-col">
      <div className="relative overflow-hidden flex justify-center items-center">
        <img
          src={product.image || '/images/salgadinhos_com_refrigerante.jpg'}
          alt={product.name}
          className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-cover rounded-full shadow-md mt-4 sm:mt-6 mb-2 bg-white"
        />
        <div className="absolute top-1 sm:top-2 right-1 sm:right-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-2 sm:px-3 py-1 rounded-full font-bold text-xs sm:text-sm shadow-lg transform rotate-12">
          {formatPrice(product.price)}
        </div>
      </div>

      <div className="flex flex-col h-full justify-between p-3 sm:p-4 lg:p-6 items-center">
        <div className="w-full flex flex-col justify-start">
          <h5 className="text-lg sm:text-xl lg:text-2xl font-bold text-center text-gray-800 leading-tight mb-2">
            {product.name}
          </h5>
          {/* Description hidden on mobile for cleaner UX */}
          <p className="hidden sm:block text-center text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
            {product.description}
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
  );
};

export default ProductCard;
