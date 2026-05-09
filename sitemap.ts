import fs from "fs";
import axios from "axios";
import { SitemapStream, streamToPromise } from "sitemap";
import { RESOURCES } from "./src/data/resources";

// ───────────────── TYPES ─────────────────

interface BlogPost {
  url_handle: string;
}

interface BlogApiResponse {
  data: BlogPost[];
}

interface SitemapRoute {
  url: string;
  changefreq: "weekly" | "monthly";
  priority: number;
}

// ───────────────── CONFIG ─────────────────

const BASE_URL: string = "https://collabuilder.com";

// ───────────────── FETCH BLOGS ─────────────────

async function getBlogRoutes(): Promise<SitemapRoute[]> {
  try {
    const res = await axios.get<BlogApiResponse>(
      "https://caster-backend.onrender.com/api/blog?organization=collabuilder",
    );

    const posts: BlogPost[] = res.data.data;

    return posts.map((post) => ({
      url: `/blog/${post.url_handle}`,
      changefreq: "weekly",
      priority: 0.8,
    }));
  } catch (err) {
    console.log("❌ Blog fetch failed");
    return [];
  }
}

// ───────────────── GENERATE SITEMAP ─────────────────

async function generateSitemap(): Promise<void> {
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  const staticRoutes: SitemapRoute[] = [
    { url: "/", changefreq: "weekly", priority: 1.0 },
    { url: "/about", changefreq: "weekly", priority: 0.7 },
    { url: "/contact", changefreq: "weekly", priority: 0.7 },
    { url: "/apply", changefreq: "weekly", priority: 0.7 },
    { url: "/blog", changefreq: "weekly", priority: 0.7 },
    { url: "/explore", changefreq: "weekly", priority: 0.7 },
    { url: "/resources", changefreq: "weekly", priority: 0.7 },
    { url: "/success", changefreq: "weekly", priority: 0.7 },
  ];

  // Dynamic blogs
  const blogRoutes = await getBlogRoutes();

  // Dynamic resources
  const resourceRoutes: SitemapRoute[] = RESOURCES.map((resource) => ({
    url: `/resources/${resource.slug}`,
    changefreq: "monthly",
    priority: 0.75,
  }));

  // Merge all routes
  const allRoutes: SitemapRoute[] = [
    ...staticRoutes,
    ...blogRoutes,
    ...resourceRoutes,
  ];

  allRoutes.forEach((route) => {
    sitemap.write({
      url: route.url,
      changefreq: route.changefreq,
      priority: route.priority,
    });
  });

  sitemap.end();

  const data = await streamToPromise(sitemap);

  fs.writeFileSync("./dist/sitemap.xml", data.toString(), "utf-8");

  console.log("✅ Sitemap generated!");
  console.log(`📄 Total URLs: ${allRoutes.length}`);
}

generateSitemap().catch((err) => {
  console.error("❌ Sitemap generation failed:", err);
});
