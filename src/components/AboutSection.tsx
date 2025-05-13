
import React from 'react';
import { User, Construction, GraduationCap, Briefcase } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const AboutSection = () => {
  return <section id="about" className="py-16 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-architect-dark mb-6">Über mich</h2>
              <p className="text-lg text-architect-muted mb-4">
                Mein Name ist Nikolaus Schmid. Als freiberuflicher Architekt und Mitglied der Bayerischen Architektenkammer biete ich seit über 5 Jahren spezialisierte Architekturdienstleistungen mit Schwerpunkt Entwurfs- und Genehmigungsplanung für Bauunternehmen und Fertighaushersteller an.
              </p>
              <p className="text-lg text-architect-muted mb-4">
                Mein Fokus liegt auf der effizienten Planung und dem reibungslosen Genehmigungsmanagement von Bauprojekten, damit Sie sich voll auf die Ausführung konzentrieren können.
              </p>
              <p className="text-lg text-architect-muted">
                Die langjährige Zusammenarbeit mit renommierten Firmen wie Huf Haus und zahlreiche erfolgreich abgeschlossene Projekte in Deutschland und Österreich belegen meine Expertise und Zuverlässigkeit.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-x-16 gap-y-8 mt-8">
              <div className="flex items-start col-span-1">
                <div className="bg-architect-light p-3 rounded-lg mr-4">
                  <GraduationCap className="h-6 w-6 text-architect-accent" />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-medium text-architect-dark mb-2">Ausbildung</h3>
                  <ul className="text-architect-muted space-y-2">
                    <li>• Bachelor an der Hochschule Trier</li>
                    <li>• Master an der TU Berlin</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start col-span-1 justify-start">
                <div className="bg-architect-light p-3 rounded-lg mr-4">
                  <Briefcase className="h-6 w-6 text-architect-accent" />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-medium text-architect-dark mb-2">Berufserfahrung</h3>
                  <ul className="text-architect-muted space-y-2">
                    <li>• Scheidt Kasprusch Architekten, Berlin</li>
                    <li>• Cyrus Moser Architekten, Frankfurt</li>
                    <li>• io-consultants, Heidelberg (Generalplaner für Industriebauten)</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start col-span-1">
                <div className="bg-architect-light p-3 rounded-lg mr-4">
                  <User className="h-6 w-6 text-architect-accent" />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-medium text-architect-dark mb-2">Qualifikationen</h3>
                  <ul className="text-architect-muted space-y-2">
                    <li>• Mitglied der Bayerischen Architektenkammer</li>
                    <li>• EnergieEffizienz Experte</li>
                    <li>• Spezialisierung in Entwurfs- und Genehmigungsplanung</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start col-span-1 justify-start">
                <div className="bg-architect-light p-3 rounded-lg mr-4">
                  <Construction className="h-6 w-6 text-architect-accent" />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-medium text-architect-dark mb-2">Expertise</h3>
                  <ul className="text-architect-muted space-y-2">
                    <li>• Bauprojekte in ganz Deutschland & Österreich</li>
                    <li>• 5+ Jahre spezialisierte B2B-Erfahrung</li>
                    <li>• Effizienz- und prozessorientierte Arbeitsweise</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:mt-16">
            <div className="bg-architect-light rounded-lg overflow-hidden shadow-xl max-h-[350px]">
              <AspectRatio ratio={4/3} className="h-full">
                <img src="/lovable-uploads/b48c43c7-719a-4304-8835-9d9da7bff6b1.png" alt="Portrait von Nikolaus Schmid" className="w-full h-full object-cover" />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default AboutSection;
