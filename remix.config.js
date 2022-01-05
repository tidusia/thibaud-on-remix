/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "api/_build",
  ignoredRouteFiles: [".*"],
  mdx: async () => {
    const [rehypePrism] = await Promise.all([
      import("@mapbox/rehype-prism").then((mod) => mod.default),
    ]);

    return {
      remarkPlugins: [],
      rehypePlugins: [rehypePrism],
    };
  },
};
