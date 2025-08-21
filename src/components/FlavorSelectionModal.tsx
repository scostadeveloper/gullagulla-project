import React, { useState, useEffect, useRef } from "react";
// Ícone de seta para baixo (SVG simples)
// Ícone de seta para baixo (SVG simples)
const DownArrow = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="animate-bounce text-orange-400 mx-auto"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
import { HiMinus, HiPlus, HiXMark } from "react-icons/hi2";
import type { Combo, FlavorQuantity } from "../types";
import { useBackButton } from "../hooks/useBackButton";

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
  const [flavorQuantities, setFlavorQuantities] = useState<FlavorQuantity[]>(
    []
  );
  const [showArrow, setShowArrow] = useState(false);
  // Refs para inputs de quantidade (deve estar dentro do componente)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  // Exibir seta se houver rolagem possível e não está no final
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const checkScroll = () => {
      // Mostrar seta se pode rolar e não está no final
      setShowArrow(
        el.scrollHeight > el.clientHeight &&
          el.scrollTop + el.clientHeight < el.scrollHeight - 8
      );
    };
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [flavorQuantities, combo]);

  // Hook para controlar o botão voltar no mobile (prioridade 4 - maior que checkout)
  useBackButton(isOpen, onClose, 4);

  // Parse quantities from combo
  const parseComboQuantities = (combo: Combo) => {
    const quantities: FlavorQuantity[] = [];

    // Mapeamento específico de combos com suas quantidades corretas
    const comboQuantities: { [key: string]: { [category: string]: number } } = {
      "salgados-pasteis-churros-refri": {
        salgados: 30,
        pastéis: 10,
        churros: 20,
        refrigerante: 1,
      },
      "100-salgadinhos": { salgados: 100 },
      "50-salgadinhos": { salgados: 50 },
      "50-mini-churros": { churros: 50 },
      "20-mini-pasteis": { pastéis: 20 },
      "50-salgadinhos-10-pasteis": { salgados: 50, pastéis: 10 },
      "60-salgados-refri": { salgados: 60, refrigerante: 1 },
      "100-salgados-refri": { salgados: 100, refrigerante: 1 },
      "50-salgadinhos-15-pasteis-30-churros": {
        salgados: 50,
        pastéis: 15,
        churros: 30,
      },
      "50-salgadinhos-20-pasteis-refri": {
        salgados: 50,
        pastéis: 20,
        refrigerante: 1,
      },
      "120-salgados-refri": { salgados: 120, refrigerante: 1 },
      "mega-100-salgados-20-pasteis-50-churros-coca2l": {
        salgados: 100,
        pastéis: 20,
        churros: 50,
        refrigerante: 1,
      },
      "250-salgados-coca2l": { salgados: 250, refrigerante: 1 },
      "50-pasteis-refri": { pastéis: 50, refrigerante: 1 },
    };

    // Obter quantidades específicas do combo
    const comboQty = comboQuantities[combo.id] || {};

    // Fallback: extrair quantidades do nome/descrição se não estiver no mapeamento
    if (Object.keys(comboQty).length === 0) {
      const extractQuantity = (text: string, patterns: RegExp[]) => {
        for (const pattern of patterns) {
          const match = text.match(pattern);
          if (match) {
            return parseInt(match[1]);
          }
        }
        return 0;
      };

      const comboText = `${combo.name} ${combo.description}`.toLowerCase();

      const salgadosPatterns = [/(\d+)\s*salgad/i, /(\d+)\s*salgad/i];
      const pasteisPatterns = [/(\d+)\s*past[éeê]/i, /(\d+)\s*mini\s*past/i];
      const churrosPatterns = [/(\d+)\s*churros/i, /(\d+)\s*mini\s*churros/i];

      comboQty.salgados = extractQuantity(comboText, salgadosPatterns);
      comboQty.pastéis = extractQuantity(comboText, pasteisPatterns);
      comboQty.churros = extractQuantity(comboText, churrosPatterns);

      // Se tem refrigerante no nome/descrição
      if (
        comboText.includes("refrigerante") ||
        comboText.includes("coca") ||
        comboText.includes("guaraná")
      ) {
        comboQty.refrigerante = 1;
      }
    }

    // Create flavor quantities based on available flavors
    combo.flavors?.forEach((flavor) => {
      if (flavor === "Variados") return; // Skip "Variados" option

      let category = "";
      let maxQuantity = 0;

      if (flavor.startsWith("Salgados:")) {
        category = "salgados";
        maxQuantity = comboQty.salgados || 0;
      } else if (flavor.startsWith("Pastéis:")) {
        category = "pastéis";
        maxQuantity = comboQty.pastéis || 0;
      } else if (flavor.startsWith("Churros:")) {
        category = "churros";
        maxQuantity = comboQty.churros || 0;
      } else if (flavor.startsWith("Refrigerante:")) {
        category = "refrigerante";
        maxQuantity = comboQty.refrigerante || 0;
      } else {
        // Para itens simples sem prefixo de categoria
        if (combo.name.toLowerCase().includes("churros")) {
          category = "churros";
          maxQuantity = comboQty.churros || 50;
        } else if (combo.name.toLowerCase().includes("salgad")) {
          category = "salgados";
          maxQuantity = comboQty.salgados || 50;
        } else if (combo.name.toLowerCase().includes("past")) {
          category = "pastéis";
          maxQuantity = comboQty.pastéis || 20;
        }
      }

      if (maxQuantity > 0) {
        quantities.push({
          flavor: flavor.replace(/^[^:]+:\s*/, ""), // Remove category prefix
          category,
          quantity: 0,
          maxQuantity,
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
    setFlavorQuantities((prev) => {
      const updated = [...prev];
      const item = updated[index];

      // Não permitir valores negativos
      if (newQuantity < 0) return prev;

      // Calculate total for this category (excluding current item)
      const categoryTotal = updated
        .filter((f, i) => f.category === item.category && i !== index)
        .reduce((sum, f) => sum + f.quantity, 0);

      // Get max quantity for this category (should be the same for all items in category)
      const maxForCategory = updated
        .filter((f) => f.category === item.category)
        .reduce((max, f) => Math.max(max, f.maxQuantity), 0);

      // Calculate how much we can still add to this category
      const availableQuantity = maxForCategory - categoryTotal;

      // The final quantity cannot exceed:
      // 1. The available quantity for the category
      // 2. The individual item's max quantity (which should be same as category max)
      const finalQuantity = Math.min(newQuantity, availableQuantity);

      // Only update if the quantity is valid
      if (finalQuantity >= 0) {
        updated[index].quantity = finalQuantity;
      }

      return updated;
    });
  };

  const getTotalByCategory = (category: string) => {
    return flavorQuantities
      .filter((f) => f.category === category)
      .reduce((sum, f) => sum + f.quantity, 0);
  };

  const getMaxByCategory = (category: string) => {
    return flavorQuantities
      .filter((f) => f.category === category)
      .reduce((max, f) => Math.max(max, f.maxQuantity), 0);
  };

  const handleConfirm = () => {
    const selectedFlavors = flavorQuantities.filter((f) => f.quantity > 0);

    if (selectedFlavors.length === 0) {
      alert("Por favor, selecione pelo menos um sabor!");
      return;
    }

    // Verificar se todas as categorias obrigatórias foram preenchidas corretamente
    const categories = [...new Set(flavorQuantities.map((f) => f.category))];
    const incompleteCategories: string[] = [];

    categories.forEach((category) => {
      const total = getTotalByCategory(category);
      const max = getMaxByCategory(category);

      if (total !== max && max > 0) {
        const categoryNames: { [key: string]: string } = {
          salgados: "Salgados",
          pastéis: "Pastéis",
          churros: "Churros",
          refrigerante: "Refrigerante",
        };
        incompleteCategories.push(categoryNames[category] || category);
      }
    });

    if (incompleteCategories.length > 0) {
      alert(
        `Por favor, complete a seleção para: ${incompleteCategories.join(
          ", "
        )}. Você deve selecionar a quantidade exata de cada categoria.`
      );
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
    setFlavorQuantities((prev) => {
      const updated = [...prev];
      const categories = [...new Set(updated.map((f) => f.category))];

      categories.forEach((category) => {
        const categoryItems = updated.filter((f) => f.category === category);
        const maxForCategory = getMaxByCategory(category);
        const quantityPerItem = Math.floor(
          maxForCategory / categoryItems.length
        );
        const remainder = maxForCategory % categoryItems.length;

        categoryItems.forEach((item, index) => {
          item.quantity = quantityPerItem + (index < remainder ? 1 : 0);
        });
      });

      return updated;
    });
  };

  if (!isOpen) return null;

  const categories = [...new Set(flavorQuantities.map((f) => f.category))];

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-sm">
      <div
        className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-2xl mx-auto my-0 sm:my-auto flex flex-col h-[90dvh] sm:h-auto max-h-[95dvh] overflow-hidden relative z-[10000]"
        style={{
          // Para iOS Safari e Android Chrome, garantir altura máxima e rolagem adequada
          touchAction: "manipulation",
        }}
      >
        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 sm:p-6 text-white rounded-t-2xl sm:rounded-t-2xl">
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

        <div
          ref={scrollRef}
          className="p-4 sm:p-6 flex-1 min-h-0 overflow-y-auto max-h-[55dvh] sm:max-h-[calc(70vh-200px)] relative"
        >
          {/* Seta para baixo indicando mais conteúdo (posicionada acima do rodapé) - renderizada abaixo do conteúdo, antes do footer */}
          <div className="mb-6">
            <h3 className="font-bold text-xl text-gray-800 mb-2">
              {combo.name}
            </h3>
            <p className="text-gray-600 text-sm">
              R$ {combo.price.toFixed(2).replace(".", ",")}
            </p>
          </div>

          {categories.map((category) => {
            const categoryItems = flavorQuantities.filter(
              (f) => f.category === category
            );
            const total = getTotalByCategory(category);
            const max = getMaxByCategory(category);

            const categoryNames: { [key: string]: string } = {
              salgados: "Salgados",
              pastéis: "Pastéis",
              churros: "Churros",
              refrigerante: "Refrigerante",
            };

            return (
              <div key={category} className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-800 capitalize">
                    {categoryNames[category] || category}
                  </h4>
                  <div className="flex items-center space-x-2">
                    <div className="text-sm">
                      <span
                        className={`font-medium ${
                          total === max
                            ? "text-green-600"
                            : total > max
                            ? "text-red-600"
                            : "text-orange-600"
                        }`}
                      >
                        {total}
                      </span>
                      <span className="text-gray-500">/{max}</span>
                    </div>
                    {total === max && (
                      <span className="text-green-600 text-sm">✓</span>
                    )}
                    {total > max && (
                      <span className="text-red-600 text-sm">⚠️</span>
                    )}
                  </div>
                </div>

                {/* Barra de progresso */}
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        total === max
                          ? "bg-green-500"
                          : total > max
                          ? "bg-red-500"
                          : "bg-orange-500"
                      }`}
                      style={{
                        width: `${Math.min((total / max) * 100, 100)}%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {total === max
                      ? "Seleção completa!"
                      : total > max
                      ? "Quantidade excedida!"
                      : `Selecione mais ${max - total} ${
                          max - total === 1 ? "item" : "itens"
                        }`}
                  </p>
                </div>

                <div className="grid gap-3">
                  {categoryItems.map((item) => {
                    const globalIndex = flavorQuantities.indexOf(item);
                    const canIncrease =
                      item.quantity < item.maxQuantity && total < max;
                    // Cria refs para cada input
                    if (!inputRefs.current[globalIndex])
                      inputRefs.current[globalIndex] = null;
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
                            onClick={() =>
                              updateQuantity(globalIndex, item.quantity - 1)
                            }
                            disabled={item.quantity === 0}
                            className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 disabled:bg-gray-100 disabled:text-gray-400 flex items-center justify-center hover:bg-orange-200 transition-colors"
                          >
                            <HiMinus className="w-4 h-4" />
                          </button>
                          <input
                            ref={(el) => {
                              inputRefs.current[globalIndex] = el || null;
                            }}
                            type="number"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={item.quantity}
                            onFocus={(e) => {
                              // Se o valor atual for 0, limpa o campo para facilitar a digitação
                              if (item.quantity === 0) {
                                e.target.value = "";
                              }
                              // Scrolla o input para o centro da área de rolagem
                              setTimeout(() => {
                                e.target.scrollIntoView({
                                  behavior: "smooth",
                                  block: "center",
                                });
                              }, 100);
                            }}
                            onChange={(e) => {
                              let val = parseInt(e.target.value, 10);
                              if (isNaN(val)) val = 0;
                              val = Math.max(
                                0,
                                Math.min(
                                  val,
                                  item.maxQuantity,
                                  max - total + item.quantity
                                )
                              );
                              updateQuantity(globalIndex, val);
                            }}
                            onKeyDown={(e) => {
                              // Ao pressionar Enter ou "Ir", remove o foco do campo para fechar o teclado
                              if (e.key === "Enter") {
                                e.preventDefault();
                                e.currentTarget.blur();
                              }
                            }}
                            className="w-12 text-center font-semibold text-lg text-black bg-transparent border-none focus:ring-2 focus:ring-orange-300 focus:outline-none appearance-none"
                            aria-label={`Quantidade de ${item.flavor}`}
                          />
                          <button
                            onClick={() =>
                              updateQuantity(globalIndex, item.quantity + 1)
                            }
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

        <div className="border-t bg-gray-50 p-4 sm:p-6 sticky bottom-0 left-0 right-0 z-10">
          {/* Setinha centralizada acima do resumo (visível quando houver overflow) */}
          {showArrow && (
            <div className="w-full flex justify-center mb-2 pointer-events-none">
              <div
                className="rounded-full bg-transparent flex items-center justify-center"
                style={{ width: 38, height: 38 }}
              >
                <DownArrow />
              </div>
            </div>
          )}
          {/* Resumo da seleção */}
          <div className="mb-4 p-3 bg-white rounded-lg border">
            <h5 className="font-medium text-gray-800 mb-2">
              Resumo da seleção:
            </h5>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {categories.map((category) => {
                const total = getTotalByCategory(category);
                const max = getMaxByCategory(category);
                const categoryNames: { [key: string]: string } = {
                  salgados: "Salgados",
                  pastéis: "Pastéis",
                  churros: "Churros",
                  refrigerante: "Refrigerante",
                };

                return (
                  <div
                    key={category}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-600">
                      {categoryNames[category] || category}:
                    </span>
                    <span
                      className={`font-medium ${
                        total === max
                          ? "text-green-600"
                          : total > max
                          ? "text-red-600"
                          : "text-orange-600"
                      }`}
                    >
                      {total}/{max}
                      {total === max && " ✓"}
                      {total > max && " ⚠️"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-100 transition-colors font-medium"
            >
              Cancelar
            </button>
            <button
              onClick={handleConfirm}
              disabled={
                flavorQuantities.every((f) => f.quantity === 0) ||
                categories.some((category) => {
                  const total = getTotalByCategory(category);
                  const max = getMaxByCategory(category);
                  return total !== max;
                })
              }
              className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all font-medium shadow-lg"
            >
              {categories.every((category) => {
                const total = getTotalByCategory(category);
                const max = getMaxByCategory(category);
                return total === max;
              })
                ? "Adicionar ao Carrinho ✓"
                : "Complete a seleção"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlavorSelectionModal;
