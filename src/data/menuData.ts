import type { AppData } from '../types';
import { SalgadoIcon, EstrelaIcon, BebidaIcon, ChurrosIcon } from '../components/icons';

export const menuData: AppData = {
  combos: [
    {
      id: 'combo1',
      name: 'Combo Família Gulosa',
      description: '15 salgados variados + 10 mini churros + 2 refrigerantes 2L',
      image: '/assets/combo-familia.jpg',
      originalPrice: 65.90,
      price: 55.90,
      items: ['15 salgados variados', '10 mini churros doce de leite', '2 refrigerantes 2L'],
      highlight: true,
      savings: '15% OFF'
    },
    {
      id: 'combo2',
      name: 'Combo Amigos',
      description: '10 salgados + 6 mini churros + 4 refrigerantes lata',
      image: '/assets/combo-dupla.jpg',
      originalPrice: 42.90,
      price: 36.90,
      items: ['10 salgados variados', '6 mini churros', '4 refrigerantes lata'],
      savings: '14% OFF'
    },
    {
      id: 'combo3',
      name: 'Combo Lanche Perfeito',
      description: '5 salgados + 3 mini churros + 1 refrigerante',
      image: '/assets/combo-individual.jpg',
      originalPrice: 22.90,
      price: 18.90,
      items: ['5 salgados a sua escolha', '3 mini churros', '1 refrigerante'],
      highlight: true,
      savings: '17% OFF'
    },
    {
      id: 'combo4',
      name: 'Combo Mini Churros',
      description: '15 mini churros + 1 refrigerante',
      image: '/assets/combo-churros.jpg',
      originalPrice: 18.90,
      price: 15.90,
      items: ['15 mini churros variados', '1 refrigerante'],
      savings: '16% OFF'
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
  
  products: [
    {
      id: 'trad1',
      name: 'Coxinha de Frango',
      description: 'Coxinha tradicional com frango desfiado temperado na receita especial da casa',
      image: '/images/coxinha.svg',
      price: 4.50,
      category: 'salgados-tradicionais'
    },
    {
      id: 'trad2',
      name: 'Pastel de Queijo',
      description: 'Pastel crocante e dourado recheado com queijo cremoso derretido',
      image: '/images/pastel-queijo.svg',
      price: 5.00,
      category: 'salgados-tradicionais'
    },
    {
      id: 'trad3',
      name: 'Risole de Presunto',
      description: 'Risole dourado empanado com presunto, queijo e molho especial',
      image: '/images/risole.svg',
      price: 4.50,
      category: 'salgados-tradicionais'
    },
    {
      id: 'trad4',
      name: 'Empada de Frango',
      description: 'Empada caseira com massa folhada e frango temperado com temperos especiais',
      image: '/assets/empada.jpg',
      price: 5.50,
      category: 'salgados-tradicionais'
    },
    {
      id: 'trad5',
      name: 'Quibe Frito',
      description: 'Quibe tradicional crocante com carne moída temperada e trigo',
      image: '/assets/quibe.jpg',
      price: 4.00,
      category: 'salgados-tradicionais'
    },
    {
      id: 'trad6',
      name: 'Esfirra de Carne',
      description: 'Esfirra aberta com carne temperada, cebola e tomate',
      image: '/assets/esfirra.jpg',
      price: 4.50,
      category: 'salgados-tradicionais'
    },
    {
      id: 'trad7',
      name: 'Pão de Açúcar',
      description: 'Pão de açúcar macio recheado com queijo cremoso',
      image: '/assets/pao-acucar.jpg',
      price: 4.00,
      category: 'salgados-tradicionais'
    },
    {
      id: 'trad8',
      name: 'Bolinha de Queijo',
      description: 'Bolinha crocante por fora e cremosa por dentro, recheada com queijo',
      image: '/assets/bolinha-queijo.jpg',
      price: 4.50,
      category: 'salgados-tradicionais'
    },

    {
      id: 'esp1',
      name: 'Coxinha Gourmet',
      description: 'Coxinha especial com frango desfiado, cream cheese e ervas finas',
      image: '/assets/coxinha-gourmet.jpg',
      price: 6.50,
      category: 'salgados-especiais'
    },
    {
      id: 'esp2',
      name: 'Pastel de Camarão',
      description: 'Pastel premium recheado com camarão temperado e catupiry',
      image: '/assets/pastel-camarao.jpg',
      price: 8.00,
      category: 'salgados-especiais'
    },
    {
      id: 'esp3',
      name: 'Esfirra de Carne Seca',
      description: 'Esfirra especial com carne seca desfiada e queijo coalho',
      image: '/assets/esfirra-carne-seca.jpg',
      price: 7.00,
      category: 'salgados-especiais'
    },
    {
      id: 'esp4',
      name: 'Mini Pizza Margherita',
      description: 'Mini pizza artesanal com molho especial, mussarela e manjericão',
      image: '/assets/mini-pizza.jpg',
      price: 6.00,
      category: 'salgados-especiais'
    },
    {
      id: 'esp5',
      name: 'Croissant de Frango',
      description: 'Croissant folhado e crocante recheado com frango e requeijão',
      image: '/assets/croissant.jpg',
      price: 7.50,
      category: 'salgados-especiais'
    },
    {
      id: 'esp6',
      name: 'Pastel de Carne com Queijo',
      description: 'Pastel especial com carne temperada e queijo derretido',
      image: '/assets/pastel-carne.jpg',
      price: 6.50,
      category: 'salgados-especiais'
    },
    {
      id: 'esp7',
      name: 'Enroladinho de Salsicha',
      description: 'Massa folhada enrolada com salsicha e queijo, gratinado no forno',
      image: '/assets/enroladinho.jpg',
      price: 5.50,
      category: 'salgados-especiais'
    },
    {
      id: 'esp8',
      name: 'Bolinha de Carne',
      description: 'Bolinha crocante recheada com carne temperada e temperos especiais',
      image: '/assets/bolinha-carne.jpg',
      price: 5.50,
      category: 'salgados-especiais'
    },

    {
      id: 'churros1',
      name: 'Mini Churros Doce de Leite',
      description: 'Mini churros crocantes recheados com cremoso doce de leite',
      image: '/assets/churros-doce-leite.jpg',
      price: 1.50,
      category: 'mini-churros'
    },
    {
      id: 'churros2',
      name: 'Mini Churros Chocolate',
      description: 'Mini churros irresistíveis recheados com chocolate cremoso',
      image: '/assets/churros-chocolate.jpg',
      price: 1.50,
      category: 'mini-churros'
    },
    {
      id: 'churros3',
      name: 'Mini Churros Nutella',
      description: 'Mini churros premium recheados com Nutella original',
      image: '/assets/churros-nutella.jpg',
      price: 2.00,
      category: 'mini-churros'
    },
    {
      id: 'churros4',
      name: 'Mini Churros Morango',
      description: 'Mini churros especiais recheados com geleia de morango',
      image: '/assets/churros-morango.jpg',
      price: 1.75,
      category: 'mini-churros'
    },
    {
      id: 'churros5',
      name: 'Mini Churros Beijinho',
      description: 'Mini churros com sabor de coco e leite condensado',
      image: '/assets/churros-beijinho.jpg',
      price: 1.75,
      category: 'mini-churros'
    },
    {
      id: 'churros6',
      name: 'Mix Mini Churros (6 unidades)',
      description: 'Variado com doce de leite, chocolate e morango',
      image: '/assets/churros-mix.jpg',
      price: 9.50,
      category: 'mini-churros'
    },

    {
      id: 'beb1',
      name: 'Coca-Cola 2L',
      description: 'Refrigerante Coca-Cola 2 litros gelado',
      image: '/assets/coca-2l.jpg',
      price: 8.00,
      category: 'bebidas'
    },
    {
      id: 'beb2',
      name: 'Guaraná Antarctica Lata',
      description: 'Guaraná Antarctica 350ml gelado',
      image: '/assets/guarana-lata.jpg',
      price: 4.50,
      category: 'bebidas'
    },
    {
      id: 'beb3',
      name: 'Suco de Laranja 500ml',
      description: 'Suco natural de laranja 500ml fresquinho',
      image: '/assets/suco-laranja.jpg',
      price: 6.00,
      category: 'bebidas'
    },
    {
      id: 'beb4',
      name: 'Água Mineral 500ml',
      description: 'Água mineral Crystal sem gás 500ml',
      image: '/assets/agua.jpg',
      price: 2.50,
      category: 'bebidas'
    },
    {
      id: 'beb5',
      name: 'Fanta Laranja 2L',
      description: 'Refrigerante Fanta Laranja 2 litros gelado',
      image: '/assets/fanta-2l.jpg',
      price: 7.50,
      category: 'bebidas'
    },
    {
      id: 'beb6',
      name: 'Sprite Lata',
      description: 'Refrigerante Sprite 350ml gelado',
      image: '/assets/sprite-lata.jpg',
      price: 4.50,
      category: 'bebidas'
    },
    {
      id: 'beb7',
      name: 'Suco de Uva 500ml',
      description: 'Suco natural de uva 500ml',
      image: '/assets/suco-uva.jpg',
      price: 6.50,
      category: 'bebidas'
    },
    {
      id: 'beb8',
      name: 'Refrigerante Lata (Variados)',
      description: 'Escolha entre Coca, Fanta, Sprite ou Guaraná',
      image: '/assets/refri-variados.jpg',
      price: 4.50,
      category: 'bebidas'
    }
  ],

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