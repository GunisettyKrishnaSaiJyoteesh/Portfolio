import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xomhr5e",    // 🔁 Replace with your EmailJS service ID
        "template_h3su094",   // 🔁 Replace with your EmailJS template ID
        e.currentTarget,
        "GJDsTOf7cWLfCiZT4"     // 🔁 Replace with your EmailJS public key
      )
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        e.currentTarget.reset();
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
        });
        console.error("EmailJS error:", error);
      });
  };

  return (
    <section id="contact" className="bg-brand-50 section-padding">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-title">Contact Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-brand-800/70 mb-6">
              I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to use the form.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm text-brand-700">Email</p>
                  <a href="mailto:gunisettykrishnasaijyoteesh@gmail.com" className="text-brand-900 font-medium">
                    gunisettykrishnasaijyoteesh@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm text-brand-700">Phone</p>
                  <a href="tel:+91 7013393489" className="text-brand-900 font-medium">
                    +91 7013393489
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm text-brand-700">Location</p>
                  <p className="text-brand-900 font-medium">Visakhapatnam, India</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-brand-700">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-brand-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="text-sm font-medium text-brand-700">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-brand-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  required
                  className="mt-1 min-h-[150px]"
                />
              </div>

              <Button type="submit" className="bg-brand-500 hover:bg-brand-600 w-full flex items-center gap-2">
                <Send size={16} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
