
import todosIcon from './icons/todosIcon.png';
import salgadinhosIcon from './icons/salgadinhosIcon.png';
import churroIcon from './icons/churroIcon.png';
import comboIcon from './icons/comboIcon.png';
import bebidasIcon from './icons/BebidasIcon.png';
import React from 'react';


interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  const getPngIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'todos':
        return todosIcon;
      case 'salgadinhos':
      case 'salgados':
        return salgadinhosIcon;
      case 'churros':
      case 'doces':
        return churroIcon;
      case 'bebidas':
        return bebidasIcon;
      case 'combos':
        return comboIcon;
      default:
        return todosIcon;
    }
  };

  return (
    <section className="w-full flex justify-center py-4 px-2 sm:px-4">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border transition-all duration-200 text-xs sm:text-sm font-medium uppercase tracking-wide min-w-[80px] sm:min-w-[90px] justify-center
                ${isActive
                  ? 'bg-gradient-to-r from-orange-100 to-orange-300 border-orange-400 text-orange-700 shadow-md scale-105'
                  : 'bg-white/80 border-gray-200 text-gray-700 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 hover:scale-102'}
              `}
            >
              <img 
                src={getPngIcon(category)} 
                alt={category + ' ícone'} 
                className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 object-contain ${isActive ? 'scale-110' : 'opacity-80 group-hover:opacity-100'} transition-all duration-200`} 
                draggable={false}
              />
              <span className="hidden xs:inline sm:inline">{category}</span>
              <span className="xs:hidden sm:hidden text-[10px]">{category.slice(0, 4)}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryTabs;