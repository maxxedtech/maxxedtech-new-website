import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { InnerHero } from "@/components/site/Primitives";
import { services } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => pageHead({ title: "Services", path: "/services", description: "Website development, AI automation, brand identity, maintenance and digital optimization — built to deliver measurable results." }),
  component: Services,
});

function Services() {
  return <>
    <InnerHero eyebrow="Our services" title="Digital Solutions That" accent="Deliver Results" copy="From idea to launch in 2–4 weeks. Pick what you need, or let us help you choose." />
    {services.map((s, i) => { const Icon = s.icon; const even = i % 2 === 1; return (
      <section key={s.slug} id={s.slug} className={`section-pad ${even ? "bg-surface-deep" : ""}`}>
        <div className="site-container grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div className={even ? "lg:order-2" : ""} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <div className="icon-tile icon-tile-lg"><Icon /></div>
            <h2 className="mt-7 text-3xl md:text-[40px] md:leading-tight">{s.title}</h2>
            <p className="mt-5 text-lg text-muted-foreground">{s.description}</p>
            <p className="mt-4 text-muted-foreground">{s.benefit}</p>
            <Link to="/contact" className="button button-primary button-lg mt-8">Get Started <span>→</span></Link>
          </motion.div>
          <motion.div className="glass-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="eyebrow">What's included</p>
            <ul className="mt-6 grid gap-4">{s.features.map((f) => <li key={f} className="check-line"><Check />{f}</li>)}</ul>
          </motion.div>
        </div>
      </section>
    ); })}
    <section className="cta-band section-pad"><div className="site-container text-center">
      <h2 className="section-title mx-auto max-w-3xl">Not Sure Which Service <span className="gradient-text">You Need?</span></h2>
      <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">Tell us about your business. We'll recommend the right starting point — no commitment required.</p>
      <Link to="/contact" className="button button-primary button-xl mt-9">Schedule a Free Call <span>→</span></Link>
    </div></section>
  </>;
}
