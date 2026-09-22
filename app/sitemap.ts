import type { MetadataRoute } from "next";

const siteUrl = "https://www.asapautoelectrics.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceSlugs = [
    "auto-electrical-diagnostics",
    "alternator-repairs",
    "battery-charging-system",
    "brake-controllers",
    "car-air-conditioning",
    "dash-cam-installation",
    "electric-window-repairs",
    "anderson-plugs",
    "lighting-repairs",
    "starter-motor-repairs",
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
