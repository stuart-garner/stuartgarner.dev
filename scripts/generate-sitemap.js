const fs = require("fs");
const path = require("path");

function addPage(page) {
  const relativePath = page
    .replace(path.join(__dirname, "pages"), "")
    .replace(".js", "")
    .replace(".mdx", "");
  const route = relativePath === "/index" ? "" : relativePath;

  return `  <url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <changefreq>hourly</changefreq>
  </url>`;
}

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else if (
      file.endsWith(".ts") ||
      file.endsWith(".tsx")
    ) {
      if (!file.startsWith("_") && !fullPath.includes("pages/api")) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

function generateSitemap() {
  const pagesDir = path.join(__dirname, "pages");
  const pages = getAllFiles(pagesDir);
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join("\n")}
</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();