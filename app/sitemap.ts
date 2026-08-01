import type { MetadataRoute } from "next";

const siteUrl = "https://asapauto.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceSlugs = [
    "auto-electrical-diagnostics",
    "alternator-repairs",
    "starter-motor-repairs",
    "electric-window-repairs",
    "brake-controllers",
    "anderson-plugs",
    "lighting-repairs",
    "battery-charging-system",
    "trailer-wiring",
  ];

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...serviceSlugs.map((slug) => ({
      url: `${siteUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}