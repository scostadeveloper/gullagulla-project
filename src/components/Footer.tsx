import React from 'react';
import { HiMapPin, HiPhone, HiClock } from 'react-icons/hi2';

const Footer: React.FC = () => {
  return (
  <footer className="bg-gray-100 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/logotipo.png" 
                alt="Gulla Gulla Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-2xl font-bold text-orange-400 tracking-tight" style={{ fontFamily: "'Playwrite AU QLD', cursive" }}>Gulla Gulla</h3>
                <p className="text-sm text-gray-400">Fábrica de Salgados</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Os melhores salgados, mini churros e bolos da região. 
              Tradição familiar em cada receita.<br/>
              Entregamos e atendemos em todo o Bairro Urucânia e adjacências.<br/>
              <span className="text-orange-400 font-semibold">Atendemos encomendas de grandes quantidades para festas, empresas e eventos!</span>
            </p>
          </div>

          {/* Localização */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Nossas Lojas</h4>
            <div className="space-y-4 text-sm">
              {/* Loja 1 */}
              <div>
                <h5 className="font-semibold text-orange-400 mb-2">Loja 1 - Cilon Cunha Brum</h5>
                <div className="flex items-start space-x-3 mb-2">
                  <HiMapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-400">
                    R. Cilon Cunha Brum, 225<br />
                    Paciência, Rio de Janeiro - RJ<br />
                    CEP: 23573-400
                  </p>
                </div>
              </div>
              
              {/* Loja 2 */}
              <div>
                <h5 className="font-semibold text-orange-400 mb-2">Loja 2 - José Piauhy Dourado</h5>
                <div className="flex items-start space-x-3 mb-3">
                  <HiMapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-400">
                    Rua José Piauhy Dourado, 253<br />
                    Paciência, Rio de Janeiro - RJ<br />
                    CEP: 23573-040
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 pt-2 border-t border-gray-700">
                <HiPhone className="w-4 h-4 text-orange-400 flex-shrink-0" />
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
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Funcionamento</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-3 mb-3">
                <HiClock className="w-5 h-5 text-orange-400 flex-shrink-0" />
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
            <div className="mt-4 md:mt-0">
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
