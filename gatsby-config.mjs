/**
 * @type {import('gatsby').GatsbyConfig}
 */
import { createRequire } from "module";
import { dirname } from "path";
import { fileURLToPath } from "url";
import remarkGfm from "remark-gfm";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
  siteMetadata: {
    title: `Did I Leave The Stove On`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    },
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

export default config;
