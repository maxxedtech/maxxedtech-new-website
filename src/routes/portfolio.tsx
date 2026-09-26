import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Construction, ExternalLink, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CTASection, InnerHero } from "@/components/site/Primitives";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects, type Project } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/portfolio")({
  head: () =>
    pageHead({
      title: "Portfolio",
      path: "/portfolio",
      description:
        "Websites, brand identities and AI solutions Maxxed Tech has built for growing businesses — with the results to match.",
    }),
  component: Portfolio,
});

const filters = ["All", "Web Development", "Branding", "AI Solutions"] as const;

function Portfolio() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<Project | null>(null);

  const shown =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <InnerHero
        eyebrow="Portfolio"
        title="Work That"
        accent="Speaks for Itself"
        copy="Real projects. Real results. Every build tied to a business goal."
      />

      {/* Filter Bar */}
      <div className="filter-bar">
        <div className="site-container flex gap-2 overflow-x-auto py-4">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`filter-pill shrink-0 ${filter === f ? "filter-pill-active" : ""}`}
            >
              {filter === f && (
                <motion.span layoutId="pill" className="filter-pill-bg" />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <section className="section-pad">
        <div className="site-container">
          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {shown.map((p) => (
                <motion.div
                  layout
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard
                    project={p}
                    onOpen={(proj) => {
                      if (!proj.isUnderConstruction) setOpen(proj);
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={open.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-card"
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Visual Header */}
              <div className={`project-visual ${open.visual} h-64 relative`}>
                <div className="project-mock">
                  <span />
                  <span />
                  <span />
                </div>
                <button
                  onClick={() => setOpen(null)}
                  className="icon-button absolute right-4 top-4 bg-background/70 hover:bg-primary/20 hover:text-primary transition-colors"
                  aria-label="Close"
                >
                  <X />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="tag">{open.category}</span>
                    <span className="tag">{open.year}</span>
                  </div>
                  {open.url && (
                    <a
                      href={open.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm text-primary font-semibold hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Live Site
                    </a>
                  )}
                </div>

                <h2 className="mt-4 text-4xl">{open.title}</h2>
                <p className="mt-3 text-muted-foreground text-lg">{open.description}</p>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  {[
                    ["The Challenge", open.challenge],
                    ["Our Solution", open.solution],
                    ["The Results", open.result],
                  ].map(([t, c]) => (
                    <div key={t} className="surface-card">
                      <h3 className="text-base font-semibold text-primary">{t}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{c}</p>
                    </div>
                  ))}
                </div>

                <p className="eyebrow mt-8">Tech Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {open.tags.map((t) => (
                    <span key={t} className="tech-pill text-sm">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="button button-primary button-lg mt-9"
                >
                  Start a Similar Project <span>→</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </>
  );
}
