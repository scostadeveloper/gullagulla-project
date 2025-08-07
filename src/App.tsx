import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ComboCard from './components/ComboCard';
import CategoryTabs from './components/CategoryTabs';
import ProductCard from './components/ProductCard';
import TestimonialsSection from './components/TestimonialsSection';
import NewsletterSection from './components/NewsletterSection';
import FAQModal from './components/FAQModal';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';
import { menuData } from './data/menuData';
import type { Product } from './types';

function App() {
  const [activeCategory, setActiveCategory] = useState('salgados-tradicionais');
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const products = menuData.products.filter(
      product => product.category === activeCategory
    );
    setFilteredProducts(products);
  }, [activeCategory]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleOpenFAQ = () => {
    setIsFAQOpen(true);
  };

  const handleCloseFAQ = () => {
    setIsFAQOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenFAQ={handleOpenFAQ} />
      
      <main>
        <Hero />
        
        {/* Seção de Combos */}
        <section id="combos" className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <span className="text-yellow-300 text-2xl mr-2">🔥</span>
                <span className="font-semibold text-lg">COMBOS ESPECIAIS</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Combos que <span className="text-yellow-300">Economizam</span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Monte seu combo perfeito e economize até R$ 8,00! 
                Salgados frescos + mini churros irresistíveis
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {menuData.combos.map((combo) => (
                <ComboCard key={combo.id} combo={combo} />
              ))}
            </div>
          </div>
        </section>

        {/* Seção do Menu */}
        <section id="menu" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full px-6 py-2 mb-6">
                <span className="font-semibold">FEITOS COM AMOR</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
                Nosso <span className="text-gradient">Cardápio</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Salgados artesanais feitos frescos todos os dias e mini churros irresistíveis para adoçar seu dia
              </p>
            </div>
            
            <CategoryTabs 
              categories={menuData.categories.map(cat => cat.name)}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">😋</div>
                <p className="text-xl text-gray-400">
                  Produtos deliciosos estão chegando nesta categoria!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Seção de Valores e Qualidade */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full px-6 py-2 mb-6">
                <span className="font-semibold">NOSSOS VALORES</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
                Por que escolher a <span className="text-gradient">GullaGulla?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Mais que salgados, oferecemos experiências inesquecíveis em cada mordida
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl mb-4">🥇</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Qualidade Premium</h3>
                <p className="text-gray-600">Ingredientes selecionados e receitas artesanais desenvolvidas com carinho</p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Sempre Frescos</h3>
                <p className="text-gray-600">Todos os produtos são feitos no dia para garantir sabor e qualidade únicos</p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl mb-4">🚚</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Entrega Rápida</h3>
                <p className="text-gray-600">Delivery ágil e cuidadoso para você receber seus salgados quentinhos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Depoimentos */}
        <TestimonialsSection />

        {/* Seção de Newsletter */}
        <NewsletterSection />
      </main>
      
      <Footer />
      <WhatsAppFloat />
      
      <FAQModal 
        isOpen={isFAQOpen}
        onClose={handleCloseFAQ}
        faqs={menuData.faqs}
      />
    </div>
  );
}

export default App;
