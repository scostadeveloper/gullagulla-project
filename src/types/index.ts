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
  flavors?: string[]; // Sabores disponíveis para seleção
  requiresFlavors?: boolean; // Se requer seleção de sabores
}

export interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
  type: 'combo' | 'product';
  selectedFlavors?: string[]; // Sabores selecionados pelo usuário
}

export interface FlavorQuantity {
  flavor: string;
  category: string;
  quantity: number;
  maxQuantity: number;
}

export interface ShippingInfo {
  cep: string;
  address: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  email?: string;
  shipping: ShippingInfo;
}

export interface Order {
  id: string;
  items: CartItem[];
  customer: CustomerInfo;
  total: number;
  shipping: number;
  grandTotal: number;
  paymentMethod: 'pix' | 'delivery' | 'credit' | 'debit' | 'pickup';
  status: 'pending' | 'paid' | 'preparing' | 'delivered';
  createdAt: string;
  pixPayment?: {
    qrCode: string;
    copyPaste: string;
    expiresAt: string;
  };
}

export interface Category {
  id: string;
  name: string;
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