import React from 'react';
import { HiStar } from 'react-icons/hi2';

interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Silva',
    rating: 5,
    comment: 'Os salgados da Gulla Gulla são simplesmente divinos! Sempre frescos e saborosos. Recomendo demais!'
  },
  {
    id: '2',
    name: 'João Santos',
    rating: 5,
    comment: 'Melhor coxinha do Rio! Os mini churros então... nem se fala. Pedimos toda semana!'
  },
  {
    id: '3',
    name: 'Ana Costa',
    rating: 5,
    comment: 'Atendimento excelente e entrega super rápida. Os combos valem muito a pena, economia garantida!'
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full px-6 py-2 mb-6">
            <span className="font-semibold">DEPOIMENTOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 1000 clientes satisfeitos provam a qualidade dos nossos produtos!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-orange-100"
            >
              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Cliente verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Quer fazer parte da nossa família? 🤗
            </h3>
            <p className="text-gray-600 mb-6">
              Faça seu primeiro pedido e descubra por que somos a escolha número 1 da região!
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              FAZER MEU PRIMEIRO PEDIDO 🛒
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
