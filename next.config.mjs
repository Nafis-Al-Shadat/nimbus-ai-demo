// Static export so the site can be hosted for free on GitHub Pages.
// basePath must match the repository name because Pages serves it from /nimbus-ai-demo/.
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/nimbus-ai-demo" : "",
  images: { unoptimized: true },
};

export default nextConfig;
