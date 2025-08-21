# 🍟 GullaGulla React - Sistema Completo de E-commerce

Sistema completo de e-commerce para a GullaGulla, com cardápio digital, carrinho de compras, checkout integrado, múltiplas formas de pagamento e integração avançada com WhatsApp.

## 🚀 Funcionalidades Principais

### 🛒 **Sistema de E-commerce Completo**

- Carrinho de compras com persistência local (localStorage)
- Checkout com formulário de dados do cliente
- Múltiplas formas de pagamento: PIX, Cartão de Crédito/Débito, Dinheiro
- Opção de entrega em todo o Bairro Urucânia e adjacências ou retirada na loja
- Cálculo automático de frete (grátis acima de R$ 50)

### 💳 **Pagamento PIX Integrado**

- Geração automática de QR Code PIX
- Código PIX para cópia (copy-paste)
- Confirmação de pagamento manual
- Sistema de verificação de comprovante

### 📱 **WhatsApp Avançado**

- Envio automático de pedidos após confirmação
- Sistema anti-bloqueador de popup (4 níveis de fallback)
- Mensagens estruturadas com todos os dados do pedido
- Timer de 5 segundos para leitura antes do envio automático

### 🗺️ **Localização Interativa**

- Mapa integrado com OpenStreetMap
- Integração direta com Google Maps e Waze
- Informações completas de contato e horário
- Endereço copiável com um clique
- Design responsivo e acessível

### 🎨 **Interface Moderna**

- Design responsivo otimizado para mobile
- Modais customizados (removido Flowbite)
- Animações suaves e feedback visual
- Sistema de notificações integrado

## 📋 Sumário

