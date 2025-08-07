import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Utensils, Heart } from 'lucide-react';

interface CarouselSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

const slides: CarouselSlide[] = [
  {
    id: '1',
    image: '/images/hero.jpg',
    title: 'Coxinhas Artesanais',
    subtitle: 'Feitas com muito amor',
    description: 'Experimente nossas deliciosas coxinhas feitas com ingredientes frescos e receita tradicional.',
    icon: <Utensils size={20} className="inline mr-2" />
  },
  {
    id: '2',
    image: '/images/hero1.jpg',
    title: 'Pastéis Crocantes',
    subtitle: 'Recheios especiais',
    description: 'Pastéis dourados e crocantes com os mais variados recheios para todos os gostos.',
    icon: <Heart size={20} className="inline mr-2" />
  }
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="hero-carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${
              index === currentSlide ? 'active' : ''
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
            }}
          >
            <div className="slide-content">
              <div className="content-wrapper">
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-subtitle">
                  {slide.icon}
                  {slide.subtitle}
                </p>
                <p className="slide-description">{slide.description}</p>
                <button 
                  className="cta-button"
                  onClick={() => {
                    const message = `Olá! Vi o banner "${slide.title}" e gostaria de fazer um pedido!`;
                    const whatsappUrl = `https://wa.me/5521976958970?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  Peça Agora
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navegação */}
      <button 
        className="carousel-nav prev" 
        onClick={goToPrevious}
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        className="carousel-nav next" 
        onClick={goToNext}
        aria-label="Próximo slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicadores */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${
              index === currentSlide ? 'active' : ''
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;