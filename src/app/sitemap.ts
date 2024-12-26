import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
  return await [
    {
      url: `https://${process.env.SITE_DOMAIN}`,
      // lastModified: new Date(post.updatedAt),
      // changeFrequency:,
      // priority: ,
    },
    {
      url: `https://www.${process.env.SITE_DOMAIN}`
    },
  ]
}