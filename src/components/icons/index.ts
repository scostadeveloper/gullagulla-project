export { default as SalgadoIcon } from './SalgadoIcon';
export { default as DoceIcon } from './DoceIcon';
export { default as EstrelaIcon } from './EstrelaIcon';
export { default as BebidaIcon } from './BebidaIcon';
export { default as ChurrosIcon } from './ChurrosIcon';

// Importações para o mapeamento
import SalgadoIcon from './SalgadoIcon';
import EstrelaIcon from './EstrelaIcon';
import BebidaIcon from './BebidaIcon';
import DoceIcon from './DoceIcon';

// Mapeamento de categorias para ícones
export const categoryIcons = {
  'salgados': SalgadoIcon,
  'especiais': EstrelaIcon,
  'bebidas': BebidaIcon,
  'doces': DoceIcon,
} as const;

export type CategoryIconKey = keyof typeof categoryIcons;