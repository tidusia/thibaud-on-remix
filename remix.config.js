/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  browserBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build",
  devServerPort: 8002,
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
