
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
  const {
    toast
  } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      isSubmitting
    }
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      console.log("Attempting form submission with data:", data);

      // Updated to send emails to hallo@nksmd.de
      const response = await fetch('https://formsubmit.co/ajax/hallo@nksmd.de', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone,
          message: data.message,
          _subject: `Neue Kontaktanfrage von ${data.name}`
        })
      });
      
      console.log("Form submission response:", response);
      
      const responseData = await response.json();
      console.log("Response data:", responseData);
      
      if (response.ok) {
        console.log("Form submission successful");
        toast({
          title: "Anfrage gesendet",
          description: "Vielen Dank für Ihre Nachricht! Ich werde mich in Kürze bei Ihnen melden."
        });
        reset(); // Reset form after successful submission
      } else {
        console.error('Form submission response not ok:', response, responseData);
        throw new Error(`Formular konnte nicht gesendet werden: ${responseData?.message || ''}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Fehler",
        description: "Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es später noch einmal.",
        variant: "destructive"
      });
    }
  };

  return <section id="contact" className="py-16 bg-gray-50">
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
                    Name
                  </label>
                  <Input id="name" placeholder="Ihr Name" {...register("name", {
                  required: true
                })} />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-architect-dark mb-1">
                    Unternehmen
                  </label>
                  <Input id="company" placeholder="Ihr Unternehmen" {...register("company", {
                  required: true
                })} />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-architect-dark mb-1">
                    E-Mail
                  </label>
                  <Input id="email" type="email" placeholder="ihre-email@beispiel.de" {...register("email", {
                  required: true
                })} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-architect-dark mb-1">
                    Telefon
                  </label>
                  <Input id="phone" placeholder="Ihre Telefonnummer" {...register("phone")} />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-architect-dark mb-1">
                  Nachricht
                </label>
                <Textarea id="message" placeholder="Beschreiben Sie kurz Ihr Projekt oder Ihre Anfrage..." rows={5} {...register("message", {
                required: true
              })} />
              </div>
              
              <div className="flex justify-center">
                <Button type="submit" className="cta-button text-base flex items-center justify-center h-12" disabled={isSubmitting}>
                  {isSubmitting ? "Wird gesendet..." : "Anfrage absenden"}
                </Button>
              </div>
            </form>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-architect-muted mb-2 text-lg">
              Oder kontaktieren Sie mich direkt per Email unter: <br />
              <a href="mailto:hallo@nksmd.de" className="text-architect-accent font-medium hover:underline text-xl">hallo@nksmd.de</a>
            </p>
            <p className="text-architect-muted text-lg">
              Telefonisch erreichbar unter: <br />
              <a href="tel:+4917699351415" className="text-architect-accent font-medium hover:underline text-xl">+49 176 99351415</a>
            </p>
          </div>
        </div>
      </div>
    </section>;
};

export default ContactSection;
