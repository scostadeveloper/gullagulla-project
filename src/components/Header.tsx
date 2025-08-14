import React from 'react';
import { Button, Badge } from 'flowbite-react';
import { HiShoppingCart } from 'react-icons/hi2';
import { useCart } from '../contexts/CartContext';

interface HeaderProps {
  onOpenCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenCart }) => {
  const { itemCount } = useCart();

  return (
    <header className="bg-white from-orange-100 to-red-500 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 py-2 sm:py-4">
          <div className="flex-shrink-0 flex items-center space-x-2 sm:space-x-3">
            <img 
              src="/images/logotipo.png" 
              alt="Gulla Gulla Logo" 
              className="h-8 sm:h-10 lg:h-12 w-auto"
            />
            <div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-400 tracking-tight">
                <span style={{ fontFamily: "'Playwrite AU QLD', cursive" }}>Gulla Gulla</span>
              </h1>
              <p className="text-xs sm:text-sm font-medium text-black">
                Fábrica de Salgados
              </p>
            </div>
          </div>

          <div className="hidden xl:flex items-center space-x-8">
            <nav className="flex space-x-6 xl:space-x-8">
              <a 
                href="#combos" 
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
                aria-label="Ir para seção de combos"
              >
                Combos
              </a>
              <a 
                href="#localizacao" 
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
                aria-label="Ir para seção de localização"
              >
                Localização
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              onClick={onOpenCart}
              className="relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full font-bold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-lg border-0 text-xs sm:text-sm min-h-[44px] touch-manipulation"
              size="sm"
              aria-label={`Abrir carrinho de compras${itemCount > 0 ? ` (${itemCount} ${itemCount === 1 ? 'item' : 'itens'})` : ''}`}
              type="button"
            >
              <HiShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">CARRINHO</span>
              {itemCount > 0 && (
                <Badge
                  color="failure"
                  className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs font-bold bg-red-600 text-white rounded-full"
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