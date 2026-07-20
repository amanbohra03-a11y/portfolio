import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Linkedin, Github, Send, Phone, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aman Bohra" },
      { name: "description", content: "Get in touch with Aman Bohra — Mechanical Design Engineer. Available for new opportunities and collaborations." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-[1200px] px-6 sm:px-10 py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-gold/10 border border-gold/20 px-3 py-1.5 text-xs font-medium text-gold">
          <Mail className="h-3.5 w-3.5" /> Contact
        </div>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground text-balance">
          Let's build something <span className="text-gold">precise</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Whether it's a full-time role, freelance design, or a technical
          consultation — drop a message and I'll respond within 24 hours.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10">
        {/* Info */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <InfoCard icon={<Mail className="h-4 w-4" />} label="Email" value="amanbohra03@email.com" href="mailto:amanbohra03@email.com" />
          <InfoCard icon={<Phone className="h-4 w-4" />} label="Phone" value="+91 8449284522" href="tel:+91 8449284522" />
          <InfoCard icon={<MapPin className="h-4 w-4" />} label="Location" value="Hyderabad, India — Open to relocation" />

          <div className="rounded-2xl border border-border bg-surface p-6">
            {/* <h3 className="font-display font-semibold text-foreground">Elsewhere</h3> */}
            <div className="mt-4 flex items-center gap-3">
              <SocialLink href="https://www.linkedin.com/in/aman-bohra-a5b703247" label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialLink>
              <SocialLink href="https://github.com/amanbohra03-a11y" label="GitHub"><Github className="h-4 w-4" /></SocialLink>
            </div>
          </div>
        </motion.aside>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 4000);
          }}
          className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" required placeholder="Jane Doe" />
            <Field label="Email" name="email" type="email" required placeholder="jane@company.com" />
          </div>
          <div className="mt-4">
            <Field label="Subject" name="subject" placeholder="Design contract — Q4" />
          </div>
          <div className="mt-4">
            <label className="text-xs font-display font-bold uppercase tracking-widest text-gold-muted">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Tell me about your project…"
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition"
            />
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            {sent ? (<><Check className="h-4 w-4" /> Message sent</>) : (<>Send message <Send className="h-4 w-4" /></>)}
          </button>
        </motion.form>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-display font-bold uppercase tracking-widest text-gold-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition"
      />
    </div>
  );
}

function InfoCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 hover:border-gold/30 transition-colors">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 border border-gold/20 text-gold">
        {icon}
      </span>
      <div>
        <div className="text-xs font-display font-bold uppercase tracking-widest text-gold-muted">
          {label}
        </div>
        <div className="mt-0.5 text-sm text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors"
    >
      {children}
    </a>
  );
}
