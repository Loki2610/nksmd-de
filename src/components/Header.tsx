import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";

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
          {/* Left section with logo and location */}
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-architect-dark cursor-pointer" onClick={scrollToTop}>
              <span className="">NKSMD</span>
            </h1>
            
            <div className="hidden md:flex items-center ml-6 mr-10 text-sm text-architect-muted">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Lindau, Deutschland</span>
            </div>
          </div>
          
          {/* Center section with navigation links */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-10">
              <a href="#services" className="text-sm font-medium text-architect-dark hover:text-architect-accent">
                Leistungen
              </a>
              <a href="#projects" className="text-sm font-medium text-architect-dark hover:text-architect-accent">
                Referenzen
              </a>
              <a href="#about" className="text-sm font-medium text-architect-dark hover:text-architect-accent">
                Über mich
              </a>
            </div>
          </div>
          
          {/* Right section with contact info and button */}
          <nav className="hidden md:flex items-center">
            <div className="hidden lg:flex items-center space-x-6 text-sm text-architect-muted mr-6">
              <a href="mailto:hallo@nksmd.de" className="flex items-center hover:text-architect-accent">
                <Mail className="h-4 w-4 mr-1" />
                <span>hallo@nksmd.de</span>
              </a>
              <a href="tel:+4915566008115" className="flex items-center hover:text-architect-accent">
                <Phone className="h-4 w-4 mr-1" />
                <span>+49 155 66008115</span>
              </a>
            </div>
            
            <Button asChild className="bg-architect-dark hover:bg-opacity-90 text-white">
              <a href="#contact">Kontakt</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>;
};

export default Header;
