import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { HiEnvelope } from 'react-icons/hi2';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-white rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Fique por dentro das <span className="text-yellow-300">Novidades</span>!
        </h2>
        
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Cadastre seu e-mail e seja o primeiro a saber das nossas promoções especiais e novos sabores!
        </p>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <HiEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu melhor e-mail"
                  className="w-full pl-12 pr-4 py-4 rounded-full text-gray-800 font-medium focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30"
                  required
                />
              </div>
              <Button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                CADASTRAR E-MAIL
              </Button>
            </div>
          </form>
        ) : (
          <div className="bg-green-500 bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold mb-2">Parabéns!</h3>
            <p className="text-lg opacity-90">
              Você está cadastrado! Agora você receberá nossas novidades e promoções.
            </p>
          </div>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm opacity-80">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-yellow-300 rounded-full mr-2"></span>
            Sem spam, prometido!
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-yellow-300 rounded-full mr-2"></span>
            Promoções exclusivas
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-yellow-300 rounded-full mr-2"></span>
            Pode cancelar a qualquer momento
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
