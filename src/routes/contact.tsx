import { createFileRoute } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Facebook, Globe, Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { InnerHero } from "@/components/site/Primitives";
import { COMPANY } from "@/data/site";
import { budgetOptions, contactSchema, serviceOptions, type ContactInput } from "@/lib/contact-schema";
import { sendContactMessage } from "@/lib/contact.functions";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact",
      path: "/contact",
      description:
        "Start your project with Maxxed Tech. Send us a message, call, or chat on WhatsApp — we respond within 24 hours.",
    }),
  component: Contact,
});

function Contact() {
  const send = useServerFn(sendContactMessage);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (data: ContactInput) => {
    setStatus("idle");
    try {
      const r = await send({ data });
      if (!r.ok) throw new Error("send failed");
      setStatus("success");
      setTimeout(() => {
        reset();
        setStatus("idle");
      }, 3000);
    } catch {
      setStatus("error");
    }
  };

  const cls = (k: keyof ContactInput) =>
    `field ${errors[k] ? "field-error" : touchedFields[k] ? "field-valid" : ""}`;

  return (
    <>
      <InnerHero
        eyebrow="Contact"
        title="Let's Build Something"
        accent="Amazing Together"
        copy="Fill in the form or reach us directly — we respond within 24 hours."
      />
      <section className="section-pad">
        <div className="site-container grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="relative rounded-2xl border border-border bg-card p-6 md:p-10"
          >
            <fieldset disabled={isSubmitting} className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name *" error={errors.name?.message}>
                <input
                  className={cls("name")}
                  autoComplete="name"
                  placeholder="Your full name"
                  {...register("name")}
                />
              </Field>
              <Field label="Email *" error={errors.email?.message}>
                <input
                  type="email"
                  className={cls("email")}
                  autoComplete="email"
                  placeholder="you@company.com"
                  {...register("email")}
                />
              </Field>
              <Field label="Phone" error={errors.phone?.message}>
                <input
                  type="tel"
                  className={cls("phone")}
                  autoComplete="tel"
                  placeholder="+1 (555) 000-0000"
                  {...register("phone")}
                />
              </Field>
              <Field label="Service Interest *" error={errors.service?.message}>
                <select className={cls("service")} defaultValue="" {...register("service")}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Budget Range *" error={errors.budget?.message}>
                  <select className={cls("budget")} defaultValue="" {...register("budget")}>
                    <option value="" disabled>
                      Select a budget range
                    </option>
                    {budgetOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Message *" error={errors.message?.message}>
                  <textarea
                    rows={5}
                    className={cls("message")}
                    placeholder="Tell us about your project and goals"
                    {...register("message")}
                  />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="button button-primary button-lg w-full">
                  {isSubmitting ? (
                    <>
                      <i className="spinner" /> Sending…
                    </>
                  ) : (
                    <>
                      Send Message <span>→</span>
                    </>
                  )}
                </button>
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-4 flex items-center gap-3 rounded-lg border border-success/40 bg-success/10 p-4 text-success"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring" }}
                        className="grid h-7 w-7 place-items-center rounded-full bg-success text-background"
                      >
                        <Check className="h-4 w-4" />
                      </motion.span>
                      Message sent! We'll respond within 24 hours.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      role="alert"
                      className="mt-4 rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive"
                    >
                      Something went wrong. Please try again or contact us directly on{" "}
                      <a
                        className="underline"
                        href={COMPANY.whatsappMessageHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        WhatsApp
                      </a>
                      .
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </fieldset>
          </form>
          <aside>
            <h2 className="text-3xl">Get in Touch</h2>
            <p className="mt-3 text-muted-foreground">
              Prefer to talk? Reach us any way that suits you.
            </p>
            <div className="mt-8 grid gap-4">
              <InfoCard
                icon={<Phone />}
                label="Phone"
                value={COMPANY.phoneDisplay}
                href={COMPANY.phoneHref}
              />
              <InfoCard
                icon={<MessageCircle />}
                label="WhatsApp"
                value={COMPANY.whatsappDisplay}
                href={COMPANY.whatsappHref}
              />
              <InfoCard
                icon={<Mail />}
                label="Email"
                value={COMPANY.email}
                href={COMPANY.emailHref}
              />
            </div>
            <div className="mt-6 flex gap-3">
              <a
                className="social-button"
                href={COMPANY.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                className="social-button"
                href={COMPANY.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                className="social-button"
                href={COMPANY.tiktok}
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              >
                <span className="text-xs font-bold">TT</span>
              </a>
            </div>
            <div className="mt-8 rounded-2xl border border-whatsapp/25 bg-whatsapp/[0.08] p-6">
              <h3 className="text-xl">Need a quick answer?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Chat with us on WhatsApp for fast replies.
              </p>
              <a
                href={COMPANY.whatsappMessageHref}
                target="_blank"
                rel="noreferrer"
                className="button button-sm mt-5 bg-whatsapp text-background hover:brightness-95"
              >
                Chat on WhatsApp <span>→</span>
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      {children}
      {error && <p className="error-text">{error}</p>}
    </label>
  );
}

function InfoCard({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const body = (
    <>
      <div className="icon-tile h-11 w-11">{icon}</div>
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="mt-1 font-semibold">{value}</p>
      </div>
    </>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="surface-card hoverable flex items-center gap-4 !p-5"
    >
      {body}
    </a>
  ) : (
    <div className="surface-card flex items-center gap-4 !p-5">{body}</div>
  );
}
