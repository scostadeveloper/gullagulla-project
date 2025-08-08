import React, { useState, useEffect } from 'react';
import { HiCreditCard, HiClipboard, HiCheck } from 'react-icons/hi2';
import { useCart } from '../contexts/CartContext';
import type { CustomerInfo, Order } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { items, total, getShippingCost, getGrandTotal, clearCart } = useCart();
  const [step, setStep] = useState<'info' | 'payment' | 'pix' | 'success'>('info');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'delivery' | 'credit' | 'debit' | 'pickup'>('pix');
  const [loading, setLoading] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);
  const [autoSendWhatsApp, setAutoSendWhatsApp] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');
  
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    phone: '',
    email: '',
    shipping: {
      cep: '',
      address: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: 'RJ'
    }
  });

  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);

  // useEffect para envio automático do WhatsApp após 5 segundos no step 'success'
  useEffect(() => {
    if (step === 'success' && currentOrder && autoSendWhatsApp && !messageSent) {
      const timer = setTimeout(() => {
        sendOrderToWhatsApp(currentOrder);
        setAutoSendWhatsApp(false);
        setMessageSent(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [step, currentOrder, autoSendWhatsApp, messageSent]);

  const formatPrice = (price: number) => `R$ ${price.toFixed(2).replace('.', ',')}`;

  const handleCustomerInfoChange = (field: string, value: string) => {
    if (field.startsWith('shipping.')) {
      const shippingField = field.replace('shipping.', '');
      setCustomerInfo(prev => ({
        ...prev,
        shipping: { ...prev.shipping, [shippingField]: value }
      }));
    } else {
      setCustomerInfo(prev => ({ ...prev, [field]: value }));
    }
  };

  const generatePixPayment = () => {
    // Em produção, isso seria uma integração real com gateway de pagamento
    const pixData = {
      qrCode: `00020126330014BR.GOV.BCB.PIX011136995827000520400005303986540${getGrandTotal().toFixed(2)}5802BR5925GULLA GULLA SALGADOS6009SAO PAULO62070503***6304`,
      copyPaste: `00020126330014BR.GOV.BCB.PIX011136995827000520400005303986540${getGrandTotal().toFixed(2)}5802BR5925GULLA GULLA SALGADOS6009SAO PAULO62070503***6304`,
      expiresAt: new Date(Date.now() + 30 * 60 * 1000).toISOString() // 30 minutos
    };
    
    return pixData;
  };

  const handleSubmitInfo = () => {
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.shipping.address) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    setStep('payment');
  };

  const handleSubmitPayment = async () => {
    setLoading(true);
    
    try {
      const orderId = `GG${Date.now()}`;
      const pixPayment = paymentMethod === 'pix' ? generatePixPayment() : undefined;
      
      const order: Order = {
        id: orderId,
        items,
        customer: customerInfo,
        total,
        shipping: getShippingCost(),
        grandTotal: getGrandTotal(),
        paymentMethod,
        status: 'pending',
        createdAt: new Date().toISOString(),
        pixPayment
      };
      
      // Salvar pedido no localStorage
      const orders = JSON.parse(localStorage.getItem('gullagulla-orders') || '[]');
      orders.push(order);
      localStorage.setItem('gullagulla-orders', JSON.stringify(orders));
      
      setCurrentOrder(order);
      
      if (paymentMethod === 'pix') {
        setStep('pix');
      } else {
        // Ir para tela de sucesso e enviar WhatsApp automaticamente
        setStep('success');
        setAutoSendWhatsApp(true);
        clearCart();
      }
    } catch (error) {
      alert('Erro ao processar pedido. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const sendOrderToWhatsApp = (order: Order) => {
    let message = `🛒 *NOVO PEDIDO - ${order.id}*\n\n`;
    message += `👤 *Cliente:* ${order.customer.name}\n`;
    message += `📱 *Telefone:* ${order.customer.phone}\n\n`;
    message += `📍 *Endereço:*\n${order.customer.shipping.address}\n`;
    if (order.customer.shipping.complement) {
      message += `${order.customer.shipping.complement}\n`;
    }
    message += `${order.customer.shipping.neighborhood}, ${order.customer.shipping.city} - ${order.customer.shipping.state}\n`;
    message += `CEP: ${order.customer.shipping.cep}\n\n`;
    message += `🍟 *Itens:*\n`;
    
    order.items.forEach(item => {
      message += `• ${item.quantity}x ${item.name} - ${formatPrice(item.price * item.quantity)}\n`;
    });
    
    message += `\n💰 *Resumo:*\n`;
    message += `Subtotal: ${formatPrice(order.total)}\n`;
    message += `Frete: ${order.shipping === 0 ? 'GRÁTIS' : formatPrice(order.shipping)}\n`;
    message += `*Total: ${formatPrice(order.grandTotal)}*\n\n`;
    message += `💳 *Pagamento:* ${order.paymentMethod === 'pix' ? 'PIX (Pago)' : 'Dinheiro na entrega'}\n\n`;
    message += `⏰ Pedido feito em: ${new Date(order.createdAt).toLocaleString('pt-BR')}`;
    
    const whatsappUrl = `https://wa.me/5521976958970?text=${encodeURIComponent(message)}`;
    
    // Estratégia multi-camada para contornar bloqueadores de popup
    try {
      // Tentativa 1: window.open normal
      const popup = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      
      // Verificar se foi bloqueado
      if (!popup || popup.closed || typeof popup.closed === 'undefined') {
        throw new Error('Popup bloqueado');
      }
      
      // Verificar novamente após um pequeno delay
      setTimeout(() => {
        if (popup.closed) {
          throw new Error('Popup foi fechado pelo bloqueador');
        }
      }, 100);
      
    } catch (error) {
      // Tentativa 2: Redirecionar na mesma aba
      try {
        window.location.href = whatsappUrl;
      } catch (redirectError) {
        // Tentativa 3: Criar link invisível e simular clique
        const link = document.createElement('a');
        link.href = whatsappUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.style.display = 'none';
        document.body.appendChild(link);
        
        // Simular clique do usuário
        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        
        link.dispatchEvent(clickEvent);
        document.body.removeChild(link);
        
        // Se ainda não funcionou, copiar para clipboard como fallback
        if (navigator.clipboard) {
          navigator.clipboard.writeText(whatsappUrl);
          alert('Link do WhatsApp copiado! Cole no seu navegador para enviar o pedido.');
        }
      }
    }
  };

  const copyPixCode = () => {
    if (currentOrder?.pixPayment?.copyPaste) {
      navigator.clipboard.writeText(currentOrder.pixPayment.copyPaste);
      setCopiedPix(true);
      setTimeout(() => setCopiedPix(false), 2000);
    }
  };

  const handlePixPaymentComplete = () => {
    if (currentOrder) {
      setStep('success');
      setAutoSendWhatsApp(true);
      clearCart();
    }
  };

  const resetModal = () => {
    setStep('info');
    setPaymentMethod('pix');
    setCustomerInfo({
      name: '',
      phone: '',
      email: '',
      shipping: {
        cep: '',
        address: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: 'RJ'
      }
    });
    setCurrentOrder(null);
    setCopiedPix(false);
    setMessageSent(false);
    setAutoSendWhatsApp(false);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 ">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-screen overflow-y-auto border border-gray-200">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">
                  {step === 'info' && 'Dados de Entrega'}
                  {step === 'payment' && 'Forma de Pagamento'}
                  {step === 'pix' && 'Pagamento PIX'}
                  {step === 'success' && 'Pedido Confirmado!'}
                </h2>
                <button 
                  onClick={resetModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
        {step === 'info' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
                <input
                  type="text"
                  id="name"
                  value={customerInfo.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCustomerInfoChange('name', e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone *</label>
                <input
                  type="tel"
                  id="phone"
                  value={customerInfo.phone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCustomerInfoChange('phone', e.target.value)}
                  placeholder="(21) 99999-9999"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
              <input
                type="email"
                id="email"
                value={customerInfo.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCustomerInfoChange('email', e.target.value)}
                placeholder="seu@email.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="cep" className="block text-sm font-medium text-gray-700 mb-1">CEP *</label>
                <input
                  type="text"
                  id="cep"
                  value={customerInfo.shipping.cep}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCustomerInfoChange('shipping.cep', e.target.value)}
                  placeholder="00000-000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Endereço *</label>
                <input
                  type="text"
                  id="address"
                  value={customerInfo.shipping.address}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCustomerInfoChange('shipping.address', e.target.value)}
                  placeholder="Rua, número"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="complement" className="block text-sm font-medium text-gray-700 mb-1">Complemento</label>
                <input
                  type="text"
                  id="complement"
                  value={customerInfo.shipping.complement}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCustomerInfoChange('shipping.complement', e.target.value)}
                  placeholder="Apto, casa, etc"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700 mb-1">Bairro *</label>
                <input
                  type="text"
                  id="neighborhood"
                  value={customerInfo.shipping.neighborhood}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCustomerInfoChange('shipping.neighborhood', e.target.value)}
                  placeholder="Seu bairro"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Cidade *</label>
                <input
                  type="text"
                  id="city"
                  value={customerInfo.shipping.city}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCustomerInfoChange('shipping.city', e.target.value)}
                  placeholder="Rio de Janeiro"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>
          </div>
        )}
        
        {step === 'payment' && (
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Resumo do Pedido</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete:</span>
                  <span>{getShippingCost() === 0 ? 'GRÁTIS' : formatPrice(getShippingCost())}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-1">
                  <span>Total:</span>
                  <span className="text-orange-600">{formatPrice(getGrandTotal())}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-700">Forma de Pagamento</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="pix"
                    name="payment"
                    value="pix"
                    checked={paymentMethod === 'pix'}
                    onChange={() => setPaymentMethod('pix')}
                    className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 focus:ring-2"
                  />
                  <label htmlFor="pix" className="text-sm font-medium text-gray-700">PIX (5% de desconto)</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="delivery"
                    name="payment"
                    value="delivery"
                    checked={paymentMethod === 'delivery'}
                    onChange={() => setPaymentMethod('delivery')}
                    className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 focus:ring-2"
                  />
                  <label htmlFor="delivery" className="text-sm font-medium text-gray-700">Dinheiro na entrega</label>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {step === 'pix' && currentOrder?.pixPayment && (
          <div className="space-y-6 text-center">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-800 mb-2">Pagamento PIX</h3>
              <p className="text-sm text-green-700">
                Escaneie o QR Code ou copie o código PIX abaixo
              </p>
            </div>
            
            <div className="bg-white p-6 border rounded-lg">
              <div className="w-48 h-48 bg-gray-200 mx-auto mb-4 flex items-center justify-center rounded-lg">
                <HiCreditCard className="w-16 h-16 text-gray-400" />
                <span className="text-xs text-gray-500 ml-2">QR Code PIX</span>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm font-semibold">Valor: {formatPrice(getGrandTotal())}</p>
                <p className="text-xs text-gray-600">Pedido: {currentOrder.id}</p>
                
                <div className="bg-gray-50 p-3 rounded text-xs font-mono break-all">
                  {currentOrder.pixPayment.copyPaste}
                </div>
                
                <button
                  onClick={copyPixCode}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center justify-center"
                >
                  <HiClipboard className="w-4 h-4 mr-2" />
                  {copiedPix ? 'Copiado!' : 'Copiar Código PIX'}
                </button>
              </div>
            </div>
            
            <p className="text-xs text-gray-600">
              ⏰ Este PIX expira em 30 minutos
            </p>
          </div>
        )}
        
        {step === 'success' && (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <HiCheck className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-green-600">
              Pedido Confirmado!
            </h3>
            <p className="text-gray-600">
              Seu pedido foi enviado e em breve entraremos em contato para confirmar a entrega.<br />
              <span className="font-semibold text-orange-600">Por favor, envie o comprovante do pagamento PIX pelo WhatsApp para agilizar a confirmação!</span>
            </p>
            <p className="text-sm text-gray-500">
              Número do pedido: {currentOrder?.id}
            </p>
            
            {/* Botão de fallback para WhatsApp */}
            <div className="pt-4">
              <button
                onClick={() => {
                  if (currentOrder && !messageSent) {
                    sendOrderToWhatsApp(currentOrder);
                    setMessageSent(true);
                  }
                }}
                disabled={messageSent}
                className={`${
                  messageSent 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-green-500 hover:bg-green-600'
                } text-white px-6 py-2 rounded-md transition-colors duration-200 font-medium flex items-center justify-center mx-auto gap-2`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087"/>
                </svg>
                {messageSent ? 'Mensagem Enviada' : 'Abrir WhatsApp Manualmente'}
              </button>
              <p className="text-xs text-gray-500 mt-2">
                Clique aqui se o WhatsApp não abriu automaticamente
              </p>
            </div>
          </div>
        )}
        
        <div className="flex justify-end space-x-2 mt-6 pt-6 border-t">
          {step === 'info' && (
            <button 
              onClick={handleSubmitInfo}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors duration-200 font-medium"
            >
              Continuar
            </button>
          )}
          
          {step === 'payment' && (
            <>
              <button 
                onClick={() => setStep('info')}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
              >
                Voltar
              </button>
              <button 
                onClick={handleSubmitPayment} 
                disabled={loading}
                className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-6 py-2 rounded-md transition-colors duration-200 font-medium"
              >
                {loading ? 'Processando...' : 'Finalizar Pedido'}
              </button>
            </>
          )}
          
          {step === 'pix' && (
            <>
              <button 
                onClick={() => setStep('payment')}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
              >
                Voltar
              </button>
              <button 
                onClick={handlePixPaymentComplete}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition-colors duration-200 font-medium"
              >
                Já Paguei
              </button>
            </>
          )}
          
          {step === 'success' && (
            <button 
              onClick={resetModal}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition-colors duration-200 font-medium"
            >
              Fechar
            </button>
          )}
        </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutModal;
