import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { Check, ChevronDown, Code2, HeartHandshake, Lightbulb, Phone, Rocket, Shield, Users, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CTASection, SectionHeading } from "@/components/site/Primitives";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects, services, testimonials } from "@/data/site";

const description =
  "Maxxed Tech builds high-performing websites, AI tools, brand systems and ongoing support for ambitious businesses worldwide.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MaxxedTech Ltd | Modern Digital Agency & AI Solutions" },
      { name: "description", content: description },
      { property: "og:title", content: "MaxxedTech Ltd | Modern Digital Agency & AI Solutions" },
      { property: "og:description", content: description },
      { property: "og:image", content: "https://maxxedtech.com/og-image.jpg" },
      { property: "og:url", content: "https://maxxedtech.com/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://maxxedtech.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://maxxedtech.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "MaxxedTech Ltd",
          url: "https://maxxedtech.com",
          logo: "https://maxxedtech.com/images/logo/loading-logo.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+234-806-625-7117",
            contactType: "customer service",
          },
        }),
      },
    ],
  }),
  component: Home,
});

const reveal = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="home-hero">
        <div className="dot-grid" />
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
        <div className="noise" />

        <div className="site-container relative z-10 flex min-h-screen items-center pt-24">
          <div className="max-w-4xl lg:max-w-3xl">
            <motion.div
              {...reveal}
              transition={{ duration: 0.5 }}
              className="hero-badge"
            >
              <img
                src="/images/logo/favicon-logo.png"
                alt=""
                className="h-4 w-4 object-contain opacity-80"
              />
              MaxxedTech Ltd — Est. 2024
            </motion.div>

            <motion.h1
              className="hero-title mt-7"
              {...reveal}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              We Build Digital
              <br />
              <span className="gradient-text">Products That Scale.</span>
            </motion.h1>

            <motion.p
              className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground md:text-xl"
              {...reveal}
              transition={{ delay: 0.3 }}
            >
              Custom websites, AI-powered tools, brand systems, and ongoing tech support—built for businesses that mean business.
            </motion.p>

            <motion.div
              className="mt-9 flex flex-wrap gap-4"
              {...reveal}
              transition={{ delay: 0.45 }}
            >
              <Link to="/contact" className="button button-primary button-lg pulse-glow">
                Start Your Project <span>→</span>
              </Link>
              <Link to="/portfolio" className="button button-outline button-lg">
                See Our Work
              </Link>
            </motion.div>

            <motion.div
              className="mt-9 flex flex-wrap items-center gap-3 text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
            >
              <span>Built with →</span>
              {["React", "Next.js", "TypeScript", "OpenAI", "Node.js"].map((x) => (
                <span className="tech-pill" key={x}>{x}</span>
              ))}
            </motion.div>
          </div>

          {/* Floating stat cards */}
          <div className="hidden lg:block">
            <StatFloat className="float-one" value="2–4 wks" label="Average Delivery Time" />
            <StatFloat className="float-two" value="90+" label="Lighthouse Score Target" />
            <StatFloat className="float-three" value="30 days" label="Post-Launch Support" />
          </div>
        </div>

        <ChevronDown className="scroll-cue" />
      </section>

      {/* ─── MARQUEE ─── */}
      <Marquee />

      {/* ─── SERVICES ─── */}
      <section className="section-pad">
        <div className="site-container">
          <SectionHeading label="What we do" title="Every Service Your Business Needs" />
          <div className="bento-grid mt-12">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.article
                  key={s.slug}
                  className={`service-card ${i === 0 ? "featured-service" : ""}`}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="icon-tile">
                    <Icon />
                  </div>
                  {i === 0 && (
                    <span className="tag absolute right-6 top-6">Most Popular</span>
                  )}
                  <h3 className="card-title mt-6">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground">{s.description}</p>
                  {i === 0 && (
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {s.features.map((f) => (
                        <li className="check-line" key={f}>
                          <Check />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link to="/services" className="card-link mt-6">
                    Learn More <span>→</span>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="section-pad bg-surface-deep">
        <div className="site-container grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              label="Why choose us"
              title={
                <>
                  Partner With a Team That{" "}
                  <span className="gradient-text">Delivers</span>
                </>
              }
              copy="You need a partner who understands the goal, communicates clearly, and ships work that helps your business move forward."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Modern, responsive designs",
                "SEO optimization included",
                "Fast page load speeds",
                "Security best practices",
                "Dedicated project manager",
                "30-day post-launch support",
              ].map((x) => (
                <motion.div
                  className="check-line"
                  key={x}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <Check />
                  {x}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {(
              [
                [Zap, "Custom-Built Solutions"],
                [Shield, "Scalable Technology"],
                [Users, "Startup-Friendly Pricing"],
                [HeartHandshake, "Ongoing Support"],
              ] as const
            ).map(([Icon, title]) => (
              <motion.article
                className="reason-card"
                key={String(title)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, borderColor: "rgba(53,189,181,0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="icon-tile">
                  <Icon />
                </div>
                <h3 className="card-title mt-5 text-xl">{String(title)}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <Stats />

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="section-pad">
        <div className="site-container">
          <SectionHeading
            label="Our work"
            title="Projects That Drive Real Results"
            copy="A selection of work we're proud of."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/portfolio" className="button button-outline button-lg">
              View All Projects <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <Testimonials />

      {/* ─── PROCESS ─── */}
      <section className="section-pad">
        <div className="site-container">
          <SectionHeading
            center
            label="Our process"
            title="From Idea to Launch in 4 Simple Steps"
          />
          <div className="process-grid mt-14">
            {(
              [
                [Phone, "Discovery Call", "We learn your goals, timeline, and budget in a free 30-minute call."],
                [Lightbulb, "Strategy & Design", "We create wireframes, design mockups, and a clear project roadmap."],
                [Code2, "Build & Review", "We build your solution with regular check-ins and revision rounds."],
                [Rocket, "Launch & Support", "We go live, monitor performance, and support you for 30 days post-launch."],
              ] as const
            ).map(([Icon, title, copy], i) => (
              <motion.article
                className="process-step"
                key={String(title)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                <span className="step-number">0{i + 1}</span>
                <div className="icon-tile mx-auto">
                  <Icon />
                </div>
                <h3 className="card-title mt-5 text-xl">{String(title)}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{String(copy)}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function StatFloat({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className: string;
}) {
  return (
    <motion.div
      className={`float-stat ${className}`}
      whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(53,189,181,0.25)" }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <b>{value}</b>
      <span>{label}</span>
    </motion.div>
  );
}

function Marquee() {
  const text = [
    "Web Development",
    "AI Automation",
    "Brand Identity",
    "UI/UX Design",
    "SEO Optimization",
    "Tech Support",
    "E-Commerce",
    "Mobile Apps",
  ];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...text, ...text].map((x, i) => (
          <span key={`${x}-${i}`}>
            {x}
            <b>◆</b>
          </span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  return (
    <section className="stats-band section-pad">
      <div className="site-container grid grid-cols-2 gap-8 lg:grid-cols-4">
        {[
          ["2–4 wks", "Typical Launch Window", "Lean delivery for websites, funnels & MVP builds."],
          ["90+", "Performance Score Target", "Speed, accessibility & SEO from day one."],
          ["24/7", "Digital Presence", "Automations that keep working after office hours."],
          ["30 Days", "Post-Launch Support", "Fixes and guidance while your site finds its feet."],
        ].map(([v, l, d]) => (
          <motion.div
            key={l}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <strong className="stat-value">{v}</strong>
            <h3 className="mt-3 font-semibold">{l}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setCurrent((x) => (x + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[current] ?? testimonials[0];

  return (
    <section className="section-pad bg-surface-deep">
      <div className="site-container">
        <SectionHeading center label="Client stories" title="What Our Clients Say" />
        <div
          className="testimonial-wrap mt-12"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <button
            className="carousel-arrow left-0"
            onClick={() => setCurrent((current + testimonials.length - 1) % testimonials.length)}
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <motion.article
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="testimonial-card"
          >
            <div className="stars">★★★★★</div>
            <blockquote>"{t?.quote}"</blockquote>
            <div className="mt-7 flex items-center gap-4">
              <div className="avatar">{t?.initials}</div>
              <div>
                <strong>{t?.name}</strong>
                <p className="text-sm text-muted-foreground">{t?.role}</p>
              </div>
            </div>
          </motion.article>
          <button
            className="carousel-arrow right-0"
            onClick={() => setCurrent((current + 1) % testimonials.length)}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === current ? "carousel-dot-active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}