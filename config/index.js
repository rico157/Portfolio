module.exports = {
  //-- SITE SETTINGS -----
  author: "@rico157",
  siteTitle: "Porfolio - Rico",
  siteShortTitle: "r. ", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "A modern one-page portfolio with a clean yet expressive design.",
  siteUrl: "https://rico157.github.io/",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Portfolio - Riccardo Cogoni", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/riccardo-cogoni//",
    },
    {
      name: "Github",
      url: "https://github.com/rico157",
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "Projects",
        url: "/#projects",
      },
      {
        name: "Repositories",
        url: "/#repos",
      },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },
  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
  ],
}
