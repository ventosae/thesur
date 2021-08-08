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
        access_token: `EAADZCW7aXNdUBAKvZBHg3WFuuefRiyl713fijHka5RZAVwqTJnTyMC70V0nZCCcgVk7qFZCr2eCkbFZCbPBI2fOM6idgZAfBNsfisHRqR6dE8DbOBZCdAnnoeXi3SXKWTkLE7lQn5N80Q2MBrz88zZAMbXne16h9D5bEN39a6j6EKFvTJFJzi9lY3I83ZBLJ1jaGf3YTtoXIhs7AZDZD`,
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
