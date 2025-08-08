import type { AppData } from '../types';
import { SalgadoIcon, EstrelaIcon, BebidaIcon, ChurrosIcon } from '../components/icons';

export const menuData: AppData = {
  combos: [
    {
      id: '100-salgadinhos',
      name: '100 Salgadinhos',
      description: 'Coxinha, bolinha de queijo, kibe recheado, salsicha, queijo com alho, calabresa, queijo com presunto',
      price: 38.99,
      items: ['Coxinha', 'Bolinha de queijo', 'Kibe recheado', 'Salsicha', 'Queijo com alho', 'Calabresa', 'Queijo com presunto'],
      image: '/images/salgadinhos.jpg',
    },
    {
      id: '50-salgadinhos',
      name: 'Porção 50 Salgadinhos',
      description: 'Serve 2 pessoas. Coxinha, bolinha de queijo, kibe recheado, salsicha, queijo com alho, calabresa, queijo com presunto',
      price: 24.49,
      items: ['Coxinha', 'Bolinha de queijo', 'Kibe recheado', 'Salsicha', 'Queijo com alho', 'Calabresa', 'Queijo com presunto'],
      image: '/images/salgadinhos.jpg',
    },
    {
      id: '50-mini-churros',
      name: '50 Mini Churros (doce de leite)',
      description: 'Deliciosos mini churros com recheio de doce de leite. Serve 1 pessoa.',
      price: 24.99,
      items: ['Mini churros doce de leite'],
      image: '/images/churrinhos.jpg',
    },
    {
      id: '20-mini-pasteis',
      name: 'Porção de 20 Mini Pastéis',
      description: 'Queijo, frango, carne',
      price: 19.99,
      items: ['Queijo', 'Frango', 'Carne'],
      image: '/images/pastelzinho.jpg',
    },
    {
      id: '50-salgadinhos-10-pasteis',
      name: '50 Salgadinhos + 10 Mini Pastéis',
      description: 'Salgadinhos + pastéis sortidos',
      price: 27.99,
      items: ['Salgadinhos sortidos', 'Mini pastéis sortidos'],
      image: '/images/combos/50-salgadinhos-10-pasteis.jpg',
    },
    {
      id: '60-salgados-refri',
      name: 'Combo 60 Salgados + Refrigerante 1.5L',
      description: 'Coxinha, bolinha de queijo, kibe recheado, salsicha, queijo com alho, calabresa, queijo com presunto',
      price: 31.99,
      items: ['Coxinha', 'Bolinha de queijo', 'Kibe recheado', 'Salsicha', 'Queijo com alho', 'Calabresa', 'Queijo com presunto', 'Refrigerante 1.5L'],
      image: '/images/combos/60-salgados-refri.jpg',
    },
    {
      id: '100-salgados-refri',
      name: 'Combo 100 Salgados + Refrigerante 1L',
      description: 'Coxinha, bolinha de queijo, kibe, queijo com alho, salsicha, calabresa, queijo com presunto',
      price: 42.99,
      items: ['Coxinha', 'Bolinha de queijo', 'Kibe', 'Queijo com alho', 'Salsicha', 'Calabresa', 'Queijo com presunto', 'Refrigerante 1L'],
      image: '/images/combos/100-salgados-refri.jpg',
    },
    {
      id: '50-salgadinhos-15-pasteis-30-churros',
      name: 'Combo 50 Salgadinhos + 15 Pastéis + 30 Churros',
      description: 'O combo preferido de todos. Salgados mistos, mini pastel e churros doce de leite',
      price: 41.99,
      items: ['Salgados mistos', 'Mini pastel', 'Churros doce de leite'],
      image: '/images/combos/50-salgadinhos-15-pasteis-30-churros.jpg',
    },
    {
      id: '50-salgadinhos-20-pasteis-refri',
      name: 'Combo 50 Salgadinhos + 20 Pastéis + Refrigerante 1L',
      description: 'Combo do Dia. Salgado, refrigerante e pastéis',
      price: 41.99,
      items: ['Salgado', 'Refrigerante 1L', 'Pastéis'],
      image: '/images/combos/50-salgadinhos-20-pasteis-refri.jpg',
    },
    {
      id: '120-salgados-refri',
      name: 'Combo 120 Salgados + Refrigerante 1.5L',
      description: 'Coxinha, bolinha de queijo, kibe recheado, salsicha, queijo com alho, calabresa, queijo com presunto',
      price: 44.99,
      items: ['Coxinha', 'Bolinha de queijo', 'Kibe recheado', 'Salsicha', 'Queijo com alho', 'Calabresa', 'Queijo com presunto', 'Refrigerante 1.5L'],
      image: '/images/combos/120-salgados-refri.jpg',
    },
    {
      id: 'mega-100-salgados-20-pasteis-50-churros-coca2l',
      name: 'Mega Combo 100 Salgados 20 Pastéis 50 Churros + Coca 2L',
      description: '100 salgados, 20 pastéis mistos, 50 churros doce de leite',
      price: 79.99,
      items: ['100 salgados', '20 pastéis mistos', '50 churros doce de leite', 'Coca 2L'],
      image: '/images/combos/mega-100-salgados-20-pasteis-50-churros-coca2l.jpg',
    },
  // Removido: Mega Combo 100 Salgadinhos 20 Pastéis 12 Assados + Coca 2L
    {
      id: '250-salgados-coca2l',
      name: '250 Salgados + Coca 2L',
      description: '250 salgados mistos + 1 coca 2l',
      price: 99.99,
      items: ['250 salgados mistos', 'Coca 2L'],
      image: '/images/combos/250-salgados-coca2l.jpg',
    },
    {
      id: '50-pasteis-refri',
      name: '50 Pastéis + Refrigerante 1.5L',
      description: '50 pastéis mistos + Antartica 1.5L',
      price: 49.99,
      items: ['50 pastéis mistos', 'Antarctica 1.5L'],
      image: '/images/combos/50-pasteis-refri.jpg',
    }
  ],

  categories: [
    {
      id: 'salgados-tradicionais',
      name: 'Salgados Tradicionais',
      icon: SalgadoIcon
    },
    {
      id: 'salgados-especiais',
      name: 'Salgados Especiais',
      icon: EstrelaIcon
    },
    {
      id: 'mini-churros',
      name: 'Mini Churros',
      icon: ChurrosIcon
    },
    {
      id: 'bebidas',
      name: 'Bebidas',
      icon: BebidaIcon
    }
  ],
  
  products: [],

  whatsapp: {
    phoneNumber: '5521976958970',
    baseUrl: 'https://wa.me/',
    messages: {
      greeting: 'Olá! Bem-vindo ao GullaGulla!',
      productOrder: 'Olá! Gostaria de pedir',
      comboOrder: 'Olá! Gostaria de pedir o combo'
    }
  },

  faqs: [
    {
      question: 'Qual o horário de funcionamento?',
      answer: 'Segunda: 16:30-23:00 | Terça/Quarta: 17:15-23:00 | Quinta/Domingo: 16:30-23:00 | Sexta/Sábado: 16:45-23:00'
    },
    {
      question: 'Onde vocês estão localizados?',
      answer: 'Rua Cilon Cunha Brum, 225 - Rio de Janeiro, RJ - CEP: 23573-400. Acesse nosso site: gullagulla.com.br'
    },
    {
      question: 'Como fazer um pedido?',
      answer: 'É só clicar no produto ou combo desejado e você será direcionado para nosso WhatsApp (21) 97695-8970 para finalizar o pedido!'
    },
    {
      question: 'Vocês fazem delivery?',
      answer: 'Sim! Entregamos no Rio de Janeiro e região. Entre em contato pelo WhatsApp para verificar sua área de entrega e valores.'
    },
    {
      question: 'Os salgados são feitos frescos?',
      answer: 'Todos os nossos salgados são feitos artesanalmente no dia, com massa fresca e ingredientes selecionados!'
    },
    {
      question: 'Posso escolher os sabores dos salgados nos combos?',
      answer: 'Sim! Nos combos você pode escolher os sabores dos salgados de acordo com sua preferência. Informe no pedido pelo WhatsApp!'
    },
    {
      question: 'Os mini churros são feitos na hora?',
      answer: 'Nossos mini churros são preparados frescos, crocantes por fora e macios por dentro, com recheios cremosos e saborosos!'
    },
    {
      question: 'Quais formas de pagamento vocês aceitam?',
      answer: 'Aceitamos dinheiro, PIX, cartão de débito e crédito. Consulte as condições pelo WhatsApp.'
    }
  ]
};

export const formatPrice = (price: number): string => {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
};

export const generateWhatsAppURL = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `${menuData.whatsapp.baseUrl}${menuData.whatsapp.phoneNumber}?text=${encodedMessage}`;
};

export const getUTMParameters = (): Record<string, string> => {
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams: Record<string, string> = {};
  
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
    const value = urlParams.get(param);
    if (value) {
      utmParams[param] = value;
    }
  });
  
  return utmParams;
};