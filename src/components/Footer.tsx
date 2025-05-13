import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-architect-dark py-10 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold text-white">NKSMD</p>
            <p className="text-sm">Architektonische Expertise für Ihr Bauunternehmen </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-sm">
            <a href="#services" className="hover:text-white">Leistungen</a>
            <a href="#projects" className="hover:text-white">Referenzen</a>
            <a href="#about" className="hover:text-white">Über mich</a>
            <a href="#contact" className="hover:text-white">Kontakt</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {currentYear} NKSMD. Alle Rechte vorbehalten.</p>
          <div className="mt-4 md:mt-0 text-sm">
            <Link to="/impressum" className="hover:text-white mr-6">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;