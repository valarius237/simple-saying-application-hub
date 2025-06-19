
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const { t } = useLanguage();

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Récupère les infos du formulaire
    const formData = new FormData(formRef.current!);
    const data = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      message: formData.get("message"),
    };

    // EmailJS - à renseigner avec vos identifiants (test/demo)
    const serviceID = "votre_service_id";
    const templateID = "votre_template_id";
    const publicKey = "votre_public_key";

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: publicKey,
          template_params: data,
        }),
      });
      if (res.ok) {
        toast({ title: t.messageSent, description: t.thankYou });
        formRef.current?.reset();
      } else {
        toast({ title: "Erreur", description: t.messageError, variant: "destructive" });
      }
    } catch (err) {
      toast({ title: "Erreur", description: t.connectionError, variant: "destructive" });
    }
    setSending(false);
  };

  return (
    <>
      <Navbar />
      <main className="flex justify-center p-6 animate-fade-in">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-card rounded shadow-md p-6 w-full max-w-md flex flex-col gap-4 hover-scale transition-all duration-300"
        >
          <h1 className="font-bold text-2xl mb-2">{t.contactUs}</h1>
          <Input name="name" placeholder={t.yourName} required minLength={2} maxLength={40} />
          <Input name="email" placeholder={t.yourEmail} type="email" required />
          <Textarea name="message" placeholder={t.yourMessage} required minLength={10} maxLength={600} rows={5} />
          <Button type="submit" disabled={sending}>
            {sending ? t.sending : t.send}
          </Button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
