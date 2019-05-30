module.exports = {
  dest: "dist",
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      }
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }
    ],
    ["meta", { name: "apple-mobile-web-app-title", content: "Rodopis" }],
    ["meta", { name: "application-name", content: "Rodopis" }],
    ["meta", { name: "msapplication-TileColor", content: "#ffffff" }],
    ["meta", { name: "theme-color", content: "#ffffff" }]
  ],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "cs", // this will be set as the lang attribute on <html>
      title: "Rodopis",
      description: "Životní osudy našich předků"
    }
  },
  themeConfig: {
    logo: "/deciduous-tree_1f333.png",
    nav: [{ text: "Rejstřík osob", link: "/osoby/" }],
    lastUpdated: "Naposledy upraveno",
    repo: "tomasmazac/rodopis",
    repoLabel: "Repozitář"
  },
  markdown: {
    anchor: { permalink: false, permalinkBefore: true, permalinkSymbol: "!" }
  }
};
