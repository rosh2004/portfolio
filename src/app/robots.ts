import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/privacy"]
      }
    ],
    sitemap: `${process.env.SITE_BASE_URL}/sitemap.xml`
  }
}