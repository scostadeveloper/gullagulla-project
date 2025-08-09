# GullaGulla React

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

## Sumário
- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Principais Dependências](#principais-dependências)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Arquitetura e Componentes](#arquitetura-e-componentes)
- [Sistema de Carrinho](#sistema-de-carrinho)
- [Sistema de Pagamento](#sistema-de-pagamento)
- [Integração WhatsApp](#integração-whatsapp)
- [Sistema de Localização](#sistema-de-localização)
- [Configurações](#configurações)
- [Dicas de Manutenção](#dicas-de-manutenção)

---

## Visão Geral

- **Framework:** React + TypeScript
- **Build:** Vite
- **Estilização:** TailwindCSS (Flowbite removido)
- **Estado:** React Context API + useReducer
- **Persistência:** localStorage para carrinho e pedidos
- **Pagamento:** PIX com QR Code + múltiplas opções
- **Integração:** WhatsApp com sistema anti-bloqueador
- **Design:** Totalmente responsivo e acessível

## Estrutura de Pastas

```
├── public/
│   └── images/           # Imagens dos produtos, combos e ícones
├── src/
│   ├── components/       # Componentes reutilizáveis da interface
│   │   ├── icons/        # Ícones SVG customizados (Salgado, Doce, etc)
│   │   ├── Header.tsx    # Cabeçalho com carrinho integrado
│   │   ├── CheckoutModal.tsx  # Modal de checkout completo
│   │   ├── CartSidebar.tsx    # Sidebar do carrinho
│   │   └── ...           # Outros componentes
│   ├── contexts/         # Context API para estado global
│   │   └── CartContext.tsx    # Gerenciamento do carrinho
│   ├── data/             # Dados do cardápio, combos, categorias, FAQ
│   ├── types/            # Tipos TypeScript centralizados
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Ponto de entrada da aplicação
│   └── index.css         # Estilos globais
├── package.json          # Dependências e scripts
├── tailwind.config.js    # Configuração do TailwindCSS
├── vite.config.ts        # Configuração do Vite
└── ...
```

## Principais Dependências

- **React**: Biblioteca principal para UI
- **Vite**: Build rápido e moderno
- **TailwindCSS**: Utilitários de CSS (Flowbite removido)
- **React-Icons**: Ícones diversos
- **ESLint**: Linting e qualidade de código
- **TypeScript**: Tipagem estática
- **TypeScript**: Tipagem estática

## Scripts Disponíveis

- `npm run dev` — Inicia o servidor de desenvolvimento
- `npm run build` — Gera build de produção
- `npm run preview` — Visualiza build localmente
- `npm run lint` — Analisa o código com ESLint

## Arquitetura e Componentes

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
