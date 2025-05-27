
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const ContactSection = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      console.log("Form submission started with data:", data);

      // FormSubmit.co requires specific configuration for proper functioning
      const formData = {
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        message: data.message,
        _subject: `Neue Kontaktanfrage von ${data.name} - ${data.company}`,
        _captcha: "false",
        _template: "table",
        _next: window.location.origin + "?submitted=true"
      };

      console.log("Sending form data to FormSubmit.co:", formData);

      const response = await fetch('https://formsubmit.co/ajax/hallo@nksmd.de', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      console.log("FormSubmit.co response status:", response.status);
      console.log("FormSubmit.co response headers:", response.headers);
      
      const responseData = await response.json();
      console.log("FormSubmit.co response data:", responseData);
      
      if (response.ok && responseData.success !== false) {
        console.log("Form submission successful");
        toast({
          title: "Anfrage erfolgreich gesendet",
          description: "Vielen Dank für Ihre Nachricht! Ich werde mich in Kürze bei Ihnen melden."
        });
        reset();
      } else {
        console.error('FormSubmit.co returned error:', responseData);
        throw new Error(`Formular konnte nicht gesendet werden: ${responseData?.message || 'Unbekannter Fehler'}`);
      }
    } catch (error) {
      console.error('Form submission error details:', error);
      
      // Show error toast with fallback option
      toast({
        title: "Fehler beim Senden",
        description: "Es gab ein Problem beim Senden Ihrer Anfrage. Sie können mich auch direkt per E-Mail kontaktieren.",
        variant: "destructive"
      });
    }
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-architect-dark mb-1">
                    Name *
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Ihr Name" 
                    {...register("name", { required: "Name ist erforderlich" })} 
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-architect-dark mb-1">
                    Unternehmen *
                  </label>
                  <Input 
                    id="company" 
                    placeholder="Ihr Unternehmen" 
                    {...register("company", { required: "Unternehmen ist erforderlich" })} 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-architect-dark mb-1">
                    E-Mail *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="ihre-email@beispiel.de" 
                    {...register("email", { 
                      required: "E-Mail ist erforderlich",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Ungültige E-Mail-Adresse"
                      }
                    })} 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-architect-dark mb-1">
                    Telefon
                  </label>
                  <Input 
                    id="phone" 
                    placeholder="Ihre Telefonnummer" 
                    {...register("phone")} 
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-architect-dark mb-1">
                  Nachricht *
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihre Anfrage..." 
                  rows={5} 
                  {...register("message", { required: "Nachricht ist erforderlich" })} 
                />
              </div>
              
              <div className="flex justify-center">
                <Button 
                  type="submit" 
                  className="cta-button text-base flex items-center justify-center h-12" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Wird gesendet..." : "Anfrage absenden"}
                </Button>
              </div>
            </form>
          </div>
          
          <div className="mt-10 text-center">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <h3 className="text-lg font-semibold text-architect-dark mb-3">
                Alternative Kontaktmöglichkeiten
              </h3>
              <p className="text-architect-muted mb-2 text-lg">
                Direkte E-Mail: <br />
                <a 
                  href="mailto:hallo@nksmd.de?subject=Kontaktanfrage%20über%20Website&body=Hallo,%0D%0A%0D%0AIch%20interessiere%20mich%20für%20Ihre%20Dienstleistungen.%0D%0A%0D%0AVielen%20Dank!" 
                  className="text-architect-accent font-medium hover:underline text-xl"
                >
                  hallo@nksmd.de
                </a>
              </p>
              <p className="text-architect-muted text-lg">
                Telefon: <br />
                <a 
                  href="tel:+4915566008115" 
                  className="text-architect-accent font-medium hover:underline text-xl"
                >
                  +49 155 66008115
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
