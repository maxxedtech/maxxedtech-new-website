import { Link } from "@tanstack/react-router";

export function Brand({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  return (
    <Link
      to="/"
      aria-label="Maxxed Tech home"
      className={`inline-flex items-center transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] ${className}`}
    >
      <img
        src="/images/logo/navbar-logo.png"
        alt="Maxxed Tech"
        className={`w-auto object-contain transition-all duration-300 ${
          compact ? "h-7 md:h-8" : "h-9 md:h-11"
        }`}
        loading="eager"
      />
    </Link>
  );
}