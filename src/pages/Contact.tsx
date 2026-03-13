import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mqeylzbb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Saphie's Tasty - Order Food in Kampala</title>
        <meta name="description" content="Contact Saphie's Tasty to place a catering order, food delivery or snack pack request in Kampala, Uganda. Reach us by WhatsApp, email or our contact form." />
        <meta name="keywords" content="contact Saphie's Tasty, order food Kampala, catering inquiry Uganda, WhatsApp food order Kampala" />
        <meta property="og:title" content="Contact Us | Saphie's Tasty" />
        <meta property="og:description" content="Get in touch with Saphie's Tasty for catering, delivery and snack pack orders in Kampala." />
        <link rel="canonical" href="https://saphiestasty.com/contact" />
      </Helmet>

      <div className="pt-20">
        <section className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="font-body text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
                Have a question, want to place an order, or planning an event? We'd love to hear from you!
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <SectionHeading title="Contact Info" />
                <div className="space-y-6">
                  <a href="https://wa.me/256764701173" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-body font-bold text-foreground">Phone / WhatsApp</p>
                      <p className="font-body text-muted-foreground">+256 764 701 173</p>
                    </div>
                  </a>
                  <a href="mailto:namazzi_saphie@icloud.com" className="flex items-center gap-4 group">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-body font-bold text-foreground">Email</p>
                      <p className="font-body text-muted-foreground">namazzi_saphie@icloud.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-body font-bold text-foreground">Location</p>
                      <p className="font-body text-muted-foreground">Kampala, Uganda</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">Prefer WhatsApp?</h3>
                  <p className="font-body text-muted-foreground mb-4">
                    For the fastest response, reach us directly on WhatsApp!
                  </p>
                  <a
                    href="https://wa.me/256764701173"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-[hsl(0,0%,100%)] font-body font-bold px-6 py-3 rounded-xl transition-all hover:scale-105"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-8 border border-border shadow-card"
              >
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-body font-semibold text-foreground text-sm block mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    />
                  </div>
                  <div>
                    <label className="font-body font-semibold text-foreground text-sm block mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. +256 700 000 000"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    />
                  </div>
                  <div>
                    <label className="font-body font-semibold text-foreground text-sm block mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    />
                  </div>
                  <div>
                    <label className="font-body font-semibold text-foreground text-sm block mb-2">Service Interested In *</label>
                    <select
                      name="service"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                    >
                      <option value="">Select a service...</option>
                      <option value="Event Catering">Event Catering</option>
                      <option value="Food Delivery">Food Delivery</option>
                      <option value="Snack Packs">Snack Packs</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-body font-semibold text-foreground text-sm block mb-2">Message / Order Details *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your event, order, or any questions..."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-bold px-6 py-4 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <Send size={18} />
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                  {status === "success" && (
                    <div className="bg-green-50 border border-green-200 text-green-700 font-body text-sm px-4 py-3 rounded-xl text-center">
                      ✅ Message sent! We'll get back to you soon.
                    </div>
                  )}
                  {status === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-700 font-body text-sm px-4 py-3 rounded-xl text-center">
                      ❌ Something went wrong. Please try again or WhatsApp us directly.
                    </div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
