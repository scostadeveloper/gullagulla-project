import React from 'react';
import { Button } from 'flowbite-react';
import { SalgadoIcon, DoceIcon, BebidaIcon } from './icons';

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
  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'especiais':
      case 'salgados':
        return <SalgadoIcon />;
      case 'doces':
        return <DoceIcon />;
      case 'bebidas':
        return <BebidaIcon />;
      default:
        return <SalgadoIcon />;
    }
  };

  return (
    <section className="bg-white py-8 shadow-sm border border-gray-100 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`
                relative px-6 py-4 min-w-[120px] rounded-xl transition-all duration-300 transform hover:scale-105 border-2
                ${activeCategory === category
                  ? 'btn-gradient text-white border-primary-500 shadow-lg'
                  : 'bg-white text-gray-700 border-gray-300 hover:shadow-md hover:border-primary-300'
                }
              `}
              size="lg"
            >
              <div className="flex flex-col items-center space-y-2">
                <div className={`text-2xl ${activeCategory === category ? 'text-white' : 'text-primary-500'}`}>
                  {getIcon(category)}
                </div>
                <span className="font-semibold text-sm uppercase tracking-wide">
                  {category}
                </span>
              </div>
              
              {activeCategory === category && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-secondary-500 rounded-full"></div>
              )}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTabs;