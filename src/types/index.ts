export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Combo {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  items: string[];
  highlight?: boolean;
  savings?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string; color?: string }>;
}

export interface WhatsAppConfig {
  phoneNumber: string;
  baseUrl: string;
  messages: {
    greeting: string;
    productOrder: string;
    comboOrder: string;
  };
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface AppData {
  combos: Combo[];
  categories: Category[];
  products: Product[];
  whatsapp: WhatsAppConfig;
  faqs: FAQ[];
}