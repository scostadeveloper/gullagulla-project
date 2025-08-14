import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { HiShoppingCart, HiXMark, HiPlus, HiMinus, HiTrash } from 'react-icons/hi2';
import { useCart } from '../contexts/CartContext';
import CheckoutModal from './CheckoutModal';
import { useBackButton } from '../hooks/useBackButton';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { items, total, updateQuantity, removeItem, getShippingCost, getGrandTotal } = useCart();
  
  // Hook para controlar o botão voltar no mobile (prioridade 2 - maior que FAQ)
  useBackButton(isOpen, onClose, 2);

  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  };

  return (
    <>
      {/* Cart Sidebar */}
      <div className={`fixed inset-y-0 right-0 w-96 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <h2 className="text-xl font-bold">Seu Carrinho</h2>
            <Button
              onClick={onClose}
              className="p-2 bg-transparent hover:bg-white/20 border-0 min-h-[44px] min-w-[44px] touch-manipulation"
              aria-label="Fechar carrinho"
              type="button"
            >
              <HiXMark className="w-5 h-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <HiShoppingCart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">Seu carrinho está vazio</p>
                <p className="text-sm text-gray-400 mt-2">Adicione alguns itens deliciosos!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 text-sm">{item.name}</h3>
                        <p className="text-xs text-gray-600 mt-1 line-clamp-2">{item.description}</p>
                        {item.selectedFlavors && item.selectedFlavors.length > 0 && (
                          <div className="mt-2">
                            <p className="text-xs text-gray-500 mb-1">Sabores:</p>
                            <div className="flex flex-wrap gap-1">
                              {item.selectedFlavors.map((flavor, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium"
                                >
                                  {flavor}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        <div className="flex items-center justify-between mt-3">
                          <span className="font-bold text-orange-600">{formatPrice(item.price)}</span>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="xs"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 bg-gray-200 hover:bg-gray-300 text-gray-700 border-0 min-h-[44px] min-w-[44px] touch-manipulation"
                              aria-label={`Diminuir quantidade de ${item.name}`}
                              type="button"
                            >
                              <HiMinus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center text-sm font-semibold" aria-label={`Quantidade: ${item.quantity}`}>{item.quantity}</span>
                            <Button
                              size="xs"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 bg-orange-500 hover:bg-orange-600 text-white border-0 min-h-[44px] min-w-[44px] touch-manipulation"
                              aria-label={`Aumentar quantidade de ${item.name}`}
                              type="button"
                            >
                              <HiPlus className="w-3 h-3" />
                            </Button>
                            <Button
                              size="xs"
                              onClick={() => removeItem(item.id)}
                              className="p-2 bg-red-500 hover:bg-red-600 text-white border-0 ml-2 min-h-[44px] min-w-[44px] touch-manipulation"
                              aria-label={`Remover ${item.name} do carrinho`}
                              type="button"
                            >
                              <HiTrash className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 bg-gray-50">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Frete:</span>
                  <span className={getShippingCost() === 0 ? 'text-green-600 font-semibold' : ''}>
                    {getShippingCost() === 0 ? 'GRÁTIS' : formatPrice(getShippingCost())}
                  </span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Total:</span>
                  <span className="text-orange-600">{formatPrice(getGrandTotal())}</span>
                </div>
              </div>
              
              {getShippingCost() > 0 && (
                <p className="text-xs text-center text-gray-600 mb-3">
                  Frete grátis em pedidos acima de R$ 50,00
                </p>
              )}

              <Button
                onClick={() => {
                  onClose();
                  setIsCheckoutOpen(true);
                }}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 rounded-lg border-0 min-h-[44px] touch-manipulation"
                aria-label="Finalizar pedido e ir para checkout"
                type="button"
              >
                FINALIZAR PEDIDO
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </>
  );
};

export default CartSidebar;
