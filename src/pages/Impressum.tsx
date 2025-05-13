
import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import Footer from '../components/Footer';

const Impressum = () => {
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
                <BreadcrumbPage>Impressum</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-3xl font-bold text-architect-dark mb-8">Impressum</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mt-6 mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              Nikolaus Schmid<br />
              Freiberuflicher Architekt<br />
              Musterstraße 123<br />
              12345 Musterstadt
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Kontakt</h2>
            <p>
              Telefon: +49 123 45678910<br />
              E-Mail: info@nksmd.de
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p>
              Berufsbezeichnung: Architekt<br />
              Verliehen in: Deutschland<br />
              Kammer: Bayerische Architektenkammer<br />
              Es gelten folgende berufsrechtliche Regelungen: Architektengesetz des Freistaates Bayern
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-architect-accent hover:underline">
                https://ec.europa.eu/consumers/odr/
              </a>.
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Impressum;
