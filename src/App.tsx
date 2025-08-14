import { useState, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuItemCard from './components/MenuItemCard';
import CategoryTabs from './components/CategoryTabs';
import { CartProvider } from './contexts/CartContext';
import { menuData } from './data/menuData';

// Lazy loading para componentes menos críticos
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const StoreMap = lazy(() => import('./components/StoreMap'));
const FAQModal = lazy(() => import('./components/FAQModal'));
const WhatsAppFloat = lazy(() => import('./components/WhatsAppFloat'));
const CartSidebar = lazy(() => import('./components/CartSidebar'));
const Footer = lazy(() => import('./components/Footer'));


function App() {
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Todos');

  const handleOpenFAQ = () => setIsFAQOpen(true);
  const handleCloseFAQ = () => setIsFAQOpen(false);
  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  const categories = ['Todos', 'Salgadinhos', 'Churros', 'Combos', 'Bebidas'];

  // Função para filtrar salgadinhos
  const getSalgadinhos = () => {
    return menuData.combos.filter((item) => {
      const name = item.name.toLowerCase();
      const items = (item.items || []).join(' ').toLowerCase();
      if (item.id === '50-mini-churros') return false;
      const isSalgadinho =
        !name.includes('+') &&
        !name.includes('churros') &&
        !name.includes('pastel') &&
        !name.includes('refri') &&
        !name.includes('coca') &&
        !name.includes('bebida') &&
        !items.includes('churros') &&
        !items.includes('pastel') &&
        !items.includes('refri') &&
        !items.includes('coca') &&
        !items.includes('bebida');
      return isSalgadinho;
    });
  };

  // Função para filtrar churros
  const getChurros = () => {
    return menuData.combos.filter((item) => item.id === '50-mini-churros');
  };

  // Função para filtrar combos
  const getCombos = () => {
    return menuData.combos.filter((item) => {
      if (item.id === '50-salgadinhos-10-pasteis') return true;
      const name = item.name.toLowerCase();
      const items = (item.items || []).join(' ').toLowerCase();
      const isCombo =
        name.includes('+') ||
        name.includes('churros') ||
        name.includes('pastel') ||
        name.includes('refri') ||
        name.includes('coca') ||
        name.includes('bebida') ||
        items.includes('churros') ||
        items.includes('pastel') ||
        items.includes('refri') ||
        items.includes('coca') ||
        items.includes('bebida');
      if (item.id === '50-mini-churros') return false;
      return isCombo;
    });
  };

  // Função para filtrar bebidas
  const getBebidas = () => {
    return menuData.products.filter((product) => product.category === 'Bebidas');
  };

  // Função para obter itens filtrados
  const getFilteredItems = () => {
    switch (activeCategory) {
      case 'Salgadinhos':
        return { combos: getSalgadinhos(), products: [] };
      case 'Churros':
        return { combos: getChurros(), products: [] };
      case 'Combos':
        return { combos: getCombos(), products: [] };
      case 'Bebidas':
        return { combos: [], products: getBebidas() };
      default: // 'Todos'
        return { 
          combos: [...getSalgadinhos(), ...getChurros(), ...getCombos()], 
          products: getBebidas() 
        };
    }
  };

  const filteredItems = getFilteredItems();


  return (
    <CartProvider>
    <div className="min-h-screen bg-white">
      <Header onOpenCart={handleOpenCart} />
      <main>
        <Hero />
        {/* SESSÃO: Cardápio com Filtros */}
        <section id="combos" className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Nosso <span className="text-yellow-300">Cardápio</span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Escolha entre combos, salgadinhos individuais, churros e bebidas! Salgados frescos e muito mais.
              </p>
            </div>

            {/* Filtros de Categoria */}
            <div className="mb-10">
              <CategoryTabs
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>

            {/* Grid de Itens Filtrados */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr">
              {filteredItems.combos
                .sort((a, b) => a.price - b.price)
                .map((item) => (
                  <MenuItemCard key={item.id} item={item} type="combo" />
                ))}
              {filteredItems.products
                .sort((a, b) => a.price - b.price)
                .map((product) => (
                  <MenuItemCard key={product.id} item={product} type="product" />
                ))}
            </div>
          </div>
        </section>

        <section className="hidden sm:block py-20 bg-gradient-to-br from-gray-50 to-orange-50">
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                <p className="text-gray-600">Entregamos em todo o Bairro Urucânia e adjacências</p>
              </div>
            </div>
          </div>
        </section>

        <Suspense fallback={<div className="py-20 flex justify-center items-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div></div>}>
          <TestimonialsSection />
        </Suspense>

        {/* SESSÃO: Localização da Loja */}
        <section id="localizacao" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Venha nos <span className="text-orange-600">Visitar</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Atendemos e entregamos em todo o Bairro Urucânia e adjacências, com os melhores salgados e mini churros da região.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Suspense fallback={<div className="py-8 flex justify-center items-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div></div>}>
                <StoreMap />
              </Suspense>
            </div>
          </div>
        </section>
      </main>
      
      <Suspense fallback={<div></div>}>
        <Footer onOpenFAQ={handleOpenFAQ} />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <WhatsAppFloat />
      </Suspense>
      
      <Suspense fallback={<div></div>}>
        <FAQModal 
          isOpen={isFAQOpen}
          onClose={handleCloseFAQ}
          faqs={menuData.faqs}
        />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <CartSidebar isOpen={isCartOpen} onClose={handleCloseCart} />
      </Suspense>
    </div>
    </CartProvider>
  );
}

export default App;
