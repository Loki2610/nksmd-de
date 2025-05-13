import React from 'react';
import { FileText, FileCheck, ClipboardList, Handshake } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const servicesData = [{
  icon: <FileText className="h-8 w-8 text-architect-accent" />,
  title: "Entwurfs- und Genehmigungsplanung",
  description: "Professionelle und effiziente Erstellung aller für das Bauvorhaben erforderlichen Planungsunterlagen und Genehmigungsanträge."
}, {
  icon: <FileCheck className="h-8 w-8 text-architect-accent" />,
  title: "Behördenmanagement",
  description: "Komplette Übernahme der Kommunikation mit Behörden und Bearbeitung von Anforderungen für eine zügige Genehmigung."
}, {
  icon: <ClipboardList className="h-8 w-8 text-architect-accent" />,
  title: "Technische Dokumentation",
  description: "Erstellung aller erforderlichen technischen Unterlagen nach den aktuellen gesetzlichen Standards und Normen."
}, {
  icon: <Handshake className="h-8 w-8 text-architect-accent" />,
  title: "B2B-Kooperationen",
  description: "Langfristige Partnerschaften mit Bauunternehmen und Fertighausherstellern für optimierte Prozesse und Kosteneinsparungen."
}];
const ServicesSection = () => {
  return <section id="services" className="py-16 bg-white">
      <div className="section-container">
        <div className="content-container text-center mb-12">
          <h2 className="text-3xl font-bold text-architect-dark">Meine Dienstleistungen</h2>
          <p className="mt-4 text-architect-muted">Spezialisierte Architekturdienstleistungen für Ihr Bauunternehmen -
professionell, zuverlässig und termingerecht.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => <Card key={index} className="border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-architect-muted">{service.description}</CardDescription>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;