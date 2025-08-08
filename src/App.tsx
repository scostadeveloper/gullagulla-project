import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ComboCard from './components/ComboCard';
import TestimonialsSection from './components/TestimonialsSection';
import NewsletterSection from './components/NewsletterSection';
import FAQModal from './components/FAQModal';
import WhatsAppFloat from './components/WhatsAppFloat';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';
import { CartProvider } from './contexts/CartContext';
import { menuData } from './data/menuData';


function App() {
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenFAQ = () => setIsFAQOpen(true);
  const handleCloseFAQ = () => setIsFAQOpen(false);
  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);


  return (
    <CartProvider>
    <div className="min-h-screen bg-white">
      <Header onOpenFAQ={handleOpenFAQ} onOpenCart={handleOpenCart} />
      <main>
        <Hero />
        {/* SESSÃO: Combos e Salgadinhos com Preço Especial */}
        <section id="combos" className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Combos e Salgadinhos <span className="text-yellow-300">com Preço Especial</span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Escolha entre combos ou salgadinhos individuais e economize! Salgados frescos, mini churros irresistíveis e muito mais.
              </p>
            </div>
            {/* SESSÃO: Salgadinhos / Mini-Churros */}
            <div className="mb-10">
              <h3 className="text-3xl font-bold mb-6 text-white text-center drop-shadow">Salgadinhos / Mini-Churros</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
                {menuData.combos
                  .filter((item) => {
                    const name = item.name.toLowerCase();
                    const items = (item.items || []).join(' ').toLowerCase();
                    if (item.id === '50-mini-churros') return true;
                    if (name.includes('+')) return false;
                    const isSalgadinho =
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
                  })
                  .sort((a, b) => a.price - b.price)
                  .map((item) => (
                    <ComboCard key={item.id} combo={item} />
                  ))}
              </div>
            </div>
            {/* SESSÃO: Combos */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white text-center drop-shadow">Combos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
                {menuData.combos
                  .filter((item) => {
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
                  })
                  .sort((a, b) => a.price - b.price)
                  .map((item) => (
                    <ComboCard key={item.id} combo={item} />
                  ))}
              </div>
            </div>
          </div>
        </section>

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

        <TestimonialsSection />

        <NewsletterSection />
      </main>
      
      <Footer />
      <WhatsAppFloat />
      
      <FAQModal 
        isOpen={isFAQOpen}
        onClose={handleCloseFAQ}
        faqs={menuData.faqs}
      />
      <CartSidebar isOpen={isCartOpen} onClose={handleCloseCart} />
    </div>
    </CartProvider>
  );
}

export default App;
