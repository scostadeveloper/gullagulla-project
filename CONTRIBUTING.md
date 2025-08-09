# Guia de Contribuição - GullaGulla React

Obrigado por considerar contribuir com o projeto GullaGulla! Este guia ajudará você a entender como contribuir de forma efetiva.

## 📋 Índice

- [Código de Conduta](#código-de-conduta)
- [Como Posso Contribuir?](#como-posso-contribuir)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Padrões de Desenvolvimento](#padrões-de-desenvolvimento)
- [Processo de Pull Request](#processo-de-pull-request)
- [Styleguide](#styleguide)

## 🤝 Código de Conduta

Este projeto adere a um código de conduta. Ao participar, você deve manter este código. Por favor, reporte comportamentos inaceitáveis.

## 🚀 Como Posso Contribuir?

### 🐛 Reportando Bugs

Bugs são rastreados como [GitHub Issues](../../issues). Quando criar um issue de bug, inclua:

- **Título claro e descritivo**
- **Passos para reproduzir** o problema
- **Comportamento esperado** vs **comportamento atual**
- **Screenshots** se aplicável
- **Ambiente** (OS, navegador, versão)

**Exemplo de template para bug:**
```markdown
**Descrição do Bug**
Descrição clara e concisa do que está acontecendo.

**Como Reproduzir**
1. Vá para '...'
2. Clique em '...'
3. Role para baixo até '...'
4. Veja o erro

**Comportamento Esperado**
Descrição clara do que deveria acontecer.

**Screenshots**
Se aplicável, adicione screenshots.

**Ambiente:**
- OS: [ex: Windows 11]
- Navegador: [ex: Chrome 115]
- Dispositivo: [ex: iPhone 12, Desktop]
```

### 💡 Sugerindo Melhorias

Melhorias também são rastreadas como [GitHub Issues](../../issues). Quando criar um issue de melhoria:

- **Use título claro e descritivo**
- **Forneça descrição detalhada** da melhoria sugerida
- **Explique por que** esta melhoria seria útil
- **Inclua mockups** se for mudança visual

### 🔧 Contribuições de Código

## ⚙️ Configuração do Ambiente

1. **Fork** o repositório
2. **Clone** seu fork localmente:
   ```bash
   git clone https://github.com/SEU_USERNAME/gullagulla-react.git
   cd gullagulla-react
   ```

3. **Instale** as dependências:
   ```bash
   npm install
   ```

4. **Execute** o ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```

5. **Crie** uma branch para sua feature:
   ```bash
   git checkout -b feature/nome-da-feature
   ```

## 📏 Padrões de Desenvolvimento

### 🗂️ **Estrutura de Arquivos**

```
src/
├── components/          # Componentes reutilizáveis
│   ├── icons/          # Ícones SVG customizados
│   └── [Component].tsx # PascalCase para componentes
├── contexts/           # Context API
├── data/              # Dados estáticos
├── types/             # Tipos TypeScript
└── utils/             # Funções utilitárias
```

### 🎯 **Convenções de Nomenclatura**

- **Componentes**: PascalCase (`CheckoutModal.tsx`)
- **Hooks customizados**: camelCase com "use" (`useCart.ts`)
- **Tipos**: PascalCase (`CustomerInfo`)
- **Constantes**: SCREAMING_SNAKE_CASE (`API_BASE_URL`)
- **Variáveis/Funções**: camelCase (`handleSubmit`)

### 🔧 **Padrões de Código**

#### **Componentes React**
```tsx
import React from 'react';
import type { Props } from '../types';

interface ComponentProps {
  title: string;
  onClick: () => void;
}

const Component: React.FC<ComponentProps> = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className="btn-primary">
      {title}
    </button>
  );
};

export default Component;
```

#### **Context API**
```tsx
import React, { createContext, useContext, useReducer } from 'react';
import type { State, Action } from '../types';

const Context = createContext<ContextType | undefined>(undefined);

export const useCustomHook = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useCustomHook must be used within Provider');
  }
  return context;
};
```

#### **TypeScript**
```tsx
// Prefira interfaces para objetos
interface User {
  id: string;
  name: string;
  email?: string; // Opcional
}

// Use types para unions e primitivos
type Status = 'pending' | 'success' | 'error';
type ID = string | number;

