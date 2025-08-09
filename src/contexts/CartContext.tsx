import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { CartItem, Combo, Product } from '../types';

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

interface CartContextType extends CartState {
  addItem: (item: Combo | Product, type: 'combo' | 'product', selectedFlavors?: string[]) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getShippingCost: (deliveryType?: 'delivery' | 'pickup') => number;
  getGrandTotal: (deliveryType?: 'delivery' | 'pickup') => number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { item: Combo | Product; itemType: 'combo' | 'product'; selectedFlavors?: string[] } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { item, itemType, selectedFlavors } = action.payload;
      
      // Criar ID único baseado no item e sabores selecionados
      const uniqueId = selectedFlavors && selectedFlavors.length > 0 
        ? `${item.id}-${selectedFlavors.sort().join('-').toLowerCase().replace(/\s+/g, '')}`
        : item.id;
      
      const existingItem = state.items.find(cartItem => cartItem.id === uniqueId);
      
      let newItems: CartItem[];
      if (existingItem) {
        newItems = state.items.map(cartItem =>
          cartItem.id === uniqueId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        const newCartItem: CartItem = {
          id: uniqueId,
          name: item.name,
          description: item.description,
          price: item.price,
          image: item.image,
          quantity: 1,
          type: itemType,
          selectedFlavors: selectedFlavors
        };
        newItems = [...state.items, newCartItem];
      }
      
      const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);
      
      return { items: newItems, total, itemCount };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);
      
      return { items: newItems, total, itemCount };
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: id });
      }
      
      const newItems = state.items.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
      const total = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0);
      
      return { items: newItems, total, itemCount };
    }

    case 'CLEAR_CART':
      return { items: [], total: 0, itemCount: 0 };

    case 'LOAD_CART': {
      const items = action.payload;
      const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
      
      return { items, total, itemCount };
    }

    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    itemCount: 0
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('gullagulla-cart');
    if (savedCart) {
      try {
        const cartItems = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: cartItems });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('gullagulla-cart', JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (item: Combo | Product, type: 'combo' | 'product', selectedFlavors?: string[]) => {
    dispatch({ type: 'ADD_ITEM', payload: { item, itemType: type, selectedFlavors } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getShippingCost = (deliveryType: 'delivery' | 'pickup' = 'delivery'): number => {
    // Retirada na loja é sempre grátis
    if (deliveryType === 'pickup') return 0;
    
    // Frete grátis acima de R$ 50
    return state.total >= 50 ? 0 : 5;
  };

  const getGrandTotal = (deliveryType: 'delivery' | 'pickup' = 'delivery'): number => {
    return state.total + getShippingCost(deliveryType);
  };

  const contextValue: CartContextType = {
    ...state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getShippingCost,
    getGrandTotal
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
