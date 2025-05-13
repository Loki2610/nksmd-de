
import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Footer from '../components/Footer';

const Datenschutz = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Datenschutz</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-3xl font-bold text-architect-dark mb-8">Datenschutzerklärung</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mt-6 mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-medium mt-5 mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
              persönlich identifiziert werden können.
            </p>
            
            <h3 className="text-lg font-medium mt-5 mb-2">Datenerfassung auf dieser Website</h3>
            <p>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Impressum dieser Website entnehmen.
            </p>
            
            <h3 className="text-lg font-medium mt-5 mb-2">Wie erfassen wir Ihre Daten?</h3>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
              z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p>
              Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind 
              vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). 
              Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-lg font-medium mt-5 mb-2">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
              personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie 
              dieser Datenschutzerklärung.
            </p>
            <p>
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene 
              Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung 
              erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem 
              Zweck das geschieht.
            </p>
            
            <h3 className="text-lg font-medium mt-5 mb-2">Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              
              Nikolaus Schmid<br />
              Freiberuflicher Architekt<br />
              Musterstraße 123<br />
              12345 Musterstadt<br /><br />
              
              Telefon: +49 123 45678910<br />
              E-Mail: info@nksmd.de
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Datenschutz;