// Exporte tipos quando necessário
export type { User, Status };
```

### 🎨 **Estilos CSS/Tailwind**

```tsx
// ✅ Bom - Classes organizadas e legíveis
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">

// ❌ Evitar - Classes muito longas em uma linha
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 mb-4">

// ✅ Melhor - Quebrar linhas quando necessário
<div className={`
  flex items-center justify-between p-4 
  bg-white rounded-lg shadow-md hover:shadow-lg 
  transition-shadow duration-200 border border-gray-200 mb-4
`}>
```

### 🧪 **Testes** (Quando implementados)

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Component from './Component';

describe('Component', () => {
  it('should render correctly', () => {
    render(<Component title="Test" onClick={jest.fn()} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const mockClick = jest.fn();
    render(<Component title="Test" onClick={mockClick} />);
    fireEvent.click(screen.getByText('Test'));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
```

## 🔄 Processo de Pull Request

1. **Certifique-se** de que sua branch está atualizada:
   ```bash
   git checkout main
   git pull origin main
   git checkout feature/sua-feature
   git merge main
   ```

2. **Execute** os testes e linting:
   ```bash
   npm run lint
   npm run build
   ```

3. **Commit** suas mudanças com mensagens descritivas:
   ```bash
   git commit -m "feat: adiciona sistema de notificações
   
   - Implementa toast notifications
   - Adiciona tipos para diferentes tipos de notificação
   - Integra com Context API para estado global"
   ```

4. **Push** para sua branch:
   ```bash
   git push origin feature/sua-feature
   ```

5. **Abra** um Pull Request com:
   - Título claro
   - Descrição detalhada das mudanças
   - Screenshots se houver mudanças visuais
   - Checklist de testes realizados

### 📝 **Template de Pull Request**

```markdown
## 📋 Descrição
Breve descrição das mudanças implementadas.

## 🎯 Tipo de Mudança
- [ ] Bug fix (mudança que corrige um issue)
- [ ] Nova feature (mudança que adiciona funcionalidade)
- [ ] Breaking change (mudança que quebra compatibilidade)
- [ ] Documentação

## 🧪 Como Testar
1. Acesse a página X
2. Clique no botão Y
3. Verifique se Z acontece

## 📸 Screenshots
Se aplicável, adicione screenshots das mudanças.

## ✅ Checklist
- [ ] Meu código segue os padrões do projeto
- [ ] Realizei auto-review do meu código
- [ ] Comentei partes complexas do código
- [ ] Minhas mudanças não quebram funcionalidades existentes
- [ ] Adicionei testes que provam que minha correção/feature funciona
- [ ] Testes novos e existentes passam
```

## 🎨 Styleguide

### **Commits Convencionais**

Use o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé opcional]
```

**Tipos:**
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Mudanças na documentação
- `style`: Mudanças que não afetam a lógica (formatação, etc)
- `refactor`: Mudanças de código que não corrigem bugs nem adicionam features
- `perf`: Mudanças que melhoram performance
- `test`: Adição ou correção de testes
- `chore`: Mudanças nas ferramentas de build, CI, etc

**Exemplos:**
```
feat(cart): adiciona funcionalidade de cupom de desconto
fix(checkout): corrige validação de CEP
docs: atualiza README com novas instruções
style(header): melhora responsividade em mobile
```

### **Organização de Imports**

```tsx
// 1. React e hooks
import React, { useState, useEffect } from 'react';

// 2. Bibliotecas externas
import { HiShoppingCart } from 'react-icons/hi2';

// 3. Imports internos - contextos
import { useCart } from '../contexts/CartContext';

// 4. Imports internos - componentes
import Button from './Button';

// 5. Imports internos - tipos
import type { Product } from '../types';

// 6. Imports de dados/constantes
import { menuData } from '../data/menuData';
```

## 🆘 Precisa de Ajuda?

- **Documentação**: Consulte o README.md
- **Issues**: Procure por issues similares
- **Discussões**: Use GitHub Discussions para perguntas
- **Contact**: Entre em contato com os mantenedores

## 🎉 Reconhecimento

Todos os contribuidores serão reconhecidos! Suas contribuições ajudam a tornar este projeto melhor para todos.

---

**Obrigado por contribuir! 🚀**
