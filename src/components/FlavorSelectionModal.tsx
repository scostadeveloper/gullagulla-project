import React, { useState } from 'react';
import { HiCheck, HiXMark } from 'react-icons/hi2';
import type { Combo } from '../types';

interface FlavorSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  combo: Combo;
  onConfirm: (selectedFlavors: string[]) => void;
}

const FlavorSelectionModal: React.FC<FlavorSelectionModalProps> = ({
  isOpen,
  onClose,
  combo,
  onConfirm,
}) => {
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);

  const handleFlavorToggle = (flavor: string) => {
    setSelectedFlavors(prev => {
      if (flavor === 'Variados') {
        // Se clicou em "Variados"
        if (prev.includes('Variados')) {
          // Se "Variados" já estava selecionado, remove apenas ele
          return prev.filter(f => f !== 'Variados');
        } else {
          // Se "Variados" não estava selecionado, seleciona apenas ele
          return ['Variados'];
        }
      } else {
        // Se clicou em outro sabor (não "Variados")
        if (prev.includes('Variados')) {
          // Se "Variados" estava selecionado, remove "Variados" e adiciona o novo sabor
          return [flavor];
        } else {
          // Comportamento normal: adiciona ou remove o sabor
          if (prev.includes(flavor)) {
            return prev.filter(f => f !== flavor);
          } else {
            return [...prev, flavor];
          }
        }
      }
    });
  };

  const handleConfirm = () => {
    if (selectedFlavors.length === 0) {
      alert('Por favor, selecione pelo menos um sabor!');
      return;
    }
    onConfirm(selectedFlavors);
    setSelectedFlavors([]);
    onClose();
  };

  const handleClose = () => {
    setSelectedFlavors([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto relative z-[10000]">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              Escolha os sabores
            </h2>
            <button 
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              <HiXMark />
            </button>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {combo.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Selecione os sabores que você deseja:
            </p>
            <p className="text-xs text-orange-600 mb-4 font-medium">
              💡 Dica: "Variados" substitui todos os outros sabores por uma mistura
            </p>
          </div>

          <div className="space-y-2 mb-6">
            {combo.flavors?.map((flavor) => (
              <div
                key={flavor}
                onClick={() => handleFlavorToggle(flavor)}
                className={`
                  flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all duration-200
                  ${flavor === 'Variados' 
                    ? selectedFlavors.includes(flavor)
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-purple-200 hover:border-purple-300 bg-purple-5'
                    : selectedFlavors.includes(flavor)
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-orange-300'
                  }
                `}
              >
                <div className="flex items-center space-x-2">
                  {flavor === 'Variados' && <span className="text-purple-600">🎯</span>}
                  <span className={`font-medium ${flavor === 'Variados' ? 'text-purple-800' : 'text-gray-800'}`}>
                    {flavor}
                  </span>
                </div>
                {selectedFlavors.includes(flavor) && (
                  <HiCheck className={`w-5 h-5 ${flavor === 'Variados' ? 'text-purple-500' : 'text-orange-500'}`} />
                )}
              </div>
            ))}
          </div>

          {selectedFlavors.length > 0 && (
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">
                Sabores selecionados ({selectedFlavors.length}):
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedFlavors.map((flavor) => (
                  <span
                    key={flavor}
                    className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium"
                  >
                    {flavor}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex space-x-3">
            <button
              onClick={handleClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Cancelar
            </button>
            <button
              onClick={handleConfirm}
              disabled={selectedFlavors.length === 0}
              className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
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
