import React from 'react';
import { User, Construction, GraduationCap, Briefcase } from "lucide-react";
const AboutSection = () => {
  return <section id="about" className="py-16 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="bg-architect-light p-3 rounded-lg mr-4">
                  <GraduationCap className="h-6 w-6 text-architect-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-architect-dark mb-2">Ausbildung</h3>
                  <ul className="text-architect-muted space-y-2">
                    <li>• Bachelor an der Hochschule Trier</li>
                    <li>• Master an der TU Berlin</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-architect-light p-3 rounded-lg mr-4">
                  <Briefcase className="h-6 w-6 text-architect-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-architect-dark mb-2">Berufserfahrung</h3>
                  <ul className="text-architect-muted space-y-2">
                    <li>• Scheidt Kasprusch Architekten, Berlin</li>
                    <li>• Cyrus Moser Architekten, Frankfurt</li>
                    <li>• io-consultants, Heidelberg (Generalplaner für Industriebauten)</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-architect-light p-3 rounded-lg mr-4">
                  <User className="h-6 w-6 text-architect-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-architect-dark mb-2">Qualifikationen</h3>
                  <ul className="text-architect-muted space-y-2">
                    <li>• Mitglied der Bayerischen Architektenkammer</li>
                    <li>• EnergieEffizienz Experte</li>
                    <li>• Spezialisierung in Entwurfs- und Genehmigungsplanung</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-architect-light p-3 rounded-lg mr-4">
                  <Construction className="h-6 w-6 text-architect-accent" />
                </div>
                <div>
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
          
          <div className="order-first lg:order-last mb-8 lg:mb-0 relative">
            <div className="aspect-[4/3] bg-architect-light rounded-lg overflow-hidden shadow-xl">
              <img src="/lovable-uploads/b48c43c7-719a-4304-8835-9d9da7bff6b1.png" alt="Portrait von Nikolaus Schmid" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-architect-dark font-medium">Seit 2020</p>
              <p className="text-architect-muted text-sm">Freiberuflicher Architekt</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;