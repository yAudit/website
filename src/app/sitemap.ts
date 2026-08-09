import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://yaudit.dev";
  const routes = [
    "",
    "/services",
    "/team",
    "/fellowships",
    "/zk",
    "/zBlock1",
    "/zBlock2",
    "/contact-us",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
