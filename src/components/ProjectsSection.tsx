
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const projectsData = [
  {
    title: "Huf Haus Projekte",
    description: "Langjährige Zusammenarbeit mit Huf Haus bei der Planung und Genehmigung zahlreicher hochwertiger Gebäude.",
    location: "Deutschlandweit",
    type: "Wohngebäude",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    title: "Gewerbeobjekt München",
    description: "Planung und Genehmigungsverfahren für ein Bürogebäude mit gemischter Nutzung.",
    location: "München, Bayern",
    type: "Gewerbe",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    title: "Mehrfamilienhaus Projekt",
    description: "Umfassendes Genehmigungsmanagement für ein Mehrfamilienhaus mit 12 Wohneinheiten.",
    location: "Nürnberg, Bayern",
    type: "Mehrfamilienhaus",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=800&h=500"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-architect-light">
      <div className="section-container">
        <div className="content-container text-center mb-12">
          <h2 className="text-3xl font-bold text-architect-dark">Referenzprojekte</h2>
          <p className="mt-4 text-architect-muted">
            Eine Auswahl erfolgreich realisierter Projekte in Zusammenarbeit mit führenden Bauunternehmen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="overflow-hidden h-full border-none shadow-lg">
              <div className="h-48 relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex items-center text-sm text-architect-muted">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{project.location}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-architect-muted">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="text-sm text-architect-muted">
                <div className="text-architect-accent font-medium">{project.type}</div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
