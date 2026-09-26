import { z } from "zod";

export const serviceOptions = ["Web Development", "AI Solutions", "Brand Identity", "Maintenance & Support", "Digital Optimization", "Other"] as const;
export const budgetOptions = ["Under ₦500,000", "₦500,000–₦2,000,000", "₦2,000,000–₦5,000,000", "Above ₦5,000,000", "Let's Discuss"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().max(20).regex(/^[+\d\s()-]*$/, "Please enter a valid phone number").optional().or(z.literal("")),
  service: z.enum(serviceOptions, { errorMap: () => ({ message: "Please choose a service" }) }),
  budget: z.enum(budgetOptions, { errorMap: () => ({ message: "Please choose a budget range" }) }),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;
