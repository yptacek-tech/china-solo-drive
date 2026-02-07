import { writeFileSync } from "fs";
import { resolve } from "path";

const DOMAIN = "https://cinasolo.cz";

const routes = [
  "/",
  "/kontakt",
  "/faq",
  "/checkout",
  "/blog",
];

function generateSitemap(): string {
  const today = new Date().toISOString().split("T")[0];

  const urls = routes
    .map((route) => {
      let priority = "0.8";
      if (route === "/") priority = "1.0";
      else if (route.startsWith("/blog/")) priority = "0.6";
      return `  <url>
    <loc>${DOMAIN}${route}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

const sitemap = generateSitemap();
const outputPath = resolve(process.cwd(), "dist/sitemap.xml");

writeFileSync(outputPath, sitemap, "utf-8");
console.log(`✓ Sitemap generated at ${outputPath}`);
