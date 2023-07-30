/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Did I Leave The Stove On`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-remark-prismjs",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `src/images/logo small.svg`,
        icons: [
          {
            src: `/favicons/DILTSO LOGO MED.svg`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/DILTSO LOGO LARGE(1).svg`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
};
