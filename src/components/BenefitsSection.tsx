
import React from 'react';
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Kosten- und Zeitersparnis",
    description: "Durch die Auslagerung der Planungs- und Genehmigungsphase können Sie sich auf Ihr Kerngeschäft konzentrieren und Ihre internen Ressourcen optimal einsetzen."
  },
  {
    title: "Rechtssicherheit",
    description: "Als Fachmann sorge ich für eine rechtssichere Planung und Genehmigung, die allen aktuellen Vorschriften und Normen entspricht."
  },
  {
    title: "Schnellere Genehmigungsverfahren",
    description: "Durch meine Erfahrung im Umgang mit Behörden und die Kenntnis der Anforderungen beschleunige ich den Genehmigungsprozess."
  },
  {
    title: "Flexible Zusammenarbeit",
    description: "Von projektbasierter Zusammenarbeit bis hin zu langfristigen Kooperationen - ich passe mich Ihren Geschäftsbedürfnissen an."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-architect-dark text-white">
      <div className="section-container">
        <div className="content-container text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ihre Vorteile</h2>
          <p className="text-gray-300">
            Warum Bauunternehmen und Fertighaushersteller von meinen Dienstleistungen profitieren
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-opacity-10 bg-white p-6 rounded-lg">
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-architect-accent rounded-full p-1">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
