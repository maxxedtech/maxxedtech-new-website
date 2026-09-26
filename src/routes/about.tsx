import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Eye, Handshake, Linkedin, Lightbulb, ShieldCheck, Sparkles, Target, Twitter } from "lucide-react";
import { CTASection, InnerHero, SectionHeading } from "@/components/site/Primitives";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Us",
      path: "/about",
      description:
        "Meet Maxxed Tech — a premier digital agency building high-performance websites, AI tools and brand systems for ambitious businesses worldwide.",
    }),
  component: About,
});

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

function About() {
  return (
    <>
      <InnerHero
        eyebrow="About us"
        title="We Are"
        accent="MaxxedTech Ltd"
        copy="A digital agency helping startups, innovators, and ambitious enterprises build smarter, launch faster, and scale bigger."
      />
      <section className="section-pad">
        <div className="site-container grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div {...fade}>
            <p className="eyebrow">Our story</p>
            <h2 className="section-title mt-4">Built for the businesses others overlook.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We started MaxxedTech Ltd in 2024 because too many talented entrepreneurs were held back by slow agencies, opaque processes, and cookie-cutter templates.
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Our mission is simple: make world-class digital engineering and intelligent automation accessible to ambitious businesses worldwide. No fluff. Just results.
            </p>
          </motion.div>
          <motion.div {...fade} className="stat-grid grid grid-cols-2 gap-4">
            {[
              ["50+", "Projects Shipped"],
              ["30+", "Global Clients"],
              ["99%", "Client Satisfaction"],
              ["24/7", "Dedicated Support"],
            ].map(([v, l]) => (
              <div key={l} className="surface-card">
                <strong className="stat-value">{v}</strong>
                <p className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">
                  {l}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="section-pad bg-surface-deep">
        <div className="site-container grid gap-6 md:grid-cols-2">
          {[
            [
              Target,
              "Our Mission",
              "Make world-class digital technology and custom AI solutions accessible to growing businesses anywhere.",
            ],
            [
              Eye,
              "Our Vision",
              "Become the world's most trusted engineering partner for businesses turning ambitious ideas into digital products that scale.",
            ],
          ].map(([Icon, t, c]) => {
            const I = Icon as typeof Target;
            return (
              <motion.article {...fade} key={t as string} className="surface-card hoverable">
                <div className="icon-tile">
                  <I />
                </div>
                <h3 className="card-title mt-6">{t as string}</h3>
                <p className="mt-3 text-muted-foreground">{c as string}</p>
              </motion.article>
            );
          })}
        </div>
      </section>
      <section className="section-pad">
        <div className="site-container">
          <SectionHeading label="The team" title="The People Behind the Work" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <motion.article {...fade} className="surface-card hoverable text-center">
              <div className="avatar mx-auto h-24 w-24 text-2xl">DA</div>
              <h3 className="card-title mt-5">David Adamson</h3>
              <p className="mt-1 text-sm text-primary">Founder & Lead Developer</p>
              <div className="mt-5 flex justify-center gap-3">
                <a className="social-button" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin />
                </a>
                <a className="social-button" href="https://x.com" target="_blank" rel="noreferrer" aria-label="Twitter / X">
                  <Twitter />
                </a>
              </div>
            </motion.article>
          </div>
        </div>
      </section>
      <section className="section-pad bg-surface-deep">
        <div className="site-container">
          <SectionHeading center label="Our values" title="What Drives Every Project" />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {(
              [
                [Lightbulb, "Innovation", "We use modern tools and fresh thinking to solve real business problems."],
                [ShieldCheck, "Reliability", "We deliver what we promise, on time, and stay reachable after launch."],
                [Sparkles, "Quality", "Every page, pixel and line of code is built to the highest engineering standards."],
                [Handshake, "Partnership", "Your growth is our goal. We work with you, not just for you."],
              ] as const
            ).map(([Icon, t, c]) => (
              <motion.article {...fade} key={t} className="reason-card">
                <div className="icon-tile">
                  <Icon />
                </div>
                <h3 className="card-title mt-5 text-xl">{t}</h3>
                <p className="mt-2 text-muted-foreground">{c}</p>
              </motion.article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="button button-primary button-lg">
              Work With Us <span>→</span>
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
