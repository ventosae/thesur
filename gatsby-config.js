const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: 'Anton Surov Blog',
    description: 'Anton Surov Blog',
    author: 'anton-surov',
    url: `https://anton-surov.com`,
    image: `/images/share.png`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://anton-surov.com`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layout/Layout.jsx`),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/content/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'textPages',
        path: `${__dirname}/src/content/textPages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/content/data/`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        access_token: `EAADZCW7aXNdUBANW8vdaYDoXZCcHQwtZAnerh2zdiQvxK8Ot73DvseCdMOzyl6J6BgBx2IO25ZA5c2MkP5bBx2g3BZAXdZBgkHbnSalTvoA6j14XwZCipU9o61W8xgs9lZAOwKItWqJWnjxZChzcw9TYZAGrl5qY4CqZBYypGZBbC9C9lorNfcB9WcgaJde5br8FHfiiQVWCD6PIygZDZD`,
        instagram_id: `17841401832822921`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 907,
              quality: 100,
              withWebp: true,
              ignoreFileExtensions: [],
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-external-links',
        ],
      },
    },
  ],
};
