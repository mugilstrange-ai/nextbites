// GitHub Pages serves this site from https://<user>.github.io/nextbites/,
// so the deploy build adds the /nextbites prefix. `npm run dev` stays at /.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // `npm run build` writes a static site to out/
  trailingSlash: true, // /recipe/masala-dosa/ is saved as recipe/masala-dosa/index.html
  basePath: isGitHubPages ? "/nextbites" : "",
  images: { unoptimized: true }, // no image server on a static host
};

export default nextConfig;
