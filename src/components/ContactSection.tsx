
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Anfrage gesendet",
      description: "Vielen Dank für Ihre Nachricht! Ich werde mich in Kürze bei Ihnen melden.",
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-architect-dark">Kontakt aufnehmen</h2>
            <p className="mt-4 text-architect-muted">
              Lassen Sie uns über Ihre Projekte sprechen und wie ich Ihr Bauunternehmen unterstützen kann.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-architect-dark mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Ihr Name" required />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-architect-dark mb-1">
                    Unternehmen
                  </label>
                  <Input id="company" placeholder="Ihr Unternehmen" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-architect-dark mb-1">
                    E-Mail
                  </label>
                  <Input id="email" type="email" placeholder="ihre-email@beispiel.de" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-architect-dark mb-1">
                    Telefon
                  </label>
                  <Input id="phone" placeholder="Ihre Telefonnummer" />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-architect-dark mb-1">
                  Nachricht
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihre Anfrage..." 
                  rows={5} 
                  required 
                />
              </div>
              
              <div className="flex justify-center">
                <Button type="submit" className="cta-button text-base py-3 px-10">
                  Anfrage absenden
                </Button>
              </div>
            </form>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-architect-muted">
              Oder kontaktieren Sie mich direkt per Email unter: <br />
              <a href="mailto:info@architekt-beispiel.de" className="text-architect-accent font-medium hover:underline">
                info@architekt-beispiel.de
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
