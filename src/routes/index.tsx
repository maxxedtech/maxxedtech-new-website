import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
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
  const reduceMotion = useReducedMotion();

  return (
    <>
      {/* ─── CINEMATIC HERO ─── */}
      <section className="home-hero maxxed-hero">
        <div className="dot-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-a" aria-hidden="true" />
        <div className="hero-glow hero-glow-b" aria-hidden="true" />
        <div className="noise" aria-hidden="true" />

        <div className="site-container maxxed-hero-layout relative z-10">
          <div className="maxxed-hero-copy">
            <motion.div {...reveal} transition={{ duration: 0.55 }} className="maxxed-hero-eyebrow">
              <span className="maxxed-status-dot" />
              DIGITAL SYSTEMS STUDIO <span className="maxxed-eyebrow-divider" /> EST. 2024
            </motion.div>

            <motion.h1
              className="maxxed-hero-title mt-7"
              {...reveal}
              transition={{ delay: 0.12, duration: 0.65 }}
            >
              We build digital
              <br />
              <span className="gradient-text">experiences that</span>
              <br />
              move business forward.
            </motion.h1>

            <motion.p
              className="maxxed-hero-description mt-6"
              {...reveal}
              transition={{ delay: 0.24, duration: 0.55 }}
            >
              Websites, intelligent automation and digital identities engineered to help ambitious businesses move with confidence.
            </motion.p>

            <motion.div className="mt-8 flex flex-wrap gap-3" {...reveal} transition={{ delay: 0.34, duration: 0.5 }}>
              <Link to="/contact" className="button button-primary button-lg maxxed-hero-primary">
                Start a Project <span aria-hidden="true">↗</span>
              </Link>
              <Link to="/portfolio" className="button button-outline button-lg maxxed-hero-secondary">
                Explore Our Work <span aria-hidden="true">↓</span>
              </Link>
            </motion.div>

            <motion.div
              className="maxxed-hero-proof mt-9"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.55 }}
            >
              <div className="maxxed-proof-mark"><span /><span /><span /></div>
              <div>
                <strong>Strategy meets execution.</strong>
                <span>Thoughtful digital products, built around your next move.</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="maxxed-hero-visual"
            onMouseMove={(event) => {
              if (reduceMotion) return;
              const bounds = event.currentTarget.getBoundingClientRect();
              const x = (event.clientX - bounds.left) / bounds.width;
              const y = (event.clientY - bounds.top) / bounds.height;
              event.currentTarget.style.setProperty("--pointer-x", `${x * 100}%`);
              event.currentTarget.style.setProperty("--pointer-y", `${y * 100}%`);
              event.currentTarget.style.setProperty("--pointer-shift-x", `${(x - 0.5) * 14}px`);
              event.currentTarget.style.setProperty("--pointer-shift-y", `${(y - 0.5) * 10}px`);
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.setProperty("--pointer-x", "50%");
              event.currentTarget.style.setProperty("--pointer-y", "50%");
              event.currentTarget.style.setProperty("--pointer-shift-x", "0px");
              event.currentTarget.style.setProperty("--pointer-shift-y", "0px");
            }}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.2 : 1, delay: 0.12, ease: [0.2, 0.7, 0.2, 1] }}
            aria-label="Abstract 3D digital sculpture surrounded by interface panels"
            role="img"
          >
            <div className="maxxed-visual-vignette" aria-hidden="true" />
            <div className="maxxed-hero-gridfloor" aria-hidden="true" />
            <div className="maxxed-sculpture-stage" aria-hidden="true">
              <div className="maxxed-sculpture-shadow" />
              <div className="maxxed-sculpture-ring maxxed-sculpture-ring-a" />
              <div className="maxxed-sculpture-ring maxxed-sculpture-ring-b" />
              <div className="maxxed-sculpture-ring maxxed-sculpture-ring-c" />
              <div className="maxxed-sculpture">
                <span className="maxxed-sculpture-surface surface-a" />
                <span className="maxxed-sculpture-surface surface-b" />
                <span className="maxxed-sculpture-surface surface-c" />
                <span className="maxxed-sculpture-surface surface-d" />
              </div>
              <span className="maxxed-sculpture-light" />
            </div>

            <motion.div className="maxxed-float-panel maxxed-panel-top" animate={reduceMotion ? undefined : { y: [0, -8, 0], rotate: [-3, -1, -3] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
              <div className="maxxed-panel-label"><span /> SYSTEM STATUS</div>
              <div className="maxxed-panel-status">All systems <b>operational</b></div>
              <div className="maxxed-panel-bars"><i /><i /><i /><i /><i /><i /><i /><i /></div>
            </motion.div>

            <motion.div className="maxxed-float-panel maxxed-panel-side" animate={reduceMotion ? undefined : { y: [0, 9, 0], rotate: [2, 4, 2] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}>
              <div className="maxxed-panel-label">DIGITAL ECOSYSTEM</div>
              <div className="maxxed-ecosystem-nodes"><span>WEB</span><i /><span>AI</span><i /><span>UX</span></div>
              <div className="maxxed-panel-caption">Connected by design</div>
            </motion.div>

            <motion.div className="maxxed-float-panel maxxed-panel-bottom" animate={reduceMotion ? undefined : { y: [0, -6, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}>
              <span className="maxxed-panel-orbit-icon">↗</span>
              <div><strong>Built for what's next.</strong><span>DESIGN · ENGINEERING · GROWTH</span></div>
            </motion.div>

            <div className="maxxed-visual-index" aria-hidden="true"><span>MT / 001</span><span>FORM FOLLOWS FUNCTION</span></div>
          </motion.div>
        </div>

        <div className="maxxed-hero-bottom site-container">
          <span><i /> INDEPENDENT DIGITAL PARTNER</span>
          <span>SCROLL TO EXPLORE <ChevronDown size={15} /></span>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <Marquee />

      {/* ─── INTERACTIVE DIGITAL UNIVERSE ─── */}
      <DigitalUniverse />

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

      {/* ─── CINEMATIC SELECTED WORK ─── */}
      <section className="section-pad maxxed-work-section">
        <div className="site-container">
          <div className="maxxed-work-heading">
            <div>
              <span className="maxxed-section-kicker"><i /> SELECTED TRANSMISSIONS / 2025—26</span>
              <SectionHeading
                label="Built in our world"
                title={<>Good work should <span className="gradient-text">speak first.</span></>}
                copy="A closer look at digital experiences, platforms and identities shaped around a real purpose."
              />
            </div>
            <Link to="/portfolio" className="maxxed-work-all">Explore all projects <span>↗</span></Link>
          </div>

          <article className="maxxed-featured-project">
            <div className="maxxed-featured-art project-visual-a">
              <div className="maxxed-featured-art-grid" aria-hidden="true" />
              <div className="maxxed-art-window maxxed-art-window-back" aria-hidden="true">
                <div className="maxxed-art-window-bar"><i /><i /><i /><span>SC / DIGITAL SHOWROOM</span></div>
                <div className="maxxed-art-window-lines"><i /><i /><i /><i /></div>
              </div>
              <div className="maxxed-art-window maxxed-art-window-front" aria-hidden="true">
                <div className="maxxed-art-brand">SC<span>.</span></div>
                <div className="maxxed-art-headline">A clearer view<br />of what’s possible.</div>
                <div className="maxxed-art-cta">EXPLORE THE PLATFORM <span>↗</span></div>
                <div className="maxxed-art-orbit" />
              </div>
              <span className="maxxed-art-index">CASE / 001</span>
              <span className="maxxed-art-caption">DIGITAL SHOWCASE · 2026</span>
            </div>
            <div className="maxxed-featured-copy">
              <div className="maxxed-featured-meta"><span>FEATURED PROJECT</span><span>01 / 03</span></div>
              <h3>Sunny Concepts</h3>
              <p>A polished enterprise showcase designed to bring engineering, technology and modern solutions into one confident digital presence.</p>
              <div className="maxxed-featured-tags"><span>Web development</span><span>Digital experience</span><span>Enterprise</span></div>
              <div className="maxxed-featured-bottom">
                <Link to="/portfolio" className="maxxed-featured-link">Explore the case <span>↗</span></Link>
                <a href="https://sunnyconcepts.vercel.app" target="_blank" rel="noreferrer" className="maxxed-featured-live">VISIT LIVE SITE <span>↗</span></a>
              </div>
            </div>
          </article>

          <div className="maxxed-supporting-projects">
            {projects.slice(1, 3).map((p, i) => (
              <article className="maxxed-supporting-project" key={p.id}>
                <div className={`maxxed-supporting-art ${p.visual}`}>
                  <span className="maxxed-supporting-index">0{String(i + 2)}</span>
                  <div className="maxxed-supporting-orbit" aria-hidden="true" />
                  <div className="maxxed-supporting-window" aria-hidden="true"><i /><i /><i /><span>{p.category.toUpperCase()}</span></div>
                </div>
                <div className="maxxed-supporting-copy">
                  <span>{p.category} <i /> {p.year}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="maxxed-supporting-foot">
                    <span>{p.isUnderConstruction ? "IN DEVELOPMENT" : "SELECTED WORK"}</span>
                    {p.url && !p.isUnderConstruction ? <a href={p.url} target="_blank" rel="noreferrer" aria-label={`Visit ${p.title}`}>↗</a> : <Link to="/portfolio" aria-label={`Explore ${p.title}`}>↗</Link>}
                  </div>
                </div>
              </article>
            ))}
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


function DigitalUniverse() {
  const [activeCapability, setActiveCapability] = useState(0);
  const activeService = services[activeCapability] ?? services[0];
  const ActiveIcon = activeService.icon;

  return (
    <section className="section-pad maxxed-universe-section">
      <div className="site-container">
        <div className="maxxed-universe-intro">
          <div>
            <span className="maxxed-section-kicker"><i /> ONE STUDIO / MANY POSSIBILITIES</span>
            <SectionHeading
              label="The Maxxed ecosystem"
              title={<>One partner. <span className="gradient-text">Every next move.</span></>}
              copy="Explore the capabilities that turn ambitious ideas into connected digital experiences."
            />
          </div>
          <span className="maxxed-universe-index">MT / CAPABILITIES<br />01—05</span>
        </div>

        <div className="maxxed-universe-grid">
          <div className="maxxed-universe-selector" role="tablist" aria-label="Explore Maxxed Tech capabilities">
            {services.map((service, index) => {
              const Icon = service.icon;
              const selected = activeCapability === index;
              return (
                <button
                  type="button"
                  key={service.slug}
                  role="tab"
                  id={`capability-tab-${service.slug}`}
                  aria-selected={selected}
                  aria-controls="capability-detail"
                  className={`maxxed-capability-tab ${selected ? "is-active" : ""}`}
                  onClick={() => setActiveCapability(index)}
                >
                  <span className="maxxed-capability-number">0{index + 1}</span>
                  <span className="maxxed-capability-icon"><Icon size={19} strokeWidth={1.7} /></span>
                  <span className="maxxed-capability-label">{service.shortTitle}</span>
                  <span className="maxxed-capability-arrow" aria-hidden="true">↗</span>
                </button>
              );
            })}
          </div>

          <motion.div
            key={activeService.slug}
            id="capability-detail"
            role="tabpanel"
            aria-labelledby={`capability-tab-${activeService.slug}`}
            className="maxxed-capability-detail"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            <div className="maxxed-capability-visual" aria-hidden="true">
              <div className="maxxed-capability-grid" />
              <div className="maxxed-capability-ring ring-outer" />
              <div className="maxxed-capability-ring ring-middle" />
              <div className="maxxed-capability-ring ring-inner" />
              <div className="maxxed-capability-core"><ActiveIcon size={34} strokeWidth={1.3} /></div>
              <span className="maxxed-capability-node node-one">STRATEGY</span>
              <span className="maxxed-capability-node node-two">DESIGN</span>
              <span className="maxxed-capability-node node-three">DELIVERY</span>
              <span className="maxxed-capability-coordinate">0{activeCapability + 1} / 05</span>
            </div>
            <div className="maxxed-capability-copy">
              <span className="maxxed-capability-kicker">CAPABILITY / 0{activeCapability + 1}</span>
              <h3>{activeService.title}</h3>
              <p>{activeService.benefit}</p>
              <ul>
                {activeService.features.slice(0, 4).map((feature) => (
                  <li key={feature}><span aria-hidden="true">↗</span>{feature}</li>
                ))}
              </ul>
              <Link to="/services" className="maxxed-featured-link">Explore this capability <span>↗</span></Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
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