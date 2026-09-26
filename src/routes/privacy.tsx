import { createFileRoute, Link } from "@tanstack/react-router";
import { InnerHero } from "@/components/site/Primitives";
import { pageHead } from "@/lib/seo";
import { COMPANY } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      title: "Privacy Policy",
      path: "/privacy",
      description: "Privacy Policy and data governance standards at Maxxed Tech.",
    }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <>
      <InnerHero
        eyebrow="Legal & Governance"
        title="Privacy"
        accent="Policy"
        copy="Our commitment to safeguarding your business data, project details, and digital communication."
      />

      <section className="section-pad">
        <div className="site-container max-w-3xl prose-article">
          <p className="text-sm text-muted-foreground font-mono">Last updated: September 2026</p>

          <h2>1. Overview</h2>
          <p>
            At {COMPANY.name} Ltd ("Maxxed Tech", "we", "us", or "our"), respecting your privacy is fundamental to how we engineer and deliver technology solutions. This policy outlines our standards regarding data collection, protection, and utilization when you interact with our website or engage our consulting and development services.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We collect information provided directly by you when you request a proposal, contact us via inquiry forms, or communicate with our technical teams:
          </p>
          <ul>
            <li><strong>Contact Credentials:</strong> Full name, corporate email address, phone number, and company name.</li>
            <li><strong>Project Specifications:</strong> Scope details, architecture requirements, timeline estimates, and budget ranges.</li>
            <li><strong>Technical Telemetry:</strong> Anonymized interaction metrics, device types, and browser specifications collected to optimize performance.</li>
          </ul>

          <h2>3. How We Use Information</h2>
          <p>
            Data provided is strictly employed to deliver, maintain, and optimize client projects:
          </p>
          <ul>
            <li>Responding to requests for consultation, proposals, and development timelines.</li>
            <li>Executing digital services, deployment pipelines, and technical support.</li>
            <li>Providing critical security notices and service enhancements.</li>
          </ul>

          <h2>4. Data Confidentiality & Non-Disclosure</h2>
          <p>
            We do not sell, lease, or monetize your contact or project information. All client IP, source code, and business models shared during discovery or development are protected under standard non-disclosure practices.
          </p>

          <h2>5. Contact & Data Officer</h2>
          <p>
            For any inquiries regarding data protection, please reach our governance team at:
          </p>
          <p>
            <strong>Email:</strong> <a href={COMPANY.emailHref}>{COMPANY.email}</a>
          </p>

          <div className="mt-12 pt-8 border-t border-border">
            <Link to="/" className="button button-outline button-sm">
              ← Return Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
