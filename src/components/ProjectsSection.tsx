
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const companyReferences = [{
  name: "HUF HAUS",
  logo: "/lovable-uploads/af567617-eb60-4060-96d7-ebfd4702111f.png"
}, {
  name: "Enter",
  logo: "/lovable-uploads/7aa5ff54-4622-4daa-89b5-469bf0b17feb.png"
}, {
  name: "OKAL",
  logo: "/lovable-uploads/feaead92-ddad-4b55-9fab-e06ce90f7a77.png"
}];

const ProjectsSection = () => {
  return <section id="projects" className="py-16 bg-architect-light">
      <div className="section-container">
        <div className="content-container text-center mb-12">
          <h2 className="text-3xl font-bold text-architect-dark">Firmenreferenzen</h2>
          <p className="mt-4 text-architect-muted">Namhafte Unternehmen vertrauen auf meine Expertise und Erfahrung.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companyReferences.map((company, index) => (
            <Card key={index} className="overflow-hidden h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex items-center justify-center h-full">
                <div className="flex items-center justify-center w-full h-[120px]">
                  <img 
                    src={company.logo} 
                    alt={`${company.name} Logo`} 
                    className="max-h-[80px] w-auto object-contain" 
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>;
};

export default ProjectsSection;
