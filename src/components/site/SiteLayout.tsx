import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Facebook, Instagram, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { COMPANY, services } from "@/data/site";
import { Brand } from "./Brand";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 80], ["rgba(0,0,0,0)", "rgba(0,0,0,0.92)"]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  // Trap focus and close on Escape for mobile menu
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Nav */}
      <motion.header
        style={{ backgroundColor: navBg }}
        className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}
      >
        <div className="site-container flex h-20 items-center justify-between">
          <Brand />

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {nav.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                className={`nav-link ${pathname === to ? "nav-link-active" : ""}`}
              >
                {label}
                {pathname === to && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute left-0 -bottom-[14px] h-[2px] w-full bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="button button-primary button-sm pulse-glow">
              Get Started <span>→</span>
            </Link>
          </div>

          <button
            className="icon-button lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
            </div>

            <div className="site-container relative z-10 flex h-20 items-center justify-between">
              <Brand />
              <button
                className="icon-button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X />
              </button>
            </div>

            <motion.nav
              className="relative z-10 flex flex-1 flex-col items-center justify-center gap-2"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } }}
            >
              {nav.map(([label, to]) => (
                <motion.div
                  key={to}
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                >
                  <Link
                    to={to}
                    className={`font-display text-4xl transition-colors duration-200 hover:text-primary ${
                      pathname === to ? "text-primary" : "text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="mt-6"
              >
                <Link to="/contact" className="button button-primary button-lg">
                  Start Your Project <span>→</span>
                </Link>
              </motion.div>
            </motion.nav>

            {/* Mobile menu footer socials */}
            <div className="relative z-10 site-container flex justify-center gap-4 pb-10">
              <Social href={COMPANY.facebook} label="Facebook"><Facebook /></Social>
              <Social href={COMPANY.instagram} label="Instagram"><Instagram /></Social>
              <Social href={COMPANY.tiktok} label="TikTok"><span className="text-xs font-bold">TT</span></Social>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Page Content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: "easeInOut" }}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />

      {/* WhatsApp FAB */}
      <motion.a
        href={COMPANY.whatsappMessageHref}
        className="whatsapp-fab"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Maxxed Tech on WhatsApp"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-surface-deep py-16">
      <div className="site-container grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand Column */}
        <div>
          <Brand />
          <p className="mt-5 max-w-xs text-sm text-muted-foreground">{COMPANY.tagline}</p>
          <div className="mt-6 flex gap-3">
            <Social href={COMPANY.facebook} label="Facebook"><Facebook /></Social>
            <Social href={COMPANY.instagram} label="Instagram"><Instagram /></Social>
            <Social href={COMPANY.tiktok} label="TikTok"><span className="text-xs font-bold">TT</span></Social>
          </div>
        </div>

        {/* Company Links */}
        <FooterLinks title="Company" links={nav.slice(1)} />

        {/* Services Links */}
        <FooterLinks
          title="Services"
          links={services.map((s) => [s.shortTitle, "/services"] as const)}
        />

        {/* Contact */}
        <div>
          <h3 className="footer-title">Contact</h3>
          <div className="mt-5 space-y-4 text-sm text-muted-foreground">
            <a className="footer-contact" href={COMPANY.phoneHref}><Phone />{COMPANY.phoneDisplay}</a>
            <a className="footer-contact" href={COMPANY.emailHref}><Mail />{COMPANY.email}</a>
            <a
              className="footer-link block"
              href={COMPANY.whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp: {COMPANY.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-rule site-container mt-14 flex flex-col gap-4 pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <span>© {COMPANY.copyright} MaxxedTech Ltd. All rights reserved.</span>
        <div className="flex gap-5">
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          <Link to="/terms" className="footer-link">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="social-button"
      whileHover={{ scale: 1.15, rotate: 4 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  );
}

function FooterLinks({
  title,
  links,
}: {
  title: string;
  links: readonly (readonly [string, string])[];
}) {
  return (
    <div>
      <h3 className="footer-title">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map(([label, to], i) => (
          <li key={`${label}-${i}`}>
            <Link to={to as "/"} className="footer-link text-sm">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}