import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SectionHeading({
  label,
  title,
  copy,
  center = false,
}: {
  label: string;
  title: ReactNode;
  copy?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <p className="eyebrow">{label}</p>
      <h2 className="section-title mt-4">{title}</h2>
      {copy && <p className="mt-5 text-lg text-muted-foreground">{copy}</p>}
    </motion.div>
  );
}

export function InnerHero({
  eyebrow,
  title,
  accent,
  copy,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  copy: string;
}) {
  return (
    <section className="inner-hero">
      <div className="beam" />
      <div className="site-container relative z-10 pt-32">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="page-title mt-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.5 }}
        >
          {title}{" "}
          {accent && <span className="gradient-text">{accent}</span>}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.4 }}
        >
          {copy}
        </motion.p>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="cta-band section-pad">
      <div className="site-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto mb-4 h-16 w-16 flex items-center justify-center rounded-full border border-primary/40 bg-primary/10">
            <img
              src="/images/logo/badge-logo.png"
              alt="Maxxed Tech"
              className="h-10 w-10 object-contain"
            />
          </div>
          <h2 className="section-title mx-auto mt-5 max-w-3xl">
            Ready to Build Something <span className="gradient-text">Powerful?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Let's bring your idea to life. Get in touch and we'll have a strategy ready before most agencies even reply.
          </p>
          <Link to="/contact" className="button button-primary button-xl mt-9 pulse-glow">
            Get a Free Consultation <span>→</span>
          </Link>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span><b className="text-primary">✓</b> No commitment required</span>
            <span><b className="text-primary">✓</b> Response within 24 hours</span>
            <span><b className="text-primary">✓</b> Free initial strategy call</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}