import { useEffect, useRef } from 'react';

/**
 * Hook personalizado para gerenciar o comportamento do botão voltar no mobile
 * Permite fechar modais antes de navegar para a página anterior
 */
export const useBackButton = (
  isOpen: boolean,
  onClose: () => void,
  priority: number = 0 // Prioridade para múltiplos modais (maior número = maior prioridade)
) => {
  const historyStateRef = useRef<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Criar um estado único para este modal
      const modalId = `modal-${Date.now()}-${Math.random()}`;
      historyStateRef.current = modalId;
      
      // Adicionar entrada no histórico quando o modal abrir
      window.history.pushState(
        { modalId, priority },
        '',
        window.location.href
      );

      // Listener para o evento popstate (botão voltar)
      const handlePopState = (event: PopStateEvent) => {
        const state = event.state;
        
        // Se o estado atual não corresponde ao modal ou não há estado
        if (!state || state.modalId !== modalId) {
          // Fechar o modal
          onClose();
          
          // Prevenir navegação adicional se necessário
          if (state && state.modalId && state.priority < priority) {
            // Se há outro modal com prioridade menor, manter na página
            window.history.pushState(state, '', window.location.href);
          }
        }
      };

      window.addEventListener('popstate', handlePopState);

      // Cleanup
      return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    } else {
      // Quando o modal fechar, remover do histórico se ainda estiver lá
      if (historyStateRef.current && window.history.state?.modalId === historyStateRef.current) {
        window.history.back();
      }
      historyStateRef.current = null;
    }
  }, [isOpen, onClose, priority]);

  // Cleanup quando o componente for desmontado
  useEffect(() => {
    return () => {
      if (historyStateRef.current && window.history.state?.modalId === historyStateRef.current) {
        window.history.back();
      }
    };
  }, []);
};

export default useBackButton;