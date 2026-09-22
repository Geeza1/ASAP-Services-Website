import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.asapautoelectrics.com.au/sitemap.xml",
    host: "https://www.asapautoelectrics.com.au",
  };
}