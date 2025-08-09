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
          className="w-40 h-40 object-cover rounded-full shadow-md mt-6 mb-2 bg-white"
        />
        <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 py-1 rounded-full font-bold text-sm shadow-lg transform rotate-12">
          {formatPrice(product.price)}
        </div>
      </div>

      <div className="flex flex-col h-full justify-between p-6 items-center">
        <div className="w-full flex flex-col justify-start">
          <h5 className="text-2xl font-bold text-center text-gray-800 leading-tight mb-2">
            {product.name}
          </h5>
          <p className="text-center text-gray-600 leading-relaxed mb-4">
            {product.description}
          </p>
        </div>
        <div className="w-full flex justify-center mt-auto">
          <Button
            onClick={handleAddToCart}
            className="w-full h-13 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-3 text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            ADICIONAR AO CARRINHO
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