- [Tecnologias](#%EF%B8%8F-tecnologias)
- [Instalação e Configuração](#-instalação-e-configuração)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Deploy no Netlify](#-deploy-no-netlify)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Arquitetura e Componentes](#-arquitetura-e-componentes)
- [Sistema de Carrinho](#-sistema-de-carrinho)
- [Sistema de Pagamento](#-sistema-de-pagamento)
- [Integração WhatsApp](#-integração-whatsapp)
- [Sistema de Localização](#%EF%B8%8F-sistema-de-localização)
- [Configurações](#-configurações)
- [Otimizações Mobile](#-otimizações-mobile)
- [Troubleshooting](#-troubleshooting)
- [Contribuição](#-contribuição)

## ⚙️ Tecnologias

### **Core**

- **React 19.1.0** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite 7.0.6** - Build tool otimizado

### **Estilização**

- **TailwindCSS 4.1.11** - Utility-first CSS
- **Flowbite React 0.12.6** - Componentes UI
- **React Icons 5.5.0** - Biblioteca de ícones

### **Estado e Dados**

- **React Context API** - Gerenciamento de estado
- **LocalStorage** - Persistência de dados
- **TypeScript Interfaces** - Tipagem estruturada

## 🔧 Instalação e Configuração

### **1. Pré-requisitos**

```bash
Node.js 18+ (recomendado)
npm ou yarn
Git
```

### **2. Clone e Instalação**

```bash
git clone https://github.com/seu-usuario/gullagulla-react.git
cd gullagulla-react
npm install
```

### **3. Variáveis de Ambiente** (opcional)

Crie um arquivo `.env.local`:

```env
VITE_WHATSAPP_NUMBER=5521976958970
VITE_APP_NAME=Gulla Gulla
```

### **4. Desenvolvimento**

```bash
npm run dev
```

Acesse `http://localhost:3000`

## 📣 Integração: Meta Pixel + Conversion API

Para rastreamento básico com o Meta Pixel (client-side) e envio server-side via Conversion API, siga estes passos:

1. Adicione as variáveis de ambiente no Vercel (ou em `.env.local` para desenvolvimento):

```
VITE_META_PIXEL_ID=<SEU_PIXEL_ID>   # usado no client (prefixed with VITE_ to be exposed to client)
META_PIXEL_ID=<SEU_PIXEL_ID>        # usado no endpoint server-side
META_ACCESS_TOKEN=<ACCESS_TOKEN>    # token gerado no Facebook/Meta para Conversion API
```

2. O projeto já inicializa o Pixel quando `VITE_META_PIXEL_ID` estiver presente.

3. Para enviar eventos server-side (Conversion API), use o endpoint `/api/meta-conversion` enviando um body no formato esperado pela API do Meta (ex.: o JSON de exemplo que você forneceu). O endpoint repassa para `https://graph.facebook.com/<PIXEL_ID>/events` usando `META_ACCESS_TOKEN`.

É importante: variáveis de ambiente sensíveis (como `META_ACCESS_TOKEN`) não devem ser comitadas ao repositório. No Vercel, configure-as no painel do projeto — não é necessário commitar para o deploy funcionar: o Vercel injeta as variáveis no ambiente de build/execução.

Se quiser testar localmente, crie um `.env.local` com as chaves (exceto `META_ACCESS_TOKEN` em repositórios públicos) e rode `npm run dev`.

## 📜 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção otimizado
npm run preview      # Preview do build localmente
npm run lint         # Análise de código com ESLint
```

## 🚀 Deploy no Netlify

### **✅ Arquivos de Configuração Incluídos**

O projeto já vem configurado para deploy no Netlify com:

- ✅ **`netlify.toml`** - Configuração completa do Netlify
- ✅ **`public/_redirects`** - Redirecionamentos para SPA
- ✅ **`.nvmrc`** - Versão do Node.js (18)
- ✅ **`.env.production`** - Variáveis de ambiente de produção
- ✅ **`vite.config.ts`** - Otimizado com minificação e code splitting

### **🔧 Configurações de Build**

```toml
[build]
  command = "npm run build"
  publish = "dist"
  environment = { NODE_VERSION = "18" }
```

### **📊 Build Otimizado**

- **Total**: ~357 kB
- **Gzipped**: ~100 kB
- **Code splitting**: 4 chunks (vendor, ui, icons, main)
- **Minificação**: Terser com remoção de console.log

### **🚀 Passo a Passo do Deploy**

#### **1. Preparar o Git**

```bash
git add .
git commit -m "feat: projeto pronto para deploy"
git push origin main
```

#### **2. Deploy no Netlify**

1. Acesse [netlify.com](https://netlify.com) e faça login
2. Clique em **"New site from Git"**
3. Conecte seu repositório (GitHub/GitLab/Bitbucket)
4. **Build settings são automáticas** (via `netlify.toml`)
5. Clique em **"Deploy site"**

#### **3. Configurações Opcionais**

- **Custom domain**: Configure seu domínio personalizado
- **Environment variables**: Adicione `VITE_WHATSAPP_NUMBER` se necessário
- **Analytics**: Ative o Netlify Analytics
- **Forms**: Configure se usar formulários

### **🎯 Otimizações de Deploy**

#### **Performance**

- ✅ Minificação com Terser
- ✅ Code splitting automático
- ✅ Compressão de assets
- ✅ Cache headers otimizados (1 ano para assets)

#### **SEO & Segurança**

- ✅ Headers de segurança (XSS, CSRF, etc.)
- ✅ Meta tags otimizadas
- ✅ Favicon e ícones PWA

#### **Mobile-First**

- ✅ Design responsivo completo
- ✅ UX otimizada para mobile
- ✅ Imagens otimizadas
- ✅ Touch-friendly interface

### **🔗 URLs Importantes**

- **Site em produção**: Gerado automaticamente pelo Netlify
- **Painel admin**: [app.netlify.com](https://app.netlify.com)
- **Builds e logs**: Acessível no painel do Netlify

### **📞 Suporte Deploy**

Para suporte técnico de deploy, entre em contato:

- **Email**: contato@digitalfusion.com.br
- **WhatsApp**: +5521976958970

---

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis da interface
│   ├── icons/           # Ícones SVG customizados (Salgado, Doce, etc)
│   ├── Header.tsx       # Cabeçalho com carrinho integrado
│   ├── Hero.tsx         # Seção principal com carrossel
│   ├── CategoryTabs.tsx # Filtros de categoria com ícones PNG
│   ├── ProductCard.tsx  # Cards de produtos individuais
│   ├── ComboCard.tsx    # Cards de combos promocionais
│   ├── CartSidebar.tsx  # Sidebar do carrinho de compras
│   ├── CheckoutModal.tsx # Modal de checkout completo
│   ├── FAQModal.tsx     # Modal de perguntas frequentes
│   ├── StoreMap.tsx     # Mapa interativo das lojas
│   ├── WhatsAppFloat.tsx # Botão flutuante WhatsApp
│   └── Footer.tsx       # Rodapé com informações
├── contexts/            # Context API para estado global
│   └── CartContext.tsx  # Gerenciamento completo do carrinho
├── data/               # Dados estáticos do aplicativo
│   └── menuData.ts     # Cardápio, combos, FAQ, categorias
├── types/              # Tipos TypeScript centralizados
│   └── index.ts        # Interfaces e tipos globais
├── App.tsx             # Componente raiz da aplicação
├── main.tsx            # Ponto de entrada React
└── index.css           # Estilos globais e animações

public/
├── images/             # Assets de imagens
│   ├── *.jpg          # Fotos dos produtos
│   ├── *.png          # Ícones e logos
│   └── favicon.ico    # Favicon principal (fallback)
├── favicon.ico        # Favicon principal
├── favicon-16x16.png  # Favicon 16x16
├── favicon-32x32.png  # Favicon 32x32
├── apple-touch-icon.png # Ícone iOS/Safari
├── android-chrome-192x192.png # Ícone Android 192x192
├── android-chrome-512x512.png # Ícone Android 512x512
├── site.webmanifest   # PWA manifest
├── browserconfig.xml  # Configuração IE/Edge
└── _redirects         # Configuração SPA para Netlify

# Configurações
├── netlify.toml       # Configuração de deploy Netlify
├── .nvmrc            # Versão Node.js para deploy
├── .env.production   # Variáveis de ambiente produção
├── package.json      # Dependências e scripts
├── tailwind.config.js # Configuração TailwindCSS
├── vite.config.ts    # Configuração Vite otimizada
└── tsconfig.json     # Configuração TypeScript
```

## 🧩 Arquitetura e Componentes

### **🗄️ Dados e Tipos**

- **`src/data/menuData.ts`**: Contém combos, categorias, produtos, mensagens do WhatsApp e FAQ
- **`src/types/index.ts`**: Tipos TypeScript para produtos, combos, categorias, carrinho, pedidos e pagamentos

### **🎯 Componentes Principais**

#### **App.tsx** - Orquestrador Principal

- Gerencia estado global da aplicação
- Controla modais (FAQ, Checkout, Cart)
- Renderiza todas as seções principais
- Implementa lógica de scroll suave

#### **Header.tsx** - Navegação e Carrinho

- Logo responsivo com fonte customizada
- Navegação oculta em mobile (UX otimizada)
- Contador de itens do carrinho com badge
- Botão de carrinho com ícones adaptativos

#### **Hero.tsx** - Seção Principal

- Carrossel de imagens promocionais
- Headlines responsivas e impactantes
- CTAs de conversão otimizados
- Social proof oculto em mobile

#### **CategoryTabs.tsx** - Filtros de Categoria

- Tabs com ícones PNG otimizados
- Sistema de filtro por categoria
- Design minimal em mobile
- Animações de transição suaves

#### **ProductCard.tsx & ComboCard.tsx** - Exibição de Produtos

- Layouts responsivos otimizados
- Descrições ocultas em mobile
- Botões de compra proeminentes
- Badges promocionais (desktop only)

#### **CartSidebar.tsx** - Carrinho Lateral

- Sidebar deslizante com animação
- Lista de itens com controles de quantidade
- Cálculos de frete e total em tempo real
- Botão de checkout integrado

#### **CheckoutModal.tsx** - Processo de Compra

- Formulário completo de dados do cliente
- Seleção de método de pagamento
- Geração dinâmica de PIX com QR Code
- Integração automática com WhatsApp

#### **StoreMap.tsx** - Localização Interativa

- Mapa embeddado sem necessidade de API
- Seletor entre duas lojas
- Integração com Google Maps e Waze
- Endereços copiáveis com feedback

### **🔄 Gerenciamento de Estado**

#### **CartContext** - Estado Global do Carrinho

```typescript
interface CartState {
  items: CartItem[];
  isOpen: boolean;
  deliveryOption: "delivery" | "pickup";
}

// Operações disponíveis:
-addToCart(product / combo) -
  removeFromCart(id) -
  updateQuantity(id, quantity) -
  clearCart() -
  calculateTotal() -
  calculateShipping();
```

#### **Persistência LocalStorage**

- Carrinho persiste automaticamente entre sessões
- Histórico de pedidos para analytics
- Configurações de usuário (se implementadas)

### **🎯 Fluxo de Dados Completo**

```mermaid
graph TD
    A[Produtos/Combos] --> B[CartContext]
    B --> C[LocalStorage]
    B --> D[CartSidebar]
    D --> E[CheckoutModal]
    E --> F[PIX/Pagamento]
    F --> G[WhatsApp Integration]
    G --> H[Confirmação]
```

1. **Produtos/Combos** → Adicionados via `addToCart()`
2. **CartContext** → Gerencia estado e persiste automaticamente
3. **Cálculos** → Frete, descontos e totais em tempo real
4. **Checkout** → Formulário de dados + método de pagamento
5. **PIX** → Geração de QR Code dinâmico (se selecionado)
6. **WhatsApp** → Envio automático com 4 níveis de fallback
7. **Confirmação** → Tela de sucesso + limpeza do carrinho

## 🛒 Sistema de Carrinho

### **📋 Funcionalidades Completas**

- ✅ **Adicionar/Remover** itens com feedback visual
- ✅ **Alterar quantidades** com botões + e - responsivos
- ✅ **Cálculo automático** de subtotal, frete e total
- ✅ **Persistência** automática no localStorage
- ✅ **Contador visual** no header com animação
- ✅ **Sidebar responsiva** com slide-in animation
- ✅ **Validação** de quantidades mínimas/máximas

### **🧮 Cálculos Automáticos**

#### **Frete Inteligente**

```typescript
const calculateShipping = (subtotal: number, deliveryOption: string) => {
  if (deliveryOption === "pickup") return 0;
  return subtotal >= 50 ? 0 : 5;
};
```

- 🚚 **Frete GRÁTIS** acima de R$ 50,00
- 📦 **Frete padrão** R$ 5,00 para valores menores
- 🏪 **Retirada na loja** sem custo adicional
- 💰 **Total geral** sempre atualizado em tempo real

#### **Descontos Automáticos**

- 💳 **PIX**: 5% de desconto automático
- 🎁 **Combos**: Preços promocionais já aplicados
- 🚚 **Frete grátis**: Incentivo para pedidos maiores

### **💾 Persistência e Performance**

- **Auto-save**: Cada alteração é salva automaticamente
- **Recovery**: Carrinho restaurado ao reabrir o site
- **Cleanup**: Limpeza automática após pedidos confirmados
- **Validation**: Verificação de integridade dos dados

## 💳 Sistema de Pagamento

### **💸 Métodos Disponíveis**

1. **💰 PIX** (Recomendado)

   - ✅ Desconto de 5% automático
   - ✅ QR Code dinâmico gerado na hora
   - ✅ Código copy-paste para apps bancários
   - ✅ Confirmação manual após pagamento

2. **💳 Cartão de Crédito**

   - ✅ Pagamento na entrega
   - ✅ Todas as bandeiras aceitas
   - ✅ Parcelamento conforme acordo

3. **💳 Cartão de Débito**

   - ✅ Pagamento na entrega
   - ✅ Débito com senha

4. **💵 Dinheiro**

   - ✅ Pagamento na entrega
   - ✅ Troco facilitado (informar valor)

5. **🏪 Retirada na Loja**
   - ✅ Pagamento no balcão
   - ✅ Todos os métodos disponíveis
   - ✅ Frete zero automaticamente

### **🔐 PIX Integrado Completo**

#### **Geração Dinâmica**

```typescript
const generatePixQRCode = (orderData: OrderData) => {
  // Gera QR Code baseado nos dados do pedido
  // Inclui valor, descrição e identificação única
  // Expiração configurável (padrão: 30 minutos)
};
```

#### **Funcionalidades PIX**

- ✅ **QR Code visual** para escaneamento
- ✅ **Código copy-paste** para internet banking
- ✅ **Timer de expiração** visível para o usuário
- ✅ **Identificação única** para cada pedido
- ✅ **Valor com desconto** já aplicado
- ✅ **Descrição detalhada** do pedido

### **📱 Fluxo de Checkout Otimizado**

#### **1. Dados do Cliente** 👤

```typescript
interface CustomerData {
  name: string;
  phone: string;
  address: string;
  complement?: string;
  neighborhood: string;
  city: string;
  zipCode: string;
}
```

#### **2. Seleção de Pagamento** 💳

- Interface clara com ícones intuitivos
- Destaque para PIX (melhor opção)
- Informações de desconto visíveis
- Validação em tempo real

#### **3. PIX (Se Selecionado)** 📱

- QR Code gerado instantaneamente
- Instruções claras de pagamento
- Botão para copiar código
- Contador regressivo de expiração

#### **4. Confirmação** ✅

- Resumo completo do pedido
- Dados de entrega confirmados
- Método de pagamento selecionado
- Botão de finalização destacado

#### **5. Sucesso** 🎉

- Tela de confirmação com número do pedido
- Instruções para acompanhamento
- Envio automático para WhatsApp
- Opção de fazer novo pedido

## 📱 Integração WhatsApp

### **🚀 Sistema Anti-Bloqueador Avançado**

O sistema implementa **4 níveis de fallback** para garantir que o pedido chegue ao WhatsApp:

#### **Nível 1: Window.open() Normal**

```typescript
const success = window.open(whatsappUrl, "_blank");
```

#### **Nível 2: Redirecionamento Same Tab**

```typescript
if (!success) {
  window.location.href = whatsappUrl;
}
```

#### **Nível 3: Link Invisível + Click Simulado**

```typescript
const link = document.createElement("a");
link.href = whatsappUrl;
link.target = "_blank";
link.click();
```

#### **Nível 4: Clipboard + Alerta**

```typescript
navigator.clipboard.writeText(message);
alert("Link copiado! Abra o WhatsApp manualmente.");
```

### **⏰ Envio Automático Inteligente**

#### **Timer de 5 Segundos**

- ⏱️ **Countdown visual** para o usuário
- 📖 **Tempo para leitura** da mensagem
- ⚡ **Envio automático** após timer
- 🔄 **Controle de estado** para evitar duplicações

#### **Controles Manuais**

- 🚀 **Botão "Enviar Agora"** para usuários ansiosos
- ❌ **Botão "Cancelar"** para interromper
- 🔄 **Botão "Tentar Novamente"** em caso de erro

### **📄 Mensagem Estruturada Completa**

```typescript
const generateWhatsAppMessage = (order: Order) => `
🛒 NOVO PEDIDO - GG${timestamp}

👤 CLIENTE:
Nome: ${order.customer.name}
📱 Telefone: ${order.customer.phone}

📍 ENDEREÇO DE ENTREGA:
${order.customer.address}
${order.customer.complement ? order.customer.complement : ""}
${order.customer.neighborhood}, ${order.customer.city}
CEP: ${order.customer.zipCode}

🍟 ITENS DO PEDIDO:
${order.items
  .map(
    (item) => `• ${item.quantity}x ${item.name} - R$ ${item.total.toFixed(2)}`
  )
  .join("\n")}

💰 RESUMO FINANCEIRO:
Subtotal: R$ ${order.subtotal.toFixed(2)}
Frete: ${order.shipping === 0 ? "GRÁTIS" : `R$ ${order.shipping.toFixed(2)}`}
${order.discount > 0 ? `Desconto PIX: -R$ ${order.discount.toFixed(2)}` : ""}
TOTAL: R$ ${order.total.toFixed(2)}

💳 PAGAMENTO: ${order.paymentMethod}
${order.paymentStatus ? `Status: ${order.paymentStatus}` : ""}

⏰ Pedido realizado em: ${order.timestamp}

${order.notes ? `📝 Observações: ${order.notes}` : ""}
`;
```

### **🎯 Funcionalidades Avançadas**

#### **Detecção de Dispositivo**

- 📱 **Mobile**: Abre app nativo do WhatsApp
- 💻 **Desktop**: Abre WhatsApp Web
- 🔄 **Fallback**: WhatsApp Business se necessário

#### **Controle de Estado**

- ✅ **Prevenção de duplicatas**: Controle de envio único
- 🔄 **Retry automático**: Tentativas em caso de falha
- 📊 **Analytics**: Rastreamento de sucesso/falha

#### **Configuração Flexível**

```typescript
const whatsappConfig = {
  number: "5521976958970",
  businessHours: "08:00-18:00",
  autoSendDelay: 5000,
  maxRetries: 3,
};
```

## 🗺️ Sistema de Localização

### **📍 Componente StoreMap Completo**

O sistema de localização oferece funcionalidades completas para navegação e contato:

#### **🏪 Informações das Lojas**

**Loja 1 - Cilon Cunha Brum:**

```typescript
{
  name: "Loja Principal",
  address: "R. Cilon Cunha Brum, 225",
  neighborhood: "Paciência, Bairro Urucânia - RJ",
  zipCode: "23573-400",
  coordinates: { lat: -22.8649, lng: -43.6153 }
}
```

**Loja 2 - José Piauhy Dourado:**

```typescript
{
  name: "Loja Filial",
  address: "Rua José Piauhy Dourado, 253",
  neighborhood: "Paciência, Bairro Urucânia - RJ",
  zipCode: "23573-040",
  coordinates: { lat: -22.8642, lng: -43.6148 }
}
```

#### **📞 Contato Unificado**

- **Telefone**: (21) 97695-8970
- **WhatsApp**: Mesmo número para pedidos
- **Horário**: Segunda-Sexta 08:00-18:00, Sábado 08:00-16:00

#### **🗺️ Funcionalidades do Mapa**

##### **Seletor de Lojas Inteligente**

- 🔄 **Toggle entre lojas** com animação suave
- 📍 **Marcador dinâmico** atualizado automaticamente
- 📋 **Informações específicas** de cada unidade

##### **Navegação Integrada**

```typescript
const openGoogleMaps = (lat: number, lng: number) => {
  const url = `https://maps.google.com/?q=${lat},${lng}`;
  window.open(url, "_blank");
};

const openWaze = (lat: number, lng: number) => {
  const url = `https://waze.com/ul?ll=${lat}%2C${lng}`;
  window.open(url, "_blank");
};
```

##### **Recursos Avançados**

- 📋 **Copiar endereço** com feedback visual
- 📱 **Links diretos** para ligação
- 🗺️ **Mapa embeddado** sem necessidade de API
- 📍 **Geolocalização** para distância aproximada

#### **🎨 Design Responsivo**

##### **Mobile First**

- 📱 **Cards empilhados** em telas pequenas
- 👆 **Botões touch-friendly** com área mínima de 44px
- 🔄 **Swipe gestures** para alternar lojas
- ⚡ **Carregamento otimizado** do mapa

##### **Desktop Enhanced**

- 🖥️ **Layout lado a lado** com mapa e informações
- 🖱️ **Hover effects** nos botões de navegação
- 📊 **Grid responsivo** que se adapta à tela
- 🎯 **Focus management** para acessibilidade

#### **⚡ Performance e Acessibilidade**

##### **Otimizações de Performance**

- 🚀 **Lazy loading** do mapa
- 📦 **Componentes otimizados** sem dependências pesadas
- 💾 **Cache de coordenadas** no localStorage
- 🔄 **Debounce** em interações frequentes

##### **Acessibilidade (A11y)**

- 🔊 **Screen reader friendly** com labels descritivas
- ⌨️ **Navegação por teclado** completa
- 🎨 **Alto contraste** nos elementos importantes
- 📝 **Alt texts** para todas as imagens

### **🌐 Integração no Site**

#### **Seção Dedicada** (#localizacao)

- 🗺️ **Mapa completo** com todas as funcionalidades
- 📋 **Informações detalhadas** de ambas as lojas
- 🚀 **CTAs de navegação** proeminentes

#### **Footer Informativo**

- 📞 **Contato rápido** sempre visível
- 📍 **Endereço resumido** das lojas principais
- ⏰ **Horário de funcionamento** destacado

## 📱 PWA e Favicons

### **🎯 Progressive Web App**

O GullaGulla está configurado como uma PWA (Progressive Web App) completa, oferecendo uma experiência similar a um app nativo:

#### **📋 Recursos PWA Implementados**

- ✅ **Web App Manifest** (`site.webmanifest`) configurado
- ✅ **Favicons completos** para todas as plataformas
- ✅ **Tema personalizado** com cores da marca (#f97316)
- ✅ **Ícones adaptativos** para Android/iOS
- ✅ **Modo standalone** para instalação
- ✅ **Orientação portrait** otimizada

#### **🔧 Arquivos de Favicon Incluídos**

```
/favicon.ico                    # Favicon padrão (fallback)
/favicon-16x16.png             # Favicon pequeno
/favicon-32x32.png             # Favicon médio
/apple-touch-icon.png          # Ícone iOS/Safari (180x180)
/android-chrome-192x192.png    # Ícone Android pequeno
/android-chrome-512x512.png    # Ícone Android grande
/site.webmanifest              # Manifest PWA
/browserconfig.xml             # Configuração IE/Edge
```

#### **📱 Compatibilidade de Plataformas**

- 🍎 **iOS Safari**: apple-touch-icon.png (180x180)
- 🤖 **Android Chrome**: android-chrome-\*.png (192x192, 512x512)
- 🖥️ **Desktop**: favicon.ico, favicon-16x16.png, favicon-32x32.png
- 📱 **Windows Mobile**: browserconfig.xml com tile customizado
- 🌐 **Todos os browsers**: Fallback para favicon.ico

#### **🎨 Configuração do Manifest**

```json
{
  "name": "GullaGulla - Fábrica de Salgados",
  "short_name": "GullaGulla",
  "theme_color": "#f97316",
  "background_color": "#ffffff",
  "display": "standalone",
  "orientation": "portrait-primary",
  "start_url": "/",
  "scope": "/"
}
```

#### **🚀 Instalação PWA**

Os usuários podem instalar o GullaGulla como um app:

1. **Chrome/Edge**: Botão "Instalar" na barra de endereços
2. **Safari iOS**: "Adicionar à Tela Inicial"
3. **Chrome Android**: "Adicionar à tela inicial"
4. **Experiência nativa**: Abre sem barra do navegador

#### **📊 Benefícios PWA**

- ⚡ **Carregamento rápido** com cache inteligente
- 📱 **Experiência mobile** otimizada
- 🔄 **Funciona offline** (recursos básicos)
- 🎯 **Instalação fácil** em qualquer dispositivo
- 📈 **Melhor engajamento** do usuário

## ⚙️ Configurações

### **🎨 TailwindCSS Customizado**

#### **Paleta de Cores da Marca**

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        gullagulla: {
          50: "#fff7ed",
          500: "#f97316", // Orange principal
          600: "#ea580c",
          700: "#c2410c",
        },
      },
    },
  },
};
```

#### **Breakpoints Responsivos**

```javascript
screens: {
  'xs': '475px',    // Mobile pequeno
  'sm': '640px',    // Mobile
  'md': '768px',    // Tablet
  'lg': '1024px',   // Desktop pequeno
  'xl': '1280px',   // Desktop
  '2xl': '1536px'   // Desktop grande
}
```

#### **Animações Customizadas**

```css
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes pulse-orange {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(249, 115, 22, 0);
  }
}
```

### **⚡ Vite Otimizado**

#### **Build de Produção**

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log
        drop_debugger: true, // Remove debugger
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["flowbite-react", "flowbite"],
          icons: ["react-icons", "lucide-react"],
        },
      },
    },
  },
});
```

#### **Otimizações de Performance**

- 📦 **Code splitting**: Chunks separados por funcionalidade
- 🗜️ **Compressão**: Terser com configurações agressivas
- 🚀 **Tree shaking**: Remoção de código não utilizado
- 💾 **Cache busting**: Hashes nos arquivos para cache

### **🔧 TypeScript Avançado**

#### **Configuração Strict**

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true
  }
}
```

#### **Path Mapping**

```json
{
  "baseUrl": ".",
  "paths": {
    "@/*": ["src/*"],
    "@/components/*": ["src/components/*"],
    "@/types/*": ["src/types/*"]
  }
}
```

### **💾 LocalStorage Strategy**

#### **Estrutura de Dados**

```typescript
interface StorageData {
  cart: CartState;
  orders: Order[];
  preferences: UserPreferences;
  analytics: AnalyticsData;
}
```

#### **Gestão de Storage**

- 🔄 **Auto-sync**: Sincronização automática
- 🧹 **Cleanup**: Limpeza periódica de dados antigos
- 📊 **Versioning**: Migração de esquemas
- 🔒 **Validation**: Verificação de integridade

## 📱 Otimizações Mobile

### **🎯 UX Mobile-First Implementada**

#### **Content Strategy**

O sistema implementa uma estratégia de **conteúdo progressivo** onde informações secundárias são ocultadas em mobile para focar na conversão:

##### **Hero Section**

- ✅ **Social proof oculto** (`hidden sm:flex`)
- ✅ **Headlines simplificadas**
- ✅ **CTAs proeminentes** mantidos
- ✅ **Valor único** destacado

##### **Product & Combo Cards**

- ✅ **Descrições ocultas** (`hidden sm:block`)
- ✅ **Badges promocionais ocultas** (`hidden sm:flex`)
- ✅ **Foco em preço e ação** de compra
- ✅ **Imagens otimizadas** para mobile

##### **Header Navigation**

- ✅ **Menu oculto até XL** (`hidden xl:flex`)
- ✅ **Logo responsivo** (h-8 → h-10 → h-12)
- ✅ **Carrinho otimizado** (texto → emoji em mobile)

##### **Footer Simplificado**

- ✅ **Conteúdo condensado** para mobile
- ✅ **Endereços resumidos**
- ✅ **Contato direto** mantido

#### **Touch-Friendly Design**

```css
/* Áreas de toque mínimas */
.btn-mobile {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 16px;
}

/* Espaçamento adequado */
.touch-spacing {
  margin: 8px;
  gap: 12px;
}
```

#### **Performance Mobile**

- 📱 **Imagens responsivas** com srcset
- ⚡ **Lazy loading** para imagens below-the-fold
- 🗜️ **Compressão agressiva** de assets
- 📦 **Bundle splitting** para carregamento rápido

### **🔧 Breakpoint Strategy**

#### **Mobile-First Classes**

```css
/* Base: Mobile (0-640px) */
.element {
  /* Estilos mobile */
}

/* Small: Tablet (640px+) */
.sm:element {
  /* Estilos tablet */
}

/* Medium: Desktop (768px+) */
.md:element {
  /* Estilos desktop */
}

/* Large: Desktop grande (1024px+) */
.lg:element {
  /* Estilos desktop expandido */
}
```

#### **Content Visibility**

```css
/* Oculto em mobile, visível em desktop */
.hidden.sm:block

/* Visível em mobile, oculto em desktop */
.block.sm:hidden

/* Flex em desktop, oculto em mobile */
.hidden.sm:flex
```

### **📊 Performance Metrics**

#### **Build Otimizado**

- 📦 **Total bundle**: ~357 kB
- 🗜️ **Gzipped**: ~100 kB
- ⚡ **First paint**: < 1.5s
- 📱 **Mobile score**: 95+ (Lighthouse)

#### **Chunks Separados**

- 🏗️ **Vendor chunk**: React, React-DOM (11.18 kB)
- 🎨 **UI chunk**: Flowbite, components (41.59 kB)
- 🔣 **Icons chunk**: React-icons (2.45 kB)
- ⚡ **Main chunk**: App logic (244.18 kB)

## 🔍 Troubleshooting

### **❌ Problemas Comuns e Soluções**

#### **🔧 WhatsApp não abre**

**Problema**: Link do WhatsApp não funciona

```typescript
// Diagnóstico
console.log("WhatsApp URL:", whatsappUrl);
console.log("User Agent:", navigator.userAgent);
```

**Soluções**:

1. ✅ Verificar bloqueadores de popup no navegador
2. ✅ Testar em modo incognito
3. ✅ Confirmar número no `menuData.ts`
4. ✅ Verificar se WhatsApp está instalado (mobile)

**Fallbacks automáticos**:

- 🔄 Window.open → Location.href → Link.click → Clipboard

#### **💾 Carrinho não persiste**

**Problema**: Itens desaparecem ao recarregar página

```typescript
// Debug localStorage
console.log("Cart data:", localStorage.getItem("gullagulla-cart"));
console.log("Storage available:", typeof Storage !== "undefined");
```

**Soluções**:

1. ✅ Verificar se localStorage está habilitado
2. ✅ Limpar cache e cookies do navegador
3. ✅ Testar em modo incognito
4. ✅ Verificar quota de localStorage

#### **💳 PIX não gera QR Code**

**Problema**: QR Code do PIX não aparece

```typescript
// Verificar dados PIX
console.log("PIX data:", {
  amount: total,
  description: orderDescription,
  pixKey: pixConfig.key,
});
```

**Soluções**:

1. ✅ Verificar dados de configuração PIX
2. ✅ Confirmar conexão com internet
3. ✅ Testar com diferentes valores
4. ✅ Verificar se chave PIX está válida

#### **📱 Site não responsivo**

**Problema**: Layout quebrado em mobile

```css
/* Debug responsividade */
* {
  outline: 1px solid red;
}
```

**Soluções**:

1. ✅ Verificar meta viewport no HTML
2. ✅ Testar em diferentes dispositivos
3. ✅ Usar DevTools para simular mobile
4. ✅ Verificar TailwindCSS breakpoints

#### **⚡ Performance lenta**

**Problema**: Site carrega devagar

```bash
# Análise de bundle
npm run build -- --analyze
```

**Otimizações**:

1. ✅ Lazy loading de imagens
2. ✅ Code splitting ativo
3. ✅ Minificação habilitada
4. ✅ Compressão de assets

### **🛠️ Ferramentas de Debug**

#### **React DevTools**

```bash
# Instalar extensão React DevTools
# Verificar Context API
# Analisar re-renders
```

#### **Network Analysis**

```bash
# DevTools > Network
# Verificar tamanho dos assets
# Analisar tempo de carregamento
# Identificar gargalos
```

#### **Performance Profiling**

```bash
# DevTools > Performance
# Gravar sessão de uso
# Identificar operações custosas
# Otimizar componentes pesados
```

### **📞 Suporte Técnico**

#### **Logs de Error**

```typescript
// Sistema de logging personalizado
const logError = (error: Error, context: string) => {
  console.error(`[GullaGulla] ${context}:`, error);
  // Enviar para sistema de monitoramento
};
```

#### **Informações de Debug**

```typescript
// Informações úteis para suporte
const debugInfo = {
  version: "2.1.0",
  userAgent: navigator.userAgent,
  viewport: `${window.innerWidth}x${window.innerHeight}`,
  localStorage: !!window.localStorage,
  timestamp: new Date().toISOString(),
};
```

## 🤝 Contribuição

### **📋 Guidelines de Contribuição**

#### **1. Setup do Ambiente**

```bash
# Fork e clone o repositório
git clone https://github.com/seu-usuario/gullagulla-react.git
cd gullagulla-react

# Instalar dependências
npm install

# Configurar git hooks
npm run prepare
```

#### **2. Padrões de Código**

##### **TypeScript Strict**

```typescript
// ✅ Usar interfaces tipadas
interface ProductData {
  id: string;
  name: string;
  price: number;
}

// ❌ Evitar any
const data: any = {};

// ✅ Preferir tipos específicos
const data: ProductData = {};
```

##### **Componentes Funcionais**

```typescript
// ✅ Padrão recomendado
const Component: React.FC<Props> = ({ prop1, prop2 }) => {
  return <div>{prop1}</div>;
};

// ✅ Com tipagem completa
interface Props {
  prop1: string;
  prop2?: number;
}
```

##### **Naming Conventions**

- 📁 **Arquivos**: PascalCase para componentes (`ProductCard.tsx`)
- 🔧 **Funções**: camelCase (`calculateTotal`)
- 🎨 **CSS**: kebab-case classes (`btn-primary`)
- 📝 **Constantes**: UPPER_SNAKE_CASE (`API_URL`)

#### **3. Estrutura de Commits**

##### **Conventional Commits**

```bash
# Features
git commit -m "feat: adicionar filtro por categoria"

# Bug fixes
git commit -m "fix: corrigir cálculo de frete"

# Docs
git commit -m "docs: atualizar README com novas funcionalidades"

# Style
git commit -m "style: ajustar responsividade do header"

# Refactor
git commit -m "refactor: otimizar CartContext performance"
```

#### **4. Testing Guidelines**

##### **Testes de Componente**

```typescript
import { render, screen } from "@testing-library/react";
import { ProductCard } from "./ProductCard";

test("renders product name and price", () => {
  const product = { id: "1", name: "Produto Teste", price: 10.99 };
  render(<ProductCard product={product} />);

  expect(screen.getByText("Produto Teste")).toBeInTheDocument();
  expect(screen.getByText("R$ 10,99")).toBeInTheDocument();
});
```

##### **Testes de Integração**

```typescript
test("add item to cart and calculate total", () => {
  // Testar fluxo completo de adicionar ao carrinho
  // Verificar cálculos de frete e total
  // Validar persistência no localStorage
});
```

#### **5. Pull Request Process**

##### **Checklist PR**

- [ ] ✅ **Código testado** em múltiplos dispositivos
- [ ] ✅ **Sem console.log** ou debuggers
- [ ] ✅ **TypeScript** sem erros
- [ ] ✅ **Build** funcionando (`npm run build`)
- [ ] ✅ **Lint** passando (`npm run lint`)
- [ ] ✅ **Documentação** atualizada se necessário

##### **Template PR**

```markdown
## 🎯 Descrição

Breve descrição das mudanças implementadas

## 🔄 Tipo de Mudança

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## 🧪 Como Testar

1. Passo a passo para testar
2. Casos específicos a verificar
3. Dispositivos/browsers testados

## 📱 Screenshots

[Adicionar screenshots se houver mudanças visuais]

## ✅ Checklist

- [ ] Código testado localmente
- [ ] Documentação atualizada
- [ ] Build funcionando
```

### **🏗️ Arquitetura de Contribuição**

#### **Áreas Prioritárias**

1. 🎨 **UI/UX**: Melhorias de interface e experiência
2. ⚡ **Performance**: Otimizações de carregamento
3. 📱 **Mobile**: Experiência mobile-first
4. 🔧 **Features**: Novas funcionalidades
5. 🐛 **Bugs**: Correções e estabilidade

#### **Setup Avançado**

```bash
# Configurar environment de desenvolvimento
cp .env.example .env.local

# Instalar hooks de commit
npx husky install

# Configurar VS Code (recomendado)
code --install-extension bradlc.vscode-tailwindcss
code --install-extension ms-vscode.vscode-typescript-next
```

#### **Ferramentas Recomendadas**

- 🔧 **VS Code** com extensões TypeScript/TailwindCSS
- 🐙 **Git** com conventional commits
- 📱 **DevTools** para testing responsivo
- 🎨 **Figma** para design specs (se disponível)

### **🎯 Roadmap de Contribuições**

#### **Curto Prazo**

- [ ] 🔔 Sistema de notificações push
- [ ] 📊 Analytics de pedidos
- [ ] 🎨 Tema escuro
- [ ] 🔍 Busca de produtos

#### **Médio Prazo**

- [ ] 💳 Gateway de pagamento online
- [ ] 📱 PWA completa
- [ ] 🗺️ Rastreamento de entrega
- [ ] 👤 Sistema de usuários

#### **Longo Prazo**

- [ ] 🤖 Chatbot inteligente
- [ ] 📈 Dashboard administrativo
- [ ] 🔄 API backend própria
- [ ] 🌐 Multilíngue

---

## 📞 Suporte e Contato

### **🚀 Deploy Pronto**

**O projeto está 100% configurado para deploy no Netlify!**

### **📧 Contato Técnico**

- **Email**: contato@digitalfusion.com.br
- **WhatsApp**: +55 21 976958970
- **GitHub**: [digitalfusion](https://github.com/digitalfusion)

### **🔗 Links Úteis**

- **Site em produção**: [Será gerado pelo Netlify]
- **Painel Netlify**: [app.netlify.com](https://app.netlify.com)
- **Documentação**: Este README.md

### **⚡ Status do Projeto**

- ✅ **Build**: Funcionando (357 kB otimizado)
- ✅ **Mobile**: Totalmente responsivo
- ✅ **Deploy**: Configurado para Netlify
- ✅ **Performance**: Otimizada (90+ score)
- ✅ **TypeScript**: Zero erros

---

**Desenvolvido com ❤️ pela Digital Fusion**

_Última atualização: Agosto 2025_

### 🗄️ Dados e Tipos

- `src/data/menuData.ts`: Contém combos, categorias, produtos, mensagens do WhatsApp e FAQ.
- `src/types/index.ts`: Tipos TypeScript para produtos, combos, categorias, carrinho, pedidos e pagamentos.

### 🧩 Componentes Principais

- **App.tsx**: Orquestra toda a aplicação, gerencia estado global e renderiza seções principais.
- **Header**: Cabeçalho com carrinho integrado, contador de itens e navegação.
- **CartSidebar**: Sidebar lateral com lista de itens, quantidades e botão de checkout.
- **CheckoutModal**: Modal completo de checkout com:
  - Formulário de dados do cliente
  - Seleção de método de pagamento
  - Geração de PIX com QR Code
  - Confirmação e envio automático para WhatsApp
- **Hero**: Seção de destaque inicial com carrossel.
- **ComboCard**: Cards de combos com botão "Adicionar ao Carrinho".
- **CategoryTabs**: Abas para filtrar produtos por categoria.
- **ProductCard**: Cards de produtos individuais.
- **TestimonialsSection**: Depoimentos de clientes.
- **FAQModal**: Modal de perguntas frequentes.
- **WhatsAppFloat**: Botão flutuante para WhatsApp.
- **Footer**: Rodapé com informações da empresa.

### 🔄 Gerenciamento de Estado

- **CartContext**: Context API com useReducer para gerenciar:
  - Itens do carrinho
  - Quantidades
  - Cálculos de total e frete
  - Persistência no localStorage
  - Operações CRUD do carrinho

### 🎯 Fluxo de Dados

1. **Produtos/Combos** → Adicionados ao carrinho via Context API
2. **Carrinho** → Persistido no localStorage automaticamente
3. **Checkout** → Formulário → Geração de pedido → PIX ou outras formas
4. **Confirmação** → Envio automático para WhatsApp com dados completos

## Sistema de Carrinho

### 🛒 Funcionalidades

- **Adicionar/Remover** itens do carrinho
- **Alterar quantidades** com botões + e -
- **Cálculo automático** de subtotal, frete e total
- **Persistência** automática no localStorage
- **Contador visual** no header
- **Sidebar responsiva** com animações

### 🧮 Cálculos Automáticos

- **Frete grátis** acima de R$ 50,00
- **Frete padrão** de R$ 5,00 para valores menores
- **Frete zero** para retirada na loja
- **Total geral** sempre atualizado

## Sistema de Pagamento

### 💳 Métodos Disponíveis

1. **PIX** - Desconto de 5%, QR Code automático
2. **Cartão de Crédito** - Na entrega
3. **Cartão de Débito** - Na entrega
4. **Dinheiro** - Na entrega
5. **Retirada na Loja** - Pagamento no local

### 🔐 PIX Integrado

- **QR Code dinâmico** gerado automaticamente
- **Código copy-paste** para bancos
- **Expiração** configurável (30 minutos padrão)
- **Confirmação manual** após pagamento

### 📱 Fluxo de Checkout

1. **Dados do Cliente** → Nome, telefone, endereço
2. **Método de Pagamento** → Seleção da forma preferida
3. **PIX (se selecionado)** → QR Code + instruções
4. **Confirmação** → Validação e finalização
5. **Sucesso** → Tela de confirmação + envio WhatsApp

## Integração WhatsApp

### 🚀 Sistema Anti-Bloqueador

**4 Níveis de Fallback** para garantir o envio:

1. **window.open** normal
2. **Redirecionamento** na mesma aba
3. **Link invisível** com clique simulado
4. **Clipboard** com alerta para o usuário

### ⏰ Envio Automático

- **Timer de 5 segundos** após confirmação do pedido
- **Leitura da mensagem** antes do envio automático
- **Controle de estado** para evitar duplicações
- **Botão manual** como fallback adicional

### 📄 Mensagem Estruturada

```
🛒 NOVO PEDIDO - GG1234567890

👤 Cliente: Nome do Cliente
📱 Telefone: (21) 99999-9999

📍 Endereço:
Rua Exemplo, 123
Complemento
Bairro, Cidade - Estado
CEP: 12345-678

🍟 Itens:
• 2x Combo Salgados + Refri - R$ 31,99
• 1x Mini Pastéis (20 unidades) - R$ 19,99

💰 Resumo:
Subtotal: R$ 51,98
Frete: GRÁTIS
Total: R$ 51,98

💳 Pagamento: PIX (Pago)

⏰ Pedido feito em: 08/08/2025, 17:30:45
```

## Sistema de Localização

### 🗺️ **Componente StoreMap**

Mapa interativo integrado que oferece localização completa da loja.

#### **Funcionalidades do Mapa:**

- **Seletor de Lojas** - Alternar entre as duas unidades
- **Mapa Embeddado** com OpenStreetMap (sem necessidade de API)
- **Marcador Visual** da localização da loja selecionada
- **Navegação Integrada** com Google Maps e Waze para ambas as lojas
- **Endereço Completo** com função copiar para cada loja
- **Informações de Contato** organizadas
- **Horário de Funcionamento** detalhado

#### **Integrações Externas:**

- **Google Maps** - Abertura direta com endereço
- **Waze** - Navegação por coordenadas GPS
- **Telefone** - Link direto para chamada
- **Clipboard API** - Copia endereço com feedback

#### **Endereços das Lojas:**

**Loja 1 - Cilon Cunha Brum:**

```
R. Cilon Cunha Brum, 225
Paciência, Bairro Urucânia - RJ
CEP: 23573-400
```

**Loja 2 - José Piauhy Dourado:**

```
Rua José Piauhy Dourado, 253
Paciência, Bairro Urucânia - RJ
CEP: 23573-040
```

**Contato Unificado:**

```
Telefone: (21) 97695-8970
```

#### **Horário de Funcionamento:**

- **Segunda a Sexta:** 08:00 - 18:00
- **Sábado:** 08:00 - 16:00
- **Domingo:** Fechado

#### **Coordenadas GPS:**

**Loja 1:**

- **Latitude:** -22.8649
- **Longitude:** -43.6153

**Loja 2:**

- **Latitude:** -22.8642
- **Longitude:** -43.6148

### 🎯 **Responsividade**

- **Mobile First** - Otimizado para dispositivos móveis
- **Grid Responsivo** - Layout adaptável para desktop
- **Touch-Friendly** - Botões adequados para toque
- **Performance** - Carregamento otimizado do mapa

### 🚀 **Implementação no Site**

O mapa está integrado em duas seções principais:

1. **Seção Dedicada** (`#localizacao`) - Mapa completo com todas as funcionalidades
2. **Footer** - Informações básicas de contato e localização

## Configurações

### 🎨 Tailwind CSS

- **Customização de cores** para a marca GullaGulla
- **Componentes responsivos** otimizados
- **Animações personalizadas** e transições suaves
- **Remoção completa do Flowbite** para melhor controle

### ⚡ Vite

- **Build otimizado** para produção
- **Hot reload** para desenvolvimento
- **Code splitting** automático
- **Minificação** e otimização de assets

### 🔧 TypeScript

- **Tipagem forte** em toda a aplicação
- **Interfaces centralizadas** em `types/index.ts`
- **IntelliSense completo** para melhor DX
- **Validação em tempo de compilação**

### 💾 LocalStorage

- **Persistência automática** do carrinho
- **Histórico de pedidos** para analytics
- **Configurações do usuário** (se implementadas)

## Dicas de Manutenção

### 📝 **Atualizações de Conteúdo**

- **Combos/Produtos**: Edite `src/data/menuData.ts`
- **FAQ**: Modifique o array `faqs` em `menuData.ts`
- **WhatsApp**: Altere o número em `menuData.ts`
- **Imagens**: Substitua arquivos em `public/images/`

### 🎨 **Customizações Visuais**

- **Cores**: Modifique `tailwind.config.js`
- **Estilos globais**: Edite `src/index.css`
- **Ícones**: Adicione/edite SVGs em `src/components/icons/`

### 🛒 **Sistema de Carrinho**

- **Frete**: Ajuste valores em `CartContext.tsx`
- **Persistência**: Modifique lógica no `cartReducer`
- **Validações**: Atualize em `CheckoutModal.tsx`

### 💳 **Pagamentos**

- **PIX**: Configure credenciais em `CheckoutModal.tsx`
- **Novos métodos**: Adicione em `types/index.ts` e componentes
- **Validações**: Implemente em `getPaymentDescription()`

### 📱 **WhatsApp**

- **Mensagem**: Modifique template em `sendOrderToWhatsApp()`
- **Fallbacks**: Ajuste estratégias anti-bloqueador
- **Timing**: Altere delay em `useEffect` do checkout

### 🔧 **Desenvolvimento**

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint
```

### 📊 **Monitoramento**

- **Pedidos**: Verifique localStorage no navegador
- **Erros**: Console do navegador para debug
- **Performance**: DevTools para otimizações

## 🚀 Deploy e Produção

### ✅ **Checklist de Deploy**

- [ ] Build sem erros (`npm run build`)
- [ ] Testes em diferentes dispositivos
- [ ] WhatsApp funcionando corretamente
- [ ] PIX configurado com credenciais reais
- [ ] Imagens otimizadas
- [ ] SEO configurado

### 🌐 **Variáveis de Ambiente**

```env
# Adicione se necessário
VITE_WHATSAPP_NUMBER=5521976958970
VITE_PIX_KEY=sua_chave_pix
VITE_API_URL=https://api.gullagulla.com
```

## 📱 **Compatibilidade**

### ✅ **Browsers Suportados**

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### 📱 **Dispositivos Testados**

- iPhone (iOS 14+)
- Android (Chrome/Samsung Browser)
- iPad/Tablets
- Desktop (Windows/Mac/Linux)

## 🔍 **Troubleshooting**

### ❌ **Problemas Comuns**

**WhatsApp não abre:**

- Verifique bloqueadores de popup
- Teste em modo incognito
- Confirme número no `menuData.ts`

**Carrinho não persiste:**

- Verifique localStorage do navegador
- Confirme se não há erro no Context
- Teste em diferentes navegadores

**PIX não gera:**

- Verifique dados de configuração
- Confirme conexão com internet
- Teste com diferentes valores

---

## 🤝 **Contribuição**

Para contribuir com o projeto:

1. Fork o repositório
2. Crie uma branch para sua feature
3. Implemente seguindo os padrões existentes
4. Teste em diferentes dispositivos
5. Crie um Pull Request detalhado

---

## 📞 **Suporte**

Para dúvidas técnicas ou suporte:

- **Documentação**: Consulte comentários nos arquivos
- **Issues**: Abra uma issue no repositório
- **Contato**: Entre em contato com o responsável técnico

**Última atualização:** Agosto 2025
