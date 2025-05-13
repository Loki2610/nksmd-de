
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-architect-dark py-10 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold text-white">Nikolaus Schmid</p>
            <p className="text-sm">Mitglied der Bayerischen Architektenkammer</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-sm">
            <a href="#services" className="hover:text-white">Leistungen</a>
            <a href="#projects" className="hover:text-white">Projekte</a>
            <a href="#about" className="hover:text-white">Über mich</a>
            <a href="#contact" className="hover:text-white">Kontakt</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {currentYear} Nikolaus Schmid. Alle Rechte vorbehalten.</p>
          <div className="mt-4 md:mt-0 text-sm">
            <a href="#" className="hover:text-white mr-6">Datenschutz</a>
            <a href="#" className="hover:text-white">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
