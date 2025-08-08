import React from 'react';
import { Button, Badge } from 'flowbite-react';
import { HiShoppingCart } from 'react-icons/hi2';
import { useCart } from '../contexts/CartContext';

interface HeaderProps {
  onOpenFAQ: () => void;
  onOpenCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenCart }) => {
  const { itemCount } = useCart();

  return (
    <header className="bg-white from-orange-100 to-red-500 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 py-4">
          <div className="flex-shrink-0 flex items-center space-x-3">
            <img 
              src="/images/logotipo.png" 
              alt="Gulla Gulla Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-3xl font-bold text-yellow-300 tracking-tight">
                Gulla Gulla
              </h1>
              <p className="text-sm font-medium text-black">
                Fábrica de Salgados & Bolos
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={onOpenCart}
              className="relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-lg border-0"
              size="sm"
            >
              <HiShoppingCart className="w-5 h-5 mr-2" />
              CARRINHO
              {itemCount > 0 && (
                <Badge
                  color="failure"
                  className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center text-xs font-bold bg-red-600 text-white rounded-full"
                >
                  {itemCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;