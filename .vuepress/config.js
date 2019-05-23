module.exports = {
  dest: "dist",
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "cs-CZ", // this will be set as the lang attribute on <html>
      title: "🌳 Rodopis",
      description: "",
      serviceWorker: {
        updatePopup: {
          message: "Je dostupný nový obsah.",
          buttonText: "Aktualizovat"
        }
      }
    }
  },
  themeConfig: {
    nav: [],
    lastUpdated: "Naposledy upraveno",
    // Assumes GitHub. Can also be a full GitLab url.
    repo: "tomasmazac/rodopis",
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: "Repozitář",

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: "vuejs/vuepress",
    // if your docs are not at the root of the repo:
    docsDir: "persons",
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: "master",
    // defaults to false, set to true to enable
    editLinks: false,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Help us improve this page!"
  },
  markdown: {
    anchor: { permalink: false, permalinkBefore: true, permalinkSymbol: "!" }
  }
};
