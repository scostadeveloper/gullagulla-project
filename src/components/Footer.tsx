import React from 'react';
import { HiMapPin, HiPhone, HiClock } from 'react-icons/hi2';

interface FooterProps {
  onOpenFAQ: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenFAQ }) => {
  return (
  <footer className="bg-gray-100 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <img 
                src="/images/logotipo.png" 
                alt="Gulla Gulla Logo" 
                className="h-8 sm:h-10 w-auto"
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-orange-400 tracking-tight" style={{ fontFamily: "'Playwrite AU QLD', cursive" }}>Gulla Gulla</h3>
                <p className="text-xs sm:text-sm text-gray-400">Fábrica de Salgados</p>
              </div>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              <span className="sm:hidden">Salgados, churros e bolos da região. <span className="text-orange-400 font-semibold">Festas e eventos!</span></span>
              <span className="hidden sm:block">
                Os melhores salgados, mini churros e bolos da região. 
                Tradição familiar em cada receita.<br className="hidden sm:block"/>
                Entregamos e atendemos em todo o Bairro Urucânia e adjacências.<br className="hidden sm:block"/>
                <span className="text-orange-400 font-semibold">Atendemos encomendas de grandes quantidades para festas, empresas e eventos!</span>
              </span>
            </p>
          </div>

          {/* Localização - Simplified for mobile */}
          <div className="sm:block">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-orange-400">
              <span className="sm:hidden">Contato</span>
              <span className="hidden sm:inline">Nossas Lojas</span>
            </h4>
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
              {/* Loja 1 - Simplified for mobile */}
              <div>
                <h5 className="font-semibold text-orange-400 mb-1 sm:mb-2 text-sm sm:text-base">
                  <span className="sm:hidden">Loja 1</span>
                  <span className="hidden sm:inline">Loja 1 - Cilon Cunha Brum</span>
                </h5>
                <div className="flex items-start space-x-2 sm:space-x-3 mb-2">
                  <HiMapPin className="w-3 sm:w-4 h-3 sm:h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-400">
                    <span className="sm:hidden">R. Cilon Cunha Brum, 225 - Paciência</span>
                    <span className="hidden sm:block">
                      R. Cilon Cunha Brum, 225<br />
                      Paciência, Rio de Janeiro - RJ<br />
                      CEP: 23573-400
                    </span>
                  </p>
                </div>
              </div>
              
              {/* Loja 2 - Hidden on small mobile, simplified on larger */}
              <div className="hidden xs:block">
                <h5 className="font-semibold text-orange-400 mb-1 sm:mb-2 text-sm sm:text-base">
                  <span className="sm:hidden">Loja 2</span>
                  <span className="hidden sm:inline">Loja 2 - José Piauhy Dourado</span>
                </h5>
                <div className="flex items-start space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                  <HiMapPin className="w-3 sm:w-4 h-3 sm:h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-400">
                    <span className="sm:hidden">R. José Piauhy Dourado, 253 - Paciência</span>
                    <span className="hidden sm:block">
                      Rua José Piauhy Dourado, 253<br />
                      Paciência, Rio de Janeiro - RJ<br />
                      CEP: 23573-040
                    </span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 sm:space-x-3 pt-2 border-t border-gray-700">
                <HiPhone className="w-3 sm:w-4 h-3 sm:h-4 text-orange-400 flex-shrink-0" />
                <a 
                  href="tel:+5521976958970" 
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                >
                  (21) 97695-8970
                </a>
              </div>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-orange-400">Funcionamento</h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                <HiClock className="w-4 sm:w-5 h-4 sm:h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-400">Horários de Atendimento</span>
              </div>
              
              <div className="space-y-1 ml-8">
                <div className="flex justify-between">
                  <span className="text-gray-400">Segunda a Sexta:</span>
                  <span className="text-gray-400">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sábado:</span>
                  <span className="text-gray-400">08:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Domingo:</span>
                  <span className="text-red-400">Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória e Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 GullaGulla. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <button
                onClick={onOpenFAQ}
                className="text-orange-400 hover:text-orange-300 transition-colors duration-200 text-sm font-medium"
              >
                FAQ →
              </button>
              <a 
                href="#localizacao" 
                className="text-orange-400 hover:text-orange-300 transition-colors duration-200 text-sm font-medium"
              >
                Ver no Mapa →
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
