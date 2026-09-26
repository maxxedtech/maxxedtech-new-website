import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock, Tag, X } from "lucide-react";
import { useState } from "react";
import { CTASection, InnerHero, SectionHeading } from "@/components/site/Primitives";
import { blogPosts, type BlogPost } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () =>
    pageHead({
      title: "Insights & Articles",
      path: "/blog",
      description:
        "Actionable insights on custom web development, AI automation, SEO, and brand growth for forward-thinking businesses worldwide.",
    }),
  component: Blog,
});

const categories = ["All", "Web Dev", "AI", "Business Tips", "Branding", "SEO"] as const;

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <InnerHero
        eyebrow="Insights & Articles"
        title="Knowledge for"
        accent="Digital Growth"
        copy="Actionable perspectives on modern web architecture, AI implementation, and scaling your brand in today's digital landscape."
      />

      {/* Category Filter Bar */}
      <div className="filter-bar">
        <div className="site-container flex gap-2 overflow-x-auto py-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`filter-pill shrink-0 cursor-pointer ${
                selectedCategory === cat ? "filter-pill-active" : ""
              }`}
            >
              {selectedCategory === cat && (
                <motion.span layoutId="blog-pill" className="filter-pill-bg" />
              )}
              <span className="relative">{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Blog Cards Grid */}
      <section className="section-pad">
        <div className="site-container">
          <SectionHeading
            label="Latest Articles"
            title="Read, Learn & Implement"
            copy="Hand-crafted advice from engineers and product strategists who build every day."
          />

          <motion.div
            layout
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post) => (
                <motion.article
                  layout
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="surface-card hoverable flex flex-col justify-between group cursor-pointer"
                  onClick={() => setActiveArticle(post)}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
                      <span className="tag">{post.category}</span>
                      <div className="flex items-center gap-1.5 font-mono">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="card-title mt-5 group-hover:text-primary transition-colors text-xl leading-snug">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="card-link text-primary font-semibold flex items-center gap-1">
                      Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            className="modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={activeArticle.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveArticle(null)}
          >
            <motion.div
              className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-10 relative"
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="icon-button absolute right-5 top-5 bg-background/80 hover:bg-primary/20 hover:text-primary transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 text-xs">
                <span className="tag">{activeArticle.category}</span>
                <span className="text-muted-foreground">{activeArticle.date}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{activeArticle.readTime}</span>
              </div>

              <h2 className="mt-5 text-2xl md:text-3xl font-display font-bold leading-tight">
                {activeArticle.title}
              </h2>

              <p className="mt-4 text-base text-muted-foreground leading-relaxed italic border-l-2 border-primary pl-4">
                "{activeArticle.excerpt}"
              </p>

              <div className="mt-6 space-y-4 text-foreground/90 text-sm md:text-base leading-relaxed">
                {activeArticle.content ? (
                  activeArticle.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))
                ) : (
                  <p>Full article insight coming soon.</p>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="avatar h-10 w-10 text-sm">MT</div>
                  <div>
                    <strong className="block text-sm">Maxxed Tech Editorial</strong>
                    <span className="text-xs text-muted-foreground">Tech & Strategy Team</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="button button-primary button-sm w-full sm:w-auto"
                >
                  Consult With Us <span>→</span>
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
