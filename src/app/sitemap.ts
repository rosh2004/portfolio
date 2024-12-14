import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
  return await [
    {
      url: `${process.env.SITE_BASE_URL}/`,
      // lastModified: new Date(post.updatedAt),
      // changeFrequency:,
      // priority: ,
    },
    {
      url: `${process.env.SITE_BASE_URL}/about`
    },
  ]
}