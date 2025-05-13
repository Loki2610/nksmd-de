
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return <header className="bg-white py-6 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 
              className="text-3xl font-bold text-architect-dark cursor-pointer" 
              onClick={scrollToTop}
            >
              <span className="">NKSMD</span>
            </h1>
            
            <div className="hidden md:flex items-center ml-6 text-sm text-architect-muted">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Bayern, Deutschland</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="#services" className="text-sm font-medium text-architect-dark hover:text-architect-accent">
              Leistungen
            </a>
            <a href="#projects" className="text-sm font-medium text-architect-dark hover:text-architect-accent">
              Projekte
            </a>
            <a href="#about" className="text-sm font-medium text-architect-dark hover:text-architect-accent">
              Über mich
            </a>
          </nav>
          
          <Button asChild className="bg-architect-dark hover:bg-opacity-90 text-white">
            <a href="#contact">Kontakt</a>
          </Button>
        </div>
      </div>
    </header>;
};

export default Header;
