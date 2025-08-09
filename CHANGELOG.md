# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [2.1.0] - 2025-08-08

### 🆕 Adicionado
- **Sistema de Múltiplas Lojas**: Componente StoreMap atualizado para suportar duas unidades
- **Seletor de Lojas**: Interface para alternar entre as duas lojas
- **Navegação Individual**: Botões específicos para cada loja no Google Maps e Waze
- **Endereços Atualizados**: 
  - Loja 1: R. Cilon Cunha Brum, 225 - Paciência, RJ, 23573-400
  - Loja 2: Rua José Piauhy Dourado, 253 - Paciência, RJ, 23573-040

### 🔄 Modificado
- Footer atualizado com informações das duas lojas
- Documentação README com detalhes das múltiplas unidades
- Interface do mapa com seletor visual de lojas

### 🗑️ Removido
- **Seção de Newsletter** removida completamente do projeto
- **Oferta Especial de 10% OFF** removida da interface
- Componente NewsletterSection.tsx deletado

## [2.0.0] - 2025-08-08

### 🚀 Adicionado
- **Sistema de E-commerce Completo**
  - Carrinho de compras com Context API e useReducer
  - Persistência automática no localStorage
  - Cálculos dinâmicos de frete e total
  - Interface responsiva para carrinho

- **Checkout Avançado**
  - Modal de checkout com múltiplos steps
  - Formulário completo de dados do cliente
  - Validação de campos obrigatórios
  - Sistema de progresso visual

- **Múltiplas Formas de Pagamento**
  - PIX com QR Code automático
  - Cartão de Crédito na entrega
  - Cartão de Débito na entrega
  - Dinheiro na entrega
  - Retirada na loja (frete grátis)

- **PIX Integrado**
  - Geração automática de QR Code
  - Código copy-paste para bancos
  - Sistema de expiração (30 minutos)
  - Confirmação manual de pagamento

- **WhatsApp Avançado**
  - Sistema anti-bloqueador com 4 níveis de fallback
  - Envio automático com timer de 5 segundos
  - Mensagens estruturadas com dados completos do pedido
  - Controle de estado para evitar duplicações

- **Melhorias de UX**
  - Contador de itens no header
  - Animações suaves em modais e transições
  - Feedback visual para todas as ações
  - Loading states em operações assíncronas

### 🔄 Modificado
- **Header**: Integrado botão do carrinho substituindo "PEDIR AGORA"
- **ComboCard/ProductCard**: Botões agora adicionam ao carrinho
- **Context API**: Implementado gerenciamento de estado global
- **Tipos TypeScript**: Expandidos para suportar carrinho e pagamentos

### ❌ Removido
- **Flowbite**: Removido completamente para melhor controle de design
- **Links diretos WhatsApp**: Substituídos pelo sistema de carrinho
- **Dependências desnecessárias**: Limpeza do package.json

### 🐛 Corrigido
- **Modais**: Posicionamento centralizado e fundo desfocado
- **Responsividade**: Melhorias em dispositivos móveis
- **Performance**: Otimizações em re-renders desnecessários

## [1.0.0] - 2025-08-07

### 🚀 Adicionado
- **Projeto Base**
  - Estrutura inicial com React + TypeScript + Vite
  - TailwindCSS para estilização
  - Componentes base da interface

- **Cardápio Digital**
  - Sistema de categorias com filtros
  - Cards de produtos e combos
  - Integração básica com WhatsApp

- **Interface Institucional**
  - Hero section com carrossel
  - Seção de depoimentos
  - Newsletter e FAQ
  - Footer informativo

- **Componentes**
  - Header com navegação
  - Ícones customizados SVG
  - Modal de FAQ
  - Botão flutuante WhatsApp

### 📱 **Mobile First**
- Design responsivo otimizado para dispositivos móveis
- Touch-friendly interface
- Performance otimizada

---

## 🎯 Próximas Versões

### [2.1.0] - Planejado
- [ ] Dashboard administrativo
- [ ] Integração com API de pagamentos
- [ ] Sistema de cupons de desconto
- [ ] Histórico de pedidos do cliente
- [ ] Notificações push
- [ ] Analytics e métricas

### [2.2.0] - Futuro
- [ ] App mobile nativo
- [ ] Programa de fidelidade
- [ ] Delivery tracking
- [ ] Chat integrado
- [ ] Pagamento via cartão online

---

## 📊 **Estatísticas de Desenvolvimento**

- **Commits**: 50+
- **Componentes**: 15+
- **Tipos TypeScript**: 10+
- **Testes**: Em desenvolvimento
- **Cobertura**: A definir

---

## 🤝 **Contribuidores**

- **Desenvolvimento**: Equipe GitHub Copilot + Digital Fusion
- **Design**: Baseado em UX moderno para food delivery
- **Testes**: Comunidade e feedback de usuários
