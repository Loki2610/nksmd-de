import React from 'react';
import { ArrowRight } from 'lucide-react';
const HeroSection = () => {
  return <section id="hero" className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-architect-dark leading-tight">
                Architektonische Expertise für Ihr Bauunternehmen
              </h1>
              <p className="mt-6 text-lg text-architect-muted max-w-2xl mx-auto lg:mx-0">Spezialisiert auf Planung und Genehmigungsmanagement für Bauunternehmen, Fertighaushersteller und Generalunternehmer. Mit über 10 Jahren Erfahrung und erfolgreichen Projekten in Deutschland und Österreich.</p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact" className="cta-button group">
                  Projekt besprechen
                  <ArrowRight className="inline-block ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#services" className="text-architect-dark border border-gray-300 hover:border-architect-dark font-semibold py-3 px-8 rounded-md transition-all duration-200 inline-block text-center">
                  Mehr erfahren
                </a>
              </div>
              <div className="mt-8 text-architect-muted text-sm">
                <p className="font-semibold">Mitglied der Bayerischen Architektenkammer</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative h-80 w-80 lg:h-96 lg:w-96 rounded-lg overflow-hidden shadow-xl">
              <img src="/lovable-uploads/b48c43c7-719a-4304-8835-9d9da7bff6b1.png" alt="Portrait des Architekten" className="object-cover h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;