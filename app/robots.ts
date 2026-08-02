import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.asapauto.com.au/sitemap.xml",
    host: "https://www.asapauto.com.au",
  };
}