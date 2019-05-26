module.exports = {
  dest: "dist",
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
