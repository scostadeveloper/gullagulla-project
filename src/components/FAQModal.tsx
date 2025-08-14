import React, { useEffect } from 'react';
import type { FAQ } from '../types';
import { useBackButton } from '../hooks/useBackButton';

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
  faqs: FAQ[];
}

const FAQModal: React.FC<FAQModalProps> = ({ isOpen, onClose, faqs }) => {
  // Hook para controlar o botão voltar no mobile
  useBackButton(isOpen, onClose, 1);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content" role="dialog" aria-labelledby="faq-title">
        <div className="modal-header">
          <h3 id="faq-title">Perguntas Frequentes</h3>
          <button 
            className="modal-close"
            onClick={onClose}
            aria-label="Fechar modal"
          >
            ×
          </button>
        </div>
        
        <div className="modal-body">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h4 className="faq-question">{faq.question}</h4>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQModal;