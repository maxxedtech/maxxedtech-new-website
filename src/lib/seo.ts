import { COMPANY } from "@/data/site";

export function pageHead({ title, description, path, image, type = "website" }: { title: string; description: string; path: string; image?: string; type?: string }) {
  const url = `${COMPANY.siteUrl}${path}`;
  const img = image ?? `${COMPANY.siteUrl}/og-image.jpg`;
  const full = `${title} | Maxxed Tech`;
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:image", content: img },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: full },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
