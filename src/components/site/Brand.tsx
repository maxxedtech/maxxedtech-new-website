import { Link } from "@tanstack/react-router";

export function Brand({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  return (
    <Link
      to="/"
      aria-label="Maxxed Tech home"
      className={`inline-flex items-center transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] ${className}`}
    >
      <img
        src="/images/logo/maxxed-logo-3.png"
        alt="Maxxed Tech"
        className={`w-auto object-contain transition-all duration-300 ${
          compact ? "h-9 sm:h-11" : "h-9 sm:h-11 lg:h-12"
        }`}
        loading="eager"
      />
    </Link>
  );
}
