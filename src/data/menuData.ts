import type { AppData } from "../types";

export const menuData: AppData = {
  combos: [
    {
      id: "salgados-pasteis-churros-refri",
      name: "Salgados + Pastéis + Churros + Refrigerante",
      description:
        "Salgados variados, pastéis mistos, churros + refrigerante 1L",
      price: 32.99,
      items: [
        "Salgados variados",
        "Pastéis mistos",
        "Churros",
        "Refrigerante 1L",
      ],
      image: "/images/salgadinhos_pastelzinho_churrinhos.jpg",
      requiresFlavors: true,
      flavors: [
        "Salgados: Coxinha",
        "Salgados: Bolinha de queijo",
        "Salgados: Kibe recheado",
        "Salgados: Salsicha",
        "Salgados: Queijo com alho",
        "Salgados: Calabresa",
        "Salgados: Queijo com presunto",
        "Pastéis: Queijo",
        "Pastéis: Frango",
        "Pastéis: Carne",
        "Churros: Doce de leite",
        "Churros: Chocolate",
        "Refrigerante: Guaraná Antartica",
        "Refrigerante: Coca-Cola",
        "Variados",
      ],
    },
    {
      id: "100-salgadinhos",
      name: "100 Salgadinhos",
      description:
        "Coxinha, bolinha de queijo, kibe recheado, salsicha, queijo com alho, calabresa, queijo com presunto",
      price: 38.99,
      items: [
        "Coxinha",
        "Bolinha de queijo",
        "Kibe recheado",
        "Salsicha",
        "Queijo com alho",
        "Calabresa",
        "Queijo com presunto",
      ],
      image: "/images/salgadinhos.jpg",
      requiresFlavors: true,
      flavors: [
        "Coxinha",
        "Bolinha de queijo",
        "Kibe recheado",
        "Salsicha",
        "Queijo com alho",
        "Calabresa",
        "Queijo com presunto",
        "Variados",
      ],
    },
    {
      id: "50-salgadinhos",
      name: "Porção 50 Salgadinhos",
      description:
        "Serve 2 pessoas. Coxinha, bolinha de queijo, kibe recheado, salsicha, queijo com alho, calabresa, queijo com presunto",
      price: 24.49,
      items: [
        "Coxinha",
        "Bolinha de queijo",
        "Kibe recheado",
        "Salsicha",
        "Queijo com alho",
        "Calabresa",
        "Queijo com presunto",
      ],
      image: "/images/salgadinhos.jpg",
      requiresFlavors: true,
      flavors: [
        "Coxinha",
        "Bolinha de queijo",
        "Kibe recheado",
        "Salsicha",
        "Queijo com alho",
        "Calabresa",
        "Queijo com presunto",
        "Variados",
      ],
    },
    {
      id: "50-mini-churros",
      name: "50 Mini Churros",
      description:
        "Deliciosos mini churros com recheio. Escolha entre doce de leite ou chocolate. Serve 1 pessoa.",
      price: 24.99,
      items: ["Mini churros"],
      image: "/images/churrinhos.jpg",
      requiresFlavors: true,
      flavors: ["Doce de leite", "Chocolate", "Variados"],
    },
    {
      id: "20-mini-pasteis",
      name: "Porção de 20 Mini Pastéis",
      description: "Queijo, frango, carne",
      price: 19.99,
      items: ["Queijo", "Frango", "Carne"],
      image: "/images/pastelzinho.jpg",
      requiresFlavors: true,
      flavors: ["Queijo", "Frango", "Carne", "Variados"],
    },
    {
      id: "50-salgadinhos-10-pasteis",
      name: "50 Salgadinhos + 10 Mini Pastéis",
      description: "Salgadinhos + pastéis sortidos",
      price: 27.99,
      items: ["Salgadinhos sortidos", "Mini pastéis sortidos"],
      image: "/images/salgadinhos_e_pastelzinhos.jpg",
      requiresFlavors: true,
      flavors: [
        "Salgados: Coxinha",
        "Salgados: Bolinha de queijo",
        "Salgados: Kibe recheado",
        "Salgados: Salsicha",
        "Salgados: Queijo com alho",
        "Salgados: Calabresa",
        "Salgados: Queijo com presunto",
        "Pastéis: Queijo",
        "Pastéis: Frango",
        "Pastéis: Carne",
        "Variados",
      ],
    },
    {
      id: "60-salgados-refri",
      name: "Combo 60 Salgados + Refrigerante 1.5L",
      description:
        "Coxinha, bolinha de queijo, kibe recheado, salsicha, queijo com alho, calabresa, queijo com presunto",
      price: 31.99,
      items: [
        "Coxinha",
        "Bolinha de queijo",
        "Kibe recheado",
        "Salsicha",
        "Queijo com alho",
        "Calabresa",
        "Queijo com presunto",
        "Refrigerante 1.5L",
      ],
      image: "/images/salgadinhos_com_refrigerante.jpg",
      requiresFlavors: true,
      flavors: [
        "Salgados: Coxinha",
        "Salgados: Bolinha de queijo",
        "Salgados: Kibe recheado",
        "Salgados: Salsicha",
        "Salgados: Queijo com alho",
        "Salgados: Calabresa",
        "Salgados: Queijo com presunto",
        "Refrigerante: Guaraná Antartica",
        "Refrigerante: Coca-Cola",
        "Variados",
      ],
    },
    {
      id: "100-salgados-refri",
      name: "Combo 100 Salgados + Refrigerante 1L",
      description:
        "Coxinha, bolinha de queijo, kibe, queijo com alho, salsicha, calabresa, queijo com presunto",
      price: 42.99,
      items: [
        "Coxinha",
        "Bolinha de queijo",
        "Kibe",
        "Queijo com alho",
        "Salsicha",
        "Calabresa",
        "Queijo com presunto",
        "Refrigerante 1L",
      ],
      image: "/images/salgadinhos_refri_1litro.jpg",
      requiresFlavors: true,
      flavors: [
        "Salgados: Coxinha",
        "Salgados: Bolinha de queijo",
        "Salgados: Kibe recheado",
        "Salgados: Salsicha",
        "Salgados: Queijo com alho",
        "Salgados: Calabresa",
        "Salgados: Queijo com presunto",
        "Refrigerante: Guaraná Antartica",
        "Refrigerante: Coca-Cola",
        "Variados",
      ],
    },
    {
      id: "50-salgadinhos-15-pasteis-30-churros",
      name: "Combo 50 Salgadinhos + 15 Pastéis + 30 Churros",
      description:
        "O combo preferido de todos. Salgados mistos, mini pastel e churros",
      price: 41.99,
      items: ["Salgados mistos", "Mini pastel", "Churros"],
      image: "/images/salgadinhos_pastelzinho_churrinhos.jpg",
      requiresFlavors: true,
      flavors: [
        "Salgados: Coxinha",
        "Salgados: Bolinha de queijo",
        "Salgados: Kibe recheado",
        "Salgados: Salsicha",
        "Salgados: Queijo com alho",
        "Salgados: Calabresa",
        "Salgados: Queijo com presunto",
        "Pastéis: Queijo",
        "Pastéis: Frango",
        "Pastéis: Carne",
        "Churros: Doce de leite",
        "Churros: Chocolate",
        "Variados",
      ],
    },
    {
      id: "50-salgadinhos-20-pasteis-refri",
      name: "Combo 50 Salgadinhos + 20 Pastéis + Refrigerante 1L",
      description: "Combo do Dia. Salgado, refrigerante e pastéis",
      price: 41.99,
      items: ["Salgado", "Refrigerante 1L", "Pastéis"],
      image: "/images/salgadinhos_pastelzinho_refri_1litro.jpg",
      requiresFlavors: true,
      flavors: [
        "Salgados: Coxinha",
        "Salgados: Bolinha de queijo",
        "Salgados: Kibe recheado",
        "Salgados: Salsicha",
        "Salgados: Queijo com alho",
        "Salgados: Calabresa",
        "Salgados: Queijo com presunto",
        "Pastéis: Queijo",
        "Pastéis: Frango",
        "Pastéis: Carne",
        "Refrigerante: Guaraná Antartica",
        "Refrigerante: Coca-Cola",
        "Variados",
      ],
    },
    {
      id: "120-salgados-refri",
      name: "Combo 120 Salgados + Refrigerante 1.5L",
      description:
        "Coxinha, bolinha de queijo, kibe recheado, salsicha, queijo com alho, calabresa, queijo com presunto",
      price: 44.99,
      items: [
        "Coxinha",
        "Bolinha de queijo",
        "Kibe recheado",
        "Salsicha",
        "Queijo com alho",
        "Calabresa",
        "Queijo com presunto",
        "Refrigerante 1.5L",
      ],
      image: "/images/salgadinhos_com_refrigerante.jpg",
      requiresFlavors: true,
      flavors: [
        "Salgados: Coxinha",
        "Salgados: Bolinha de queijo",
        "Salgados: Kibe recheado",
        "Salgados: Salsicha",
        "Salgados: Queijo com alho",
        "Salgados: Calabresa",
        "Salgados: Queijo com presunto",
        "Refrigerante: Guaraná Antartica",
        "Refrigerante: Coca-Cola",
        "Variados",
      ],
    },
    {
      id: "mega-100-salgados-20-pasteis-50-churros-coca2l",
      name: "Mega Combo 100 Salgados 20 Pastéis 50 Churros + Coca 2L",
      description: "100 salgados, 20 pastéis mistos, 50 churros",
      price: 79.99,
      items: ["100 salgados", "20 pastéis mistos", "50 churros", "Coca 2L"],
      image: "/images/salgadinhos_pastelzinhos_churrinhos_coca_2litros.jpg",
      requiresFlavors: true,
      flavors: [
        "Salgados: Coxinha",
        "Salgados: Bolinha de queijo",
        "Salgados: Kibe recheado",
        "Salgados: Salsicha",
        "Salgados: Queijo com alho",
        "Salgados: Calabresa",
        "Salgados: Queijo com presunto",
        "Pastéis: Queijo",
        "Pastéis: Frango",
        "Pastéis: Carne",
        "Churros: Doce de leite",
        "Churros: Chocolate",
        "Variados",
      ],
    },
    // Removido: Mega Combo 100 Salgadinhos 20 Pastéis 12 Assados + Coca 2L
    {
      id: "250-salgados-coca2l",
      name: "250 Salgados + Coca 2L",
      description: "250 salgados mistos + 1 coca 2l",
      price: 99.99,
      items: ["250 salgados mistos", "Coca 2L"],
      image: "/images/salgadinhos_coca_2litros.jpg",
      requiresFlavors: true,
      flavors: [
        "Salgados: Coxinha",
        "Salgados: Bolinha de queijo",
        "Salgados: Kibe recheado",
        "Salgados: Salsicha",
        "Salgados: Queijo com alho",
        "Salgados: Calabresa",
        "Salgados: Queijo com presunto",
        "Variados",
      ],
    },
    {
      id: "50-pasteis-refri",
      name: "50 Pastéis + Refrigerante 1.5L",
      description: "50 pastéis mistos + Antartica 1.5L",
      price: 49.99,
      items: ["50 pastéis mistos", "Antarctica 1.5L"],
      image: "/images/muitos_pastelzinhos_refri_1litro_e_meio.jpg",
      requiresFlavors: true,
      flavors: [
        "Pastéis: Queijo",
        "Pastéis: Frango",
        "Pastéis: Carne",
        "Refrigerante: Guaraná Antartica",
        "Refrigerante: Coca-Cola",
        "Variados",
      ],
    },
  ],

  categories: [
    {
      id: "salgados-tradicionais",
      name: "Salgados Tradicionais",
    },
    {
      id: "salgados-especiais",
      name: "Salgados Especiais",
    },
    {
      id: "mini-churros",
      name: "Mini Churros",
    },
    {
      id: "bebidas",
      name: "Bebidas",
    },
  ],

  products: [
    {
      id: "coca-cola-2l",
      name: "Coca-Cola 2 Litros",
      description: "Refrigerante Coca-Cola 2 litros gelado",
      price: 13.0,
      image: "/images/coca-cola-2litros.png",
      category: "Bebidas",
    },
    {
      id: "guarana-antartica-1l",
      name: "Guaraná Antarctica 1 Litro",
      description: "Refrigerante Guaraná Antarctica 1 litro gelado",
      price: 8.0,
      image: "/images/guarana-antartica-1litro.png",
      category: "Bebidas",
    },
    {
      id: "guarana-antartica-1-5l",
      name: "Guaraná Antarctica 1,5 Litros",
      description: "Refrigerante Guaraná Antarctica 1,5 litros gelado",
      price: 9.0,
      image: "/images/guarana-antartica-1-litro-e-meio.png",
      category: "Bebidas",
    },
  ],

  whatsapp: {
    phoneNumber: "5521976958970",
    baseUrl: "https://wa.me/",
    messages: {
      greeting: "Olá! Bem-vindo ao GullaGulla!",
      productOrder: "Olá! Gostaria de pedir",
      comboOrder: "Olá! Gostaria de pedir o combo",
    },
  },

  faqs: [
    {
      question: "Qual o horário de funcionamento?",
      answer: "Segunda a domingo: das 10 da manhã até meia noite",
    },
    {
      question: "Onde vocês estão localizados?",
      answer:
        "Rua Cilon Cunha Brum, 225 - Bairro Urucânia, RJ - CEP: 23573-400. Acesse nosso site: gullagulla.com.br",
    },
    {
      question: "Como fazer um pedido?",
      answer:
        "É só clicar no produto ou combo desejado e você será direcionado para nosso WhatsApp (21) 97695-8970 para finalizar o pedido!",
    },
    {
      question: "Vocês fazem delivery?",
      answer:
        "Sim! Entregamos em todo o Bairro Urucânia e adjacências. Entre em contato pelo WhatsApp para verificar sua área de entrega e valores.",
    },
    {
      question: "Os salgados são feitos frescos?",
      answer:
        "Todos os nossos salgados são feitos artesanalmente no dia, com massa fresca e ingredientes selecionados!",
    },
    {
      question: "Posso escolher os sabores dos salgados nos combos?",
      answer:
        "Sim! Nos combos você pode escolher os sabores dos salgados de acordo com sua preferência. Informe no pedido pelo WhatsApp!",
    },
    {
      question: "Os mini churros são feitos na hora?",
      answer:
        "Nossos mini churros são preparados frescos, crocantes por fora e macios por dentro, com recheios cremosos e saborosos!",
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer:
        "Aceitamos dinheiro, PIX, cartão de débito e crédito. Consulte as condições pelo WhatsApp.",
    },
  ],
};

export const formatPrice = (price: number): string => {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export const generateWhatsAppURL = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `${menuData.whatsapp.baseUrl}${menuData.whatsapp.phoneNumber}?text=${encodedMessage}`;
};

export const getUTMParameters = (): Record<string, string> => {
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams: Record<string, string> = {};

  [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ].forEach((param) => {
    const value = urlParams.get(param);
    if (value) {
      utmParams[param] = value;
    }
  });

  return utmParams;
};
