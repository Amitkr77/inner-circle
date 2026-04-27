import fs from "fs";
// import axios from "axios";
import { SitemapStream, streamToPromise } from "sitemap";

const BASE_URL = "https://collabuilder.com";

// async function getBlogRoutes() {
//   try {
//     const res = await axios.get("https://api.yoursite.com/blogs");
//     return res.data.map(post => `/blog/${post.slug}`);
//   } catch (err) {
//     console.log("Blog fetch failed, skipping...");
//     return [];
//   }
// }

// async function getExperienceRoutes() {
//   try {
//     const res = await axios.get("https://api.yoursite.com/experiences");
//     return res.data.map(exp => `/experiences/${exp.id}`);
//   } catch (err) {
//     console.log("Experience fetch failed, skipping...");
//     return [];
//   }
// }

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  const staticRoutes = [
    "/",
    "/about",
    "/contact",
    "/apply",
    "/blog",
    "/explore",
    "/resources",
    "/success"
  ];

  // const blogRoutes = await getBlogRoutes();
  // const experienceRoutes = await getExperienceRoutes();

  const allRoutes = [
    ...staticRoutes,
    // ...blogRoutes,
    // ...experienceRoutes
  ];

  allRoutes.forEach(route => {
    sitemap.write({
      url: route,
      changefreq: "weekly",
      priority: route === "/" ? 1.0 : 0.7
    });
  });

  sitemap.end();

  const data = await streamToPromise(sitemap);

  fs.writeFileSync("./dist/sitemap.xml", data.toString());
  console.log("✅ Sitemap generated!");
}

generateSitemap();