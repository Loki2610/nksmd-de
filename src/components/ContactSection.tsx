import React, { useRef } from 'react';
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
  const hiddenFormRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors }
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      console.log("Submitting form with data:", data);
      
      const hiddenForm = hiddenFormRef.current;
      if (hiddenForm) {
        // Sichere Variante mit Null-Checks für Web3Forms
        const nameInput = hiddenForm.querySelector('input[name="name"]') as HTMLInputElement;
        const companyInput = hiddenForm.querySelector('input[name="company"]') as HTMLInputElement;
        const emailInput = hiddenForm.querySelector('input[name="email"]') as HTMLInputElement;
        const phoneInput = hiddenForm.querySelector('input[name="phone"]') as HTMLInputElement;
        const messageTextarea = hiddenForm.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
        const subjectInput = hiddenForm.querySelector('input[name="subject"]') as HTMLInputElement;
        
        console.log("Setting form values...");
        if (nameInput) {
          nameInput.value = data.name;
          console.log("Name set:", data.name);
        }
        if (companyInput) {
          companyInput.value = data.company;
          console.log("Company set:", data.company);
        }
        if (emailInput) {
          emailInput.value = data.email;
          console.log("Email set:", data.email);
        }
        if (phoneInput) {
          phoneInput.value = data.phone || '';
          console.log("Phone set:", data.phone || '');
        }
        if (messageTextarea) {
          messageTextarea.value = `Unternehmen: ${data.company}\nTelefon: ${data.phone || 'Nicht angegeben'}\n\nNachricht:\n${data.message}`;
          console.log("Message set with company and phone info");
        }
        if (subjectInput) {
          subjectInput.value = `Neue Kontaktanfrage von ${data.name} (${data.company})`;
          console.log("Subject set");
        }
        
        // Toast-Nachricht vor dem Submit
        toast({
          title: "Anfrage wird gesendet",
          description: "Sie werden weitergeleitet..."
        });
        
        // Kurze Verzögerung damit der Toast sichtbar wird
        setTimeout(() => {
          console.log("Submitting hidden form to Web3Forms...");
          hiddenForm.submit();
          
          // Reset the React form after submission
          reset();
        }, 500);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Fehler",
        description: "Es gab ein Problem beim Senden Ihrer Anfrage.",
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
          
          {/* Hidden Web3Forms form for actual submission */}
          <form 
            ref={hiddenFormRef}
            action="https://api.web3forms.com/submit" 
            method="POST"
            style={{ display: 'none' }}
          >
            <input type="hidden" name="access_key" value="b3d88183-82a0-41c2-912d-f67229068333" />
            <input type="hidden" name="redirect" value={`${window.location.origin}/#contact`} />
            <input type="hidden" name="subject" />
            <input type="text" name="name" />
            <input type="text" name="company" />
            <input type="email" name="email" />
            <input type="text" name="phone" />
            <textarea name="message"></textarea>
          </form>
          
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
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
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
                  {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
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
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
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
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
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
                  href="tel:+4917699351415" 
                  className="text-architect-accent font-medium hover:underline text-xl"
                >
                  +49 176 99351415
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
