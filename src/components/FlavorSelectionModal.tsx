import React, { useState, useEffect } from 'react';
import { HiMinus, HiPlus, HiXMark } from 'react-icons/hi2';
import type { Combo, FlavorQuantity } from '../types';

interface FlavorSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  combo: Combo;
  onConfirm: (selectedFlavors: FlavorQuantity[]) => void;
}

const FlavorSelectionModal: React.FC<FlavorSelectionModalProps> = ({
  isOpen,
  onClose,
  combo,
  onConfirm,
}) => {
  const [flavorQuantities, setFlavorQuantities] = useState<FlavorQuantity[]>([]);

  // Parse quantities from combo
  const parseComboQuantities = (combo: Combo) => {
    const quantities: FlavorQuantity[] = [];
    
    // Extract quantities from combo name/description
    const extractQuantity = (text: string, category: string) => {
      const patterns = [
        { regex: /(\d+)\s*salgad/i, category: 'salgados' },
        { regex: /(\d+)\s*past[éeê]/i, category: 'pastéis' },
        { regex: /(\d+)\s*churros/i, category: 'churros' },
      ];
      
      for (const pattern of patterns) {
        if (pattern.category === category) {
          const match = text.match(pattern.regex);
          if (match) {
            return parseInt(match[1]);
          }
        }
      }
      return 0;
    };

    const comboText = `${combo.name} ${combo.description}`;
    const salgadosQty = extractQuantity(comboText, 'salgados');
    const pasteisQty = extractQuantity(comboText, 'pastéis');
    const churrosQty = extractQuantity(comboText, 'churros');

    // Create flavor quantities based on available flavors
    combo.flavors?.forEach(flavor => {
      if (flavor === 'Variados') return; // Skip "Variados" option

      let category = '';
      let maxQuantity = 0;

      if (flavor.startsWith('Salgados:')) {
        category = 'salgados';
        maxQuantity = salgadosQty;
      } else if (flavor.startsWith('Pastéis:')) {
        category = 'pastéis';
        maxQuantity = pasteisQty;
      } else if (flavor.startsWith('Churros:')) {
        category = 'churros';
        maxQuantity = churrosQty;
      } else if (flavor.startsWith('Refrigerante:')) {
        category = 'refrigerante';
        maxQuantity = 1; // Only one drink per combo
      } else {
        // For simple items like "50 Mini Churros"
        if (combo.name.includes('Churros')) {
          category = 'churros';
          maxQuantity = extractQuantity(combo.name, 'churros') || 50;
        } else if (combo.name.includes('Salgad')) {
          category = 'salgados';
          maxQuantity = extractQuantity(combo.name, 'salgados') || 50;
        } else if (combo.name.includes('Past')) {
          category = 'pastéis';
          maxQuantity = extractQuantity(combo.name, 'pastéis') || 50;
        }
      }

      if (maxQuantity > 0) {
        quantities.push({
          flavor: flavor.replace(/^[^:]+:\s*/, ''), // Remove category prefix
          category,
          quantity: 0,
          maxQuantity
        });
      }
    });

    return quantities;
  };

  useEffect(() => {
    if (isOpen) {
      setFlavorQuantities(parseComboQuantities(combo));
    }
  }, [isOpen, combo]);

  const updateQuantity = (index: number, newQuantity: number) => {
    setFlavorQuantities(prev => {
      const updated = [...prev];
      const item = updated[index];
      
      // Calculate total for this category
      const categoryTotal = updated
        .filter(f => f.category === item.category && updated.indexOf(f) !== index)
        .reduce((sum, f) => sum + f.quantity, 0);
      
      // Get max quantity for this category
      const maxForCategory = updated
        .filter(f => f.category === item.category)
        .reduce((max, f) => Math.max(max, f.maxQuantity), 0);
      
      // Ensure we don't exceed category limit
      const availableQuantity = maxForCategory - categoryTotal;
      const finalQuantity = Math.min(Math.max(0, newQuantity), Math.min(availableQuantity, item.maxQuantity));
      
      updated[index].quantity = finalQuantity;
      return updated;
    });
  };

  const getTotalByCategory = (category: string) => {
    return flavorQuantities
      .filter(f => f.category === category)
      .reduce((sum, f) => sum + f.quantity, 0);
  };

  const getMaxByCategory = (category: string) => {
    return flavorQuantities
      .filter(f => f.category === category)
      .reduce((max, f) => Math.max(max, f.maxQuantity), 0);
  };

  const handleConfirm = () => {
    const selectedFlavors = flavorQuantities.filter(f => f.quantity > 0);
    
    if (selectedFlavors.length === 0) {
      alert('Por favor, selecione pelo menos um sabor!');
      return;
    }
    
    onConfirm(selectedFlavors);
    setFlavorQuantities([]);
    onClose();
  };

  const handleClose = () => {
    setFlavorQuantities([]);
    onClose();
  };

  const handleVariados = () => {
    // Set equal distribution for all flavors
    setFlavorQuantities(prev => {
      const updated = [...prev];
      const categories = [...new Set(updated.map(f => f.category))];
      
      categories.forEach(category => {
        const categoryItems = updated.filter(f => f.category === category);
        const maxForCategory = getMaxByCategory(category);
        const quantityPerItem = Math.floor(maxForCategory / categoryItems.length);
        const remainder = maxForCategory % categoryItems.length;
        
        categoryItems.forEach((item, index) => {
          item.quantity = quantityPerItem + (index < remainder ? 1 : 0);
        });
      });
      
      return updated;
    });
  };

  if (!isOpen) return null;

  const categories = [...new Set(flavorQuantities.map(f => f.category))];

  return (
    <div className="fixed inset-0 z-[9999] flex items-start sm:items-center justify-center p-2 sm:p-4 bg-black/50 backdrop-blur-sm pt-4 sm:pt-0">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[96vh] sm:max-h-[90vh] overflow-hidden relative z-[10000] mx-auto my-auto">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 sm:p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Personalize seu pedido
              </h2>
              <p className="text-orange-100 text-sm">
                Escolha a quantidade de cada sabor
              </p>
            </div>
            <button 
              onClick={handleClose}
              className="text-white hover:text-orange-200 text-2xl transition-colors"
            >
              <HiXMark />
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(96vh-200px)] sm:max-h-[calc(90vh-200px)]">
          <div className="mb-6">
            <h3 className="font-bold text-xl text-gray-800 mb-2">
              {combo.name}
            </h3>
            <p className="text-gray-600 text-sm">
              R$ {combo.price.toFixed(2).replace('.', ',')}
            </p>
          </div>

          {categories.map(category => {
            const categoryItems = flavorQuantities.filter(f => f.category === category);
            const total = getTotalByCategory(category);
            const max = getMaxByCategory(category);
            
            const categoryNames: { [key: string]: string } = {
              'salgados': 'Salgados',
              'pastéis': 'Pastéis', 
              'churros': 'Churros',
              'refrigerante': 'Refrigerante'
            };

            return (
              <div key={category} className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 capitalize">
                    {categoryNames[category] || category}
                  </h4>
                  <div className="text-sm">
                    <span className={`font-medium ${total === max ? 'text-green-600' : 'text-orange-600'}`}>
                      {total}
                    </span>
                    <span className="text-gray-500">
                      /{max}
                    </span>
                  </div>
                </div>
                
                <div className="grid gap-3">
                  {categoryItems.map((item) => {
                    const globalIndex = flavorQuantities.indexOf(item);
                    const canIncrease = item.quantity < item.maxQuantity && total < max;
                    
                    return (
                      <div
                        key={item.flavor}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-orange-300 transition-colors"
                      >
                        <div className="flex-1">
                          <span className="font-medium text-gray-800">
                            {item.flavor}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(globalIndex, item.quantity - 1)}
                            disabled={item.quantity === 0}
                            className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 disabled:bg-gray-100 disabled:text-gray-400 flex items-center justify-center hover:bg-orange-200 transition-colors"
                          >
                            <HiMinus className="w-4 h-4" />
                          </button>
                          
                          <span className="w-12 text-center font-semibold text-lg text-black">
                            {item.quantity}
                          </span>
                          
                          <button
                            onClick={() => updateQuantity(globalIndex, item.quantity + 1)}
                            disabled={!canIncrease}
                            className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 disabled:bg-gray-100 disabled:text-gray-400 flex items-center justify-center hover:bg-orange-200 transition-colors"
                          >
                            <HiPlus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="mb-6">
            <button
              onClick={handleVariados}
              className="w-full p-4 bg-purple-50 border-2 border-purple-200 rounded-xl hover:border-purple-400 transition-colors group"
            >
              <div className="flex items-center justify-center space-x-2">
                <span className="text-2xl">🎯</span>
                <div className="text-left">
                  <div className="font-semibold text-purple-800">
                    Distribuição Automática (Variados)
                  </div>
                  <div className="text-sm text-purple-600">
                    Distribui automaticamente os sabores
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="border-t bg-gray-50 p-4 sm:p-6">
          <div className="flex space-x-4">
            <button
              onClick={handleClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors font-medium"
            >
              Cancelar
            </button>
            <button
              onClick={handleConfirm}
              disabled={flavorQuantities.every(f => f.quantity === 0)}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all font-medium shadow-lg"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlavorSelectionModal;
