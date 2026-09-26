import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Preloader } from "@/components/site/Preloader";

function NotFoundComponent() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 text-center">
      <motion.div className="hero-glow hero-glow-a" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 8, repeat: Infinity }} />
      <div className="relative z-10">
        <h1 className="gradient-text text-[120px] leading-none md:text-[160px]">404</h1>
        <h2 className="mt-4 text-3xl">Looks like you're lost.</h2>
        <p className="mt-3 text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="button button-primary button-lg mt-8">Back to Home <span>→</span></Link>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error("Application error boundary triggered:", error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4 text-center">
      <div className="max-w-md">
        <h1 className="text-3xl">This page didn't load</h1>
        <p className="mt-3 text-muted-foreground">Something went wrong on our end. Try again or head back home.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="button button-primary button-sm">Try again</button>
          <a href="/" className="button button-outline button-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MaxxedTech Ltd | Build Smarter. Launch Faster. Scale Bigger." },
      { name: "description", content: "Custom websites, AI tools, brand identity and tech support for ambitious businesses worldwide." },
      { name: "author", content: "MaxxedTech Ltd" },
      { name: "theme-color", content: "#000000" },
      { property: "og:site_name", content: "MaxxedTech Ltd" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/images/logo/favicon-logo.png", type: "image/png" },
      { rel: "shortcut icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/images/logo/badge-logo.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@700;800&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head><HeadContent /></head>
      <body className="bg-background text-foreground antialiased selection:bg-primary selection:text-black">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Preloader />
      <SiteLayout>
        <Outlet />
      </SiteLayout>
    </QueryClientProvider>
  );
}
