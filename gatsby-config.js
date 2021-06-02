module.exports = {
  siteMetadata: {
    title: `Stray Vyrje`,
    description: `Advokatfirmaet Stray Vyrje bistår næringsdrivende, organisasjoner og private innenfor et bredt spekter av områder`,
    author: `@strayvyrje`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stray Vyrje`,
        short_name: `svco`,
        start_url: `/`,
        background_color: `#282E3F`,
        theme_color: `#282E3F`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`gudea`, `roboto\:300,400,500`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `i89160zwngho`,
        accessToken: `uSeoOKG_oPLRGiclTSV58bnjMzhydzr3utWxaENkOKQ`,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `nb`],
        // language file path
        defaultLanguage: `nb`,
        // option to redirect to `/en` when connecting `/`
        redirect: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "G-W68P02FRXW",
        defaultDataLayer: { platform: "gatsby" },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
