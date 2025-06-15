
import Navbar from "@/components/Navbar";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);

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
        toast({ title: "Message envoyé !", description: "Merci pour votre message. Nous vous répondrons rapidement." });
        formRef.current?.reset();
      } else {
        toast({ title: "Erreur", description: "L'envoi a échoué. Réessayez plus tard.", variant: "destructive" });
      }
    } catch (err) {
      toast({ title: "Erreur", description: "Problème de connexion. Réessayez.", variant: "destructive" });
    }
    setSending(false);
  };

  return (
    <>
      <Navbar />
      <main className="flex justify-center p-6">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-card rounded shadow-md p-6 w-full max-w-md flex flex-col gap-4"
        >
          <h1 className="font-bold text-2xl mb-2">Contactez-nous</h1>
          <Input name="name" placeholder="Votre nom" required minLength={2} maxLength={40} />
          <Input name="email" placeholder="Votre email" type="email" required />
          <Textarea name="message" placeholder="Votre message..." required minLength={10} maxLength={600} rows={5} />
          <Button type="submit" disabled={sending}>
            {sending ? "Envoi en cours..." : "Envoyer"}
          </Button>
        </form>
      </main>
    </>
  );
};

export default Contact;
