import { createFileRoute, Link } from "@tanstack/react-router";
import { InnerHero } from "@/components/site/Primitives";
import { pageHead } from "@/lib/seo";
import { COMPANY } from "@/data/site";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      title: "Terms of Service",
      path: "/terms",
      description: "Terms of Service governing Maxxed Tech consulting, development, and support engagements.",
    }),
  component: TermsOfService,
});

function TermsOfService() {
  return (
    <>
      <InnerHero
        eyebrow="Legal & Governance"
        title="Terms of"
        accent="Service"
        copy="The governing terms for all digital design, engineering, and support engagements with Maxxed Tech."
      />

      <section className="section-pad">
        <div className="site-container max-w-3xl prose-article">
          <p className="text-sm text-muted-foreground font-mono">Last updated: September 2026</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing this website or engaging {COMPANY.name} Ltd ("Maxxed Tech") for any digital services, you confirm you have read, understood, and agree to be bound by these Terms of Service. If you are acting on behalf of a business entity, you warrant that you are authorized to accept these terms on that entity's behalf.
          </p>

          <h2>2. Scope of Services</h2>
          <p>
            Maxxed Tech provides bespoke digital services including, but not limited to, custom website engineering, AI automation systems, brand identity design, digital optimization, and ongoing technical support. The exact scope, timeline, and deliverables for each project are defined in the agreed Statement of Work (SOW) or Project Proposal.
          </p>

          <h2>3. Client Obligations</h2>
          <ul>
            <li>Provide accurate, complete information required to execute the project.</li>
            <li>Respond to design reviews, technical queries, and approvals within agreed timelines.</li>
            <li>Grant access to third-party platforms, CMS, and hosting environments as needed.</li>
            <li>Settle invoices per the payment schedule outlined in the project proposal.</li>
          </ul>

          <h2>4. Intellectual Property & Licensing</h2>
          <p>
            Upon receipt of full payment, Maxxed Tech transfers all intellectual property rights for client-specific code, designs, and deliverables to the client. Maxxed Tech retains the right to reference the project as part of its portfolio, unless explicitly excluded by a non-disclosure clause in writing.
          </p>

          <h2>5. Warranty & Post-Launch Support</h2>
          <p>
            All standard projects include a 30-day post-launch support window covering critical bug fixes and minor content adjustments. Ongoing maintenance and enhancement services beyond this period are available under a dedicated Support Retainer agreement.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            Maxxed Tech's liability for any claim arising from an engagement shall not exceed the total fees paid for the specific project. We are not liable for indirect, consequential, or business losses arising from third-party service failures, including hosting providers, payment processors, or cloud infrastructure.
          </p>

          <h2>7. Governing Standards</h2>
          <p>
            These terms are governed by standard commercial and intellectual property practices for digital software services.
          </p>

          <h2>8. Contact</h2>
          <p>
            For legal enquiries contact: <a href={COMPANY.emailHref}>{COMPANY.email}</a>
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
