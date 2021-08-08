const path = require('path');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /firebase/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = [
    `
      type PeopleYaml implements Node {
        id: String!
        name: String!
        email: String
        linkedin: String
        twitter: String
        image: File @fileByRelativePath
      }
    `,
    `
      type MetaFields implements Node {
        title: String
        description: String
      }
    `,
    `
      type BlogPost implements Node {
        slug: String
        title: String
        date: Date @dateformat
        image: File @fileByRelativePath
        author: PeopleYaml @link
        tags: [String!]!
        content: Mdx
        meta: MetaFields
      }
    `,
    `
      type TextPage implements Node {
        slug: String
        title: String
        content: Mdx
        meta: MetaFields
      }
    `
  ];

  createTypes(typeDefs);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('src/templates/blog-post.jsx');
  const textPageTemplate = path.resolve('src/templates/text-page.jsx');

  const result = await graphql(`
    {
      blogPosts: allBlogPost(
        sort: { fields: [date] }
        limit: 1000
      ) {
        edges {
          node {
            slug
            firebaseSlug
          }
          next {
            title
            slug
          }
          previous {
            title
            slug
          }
        }
      }
      textPages: allTextPage {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Build failed while running GraphQL query.');
    return;
  }

  const blogPosts = result.data.blogPosts.edges;
  const textPages = result.data.textPages.nodes;

  blogPosts.forEach(({ node, next, previous }) => {
    createPage({
      path: node.slug,
      component: blogPostTemplate,
      context: {
        firebaseSlug: node.firebaseSlug,
        slug: node.slug,
        next: next,
        previous: previous,
      },
    });
  });

  textPages.forEach(node => {
    createPage({
      path: node.slug,
      component: textPageTemplate,
      context: {
        slug: node.slug,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode, createNodeId, createContentDigest }) => {
  const { createNodeField, createNode } = actions;

  if (node.internal.type === 'Mdx') {
    const parent = getNode(node.parent);

    if (parent.internal.type === 'File') {
      createNodeField({
        name: 'sourceName',
        node,
        value: parent.sourceInstanceName,
      });
    }

    if (parent.internal.type === 'File' && parent.sourceInstanceName === 'blog') {
      const blogPostContent = {
        firebaseSlug: node.frontmatter.slug,
        slug: `/${node.frontmatter.slug}`,
        title: node.frontmatter.title,
        date: node.frontmatter.date,
        image: node.frontmatter.image,
        author: node.frontmatter.author,
        tags: node.frontmatter.tags || [],
        meta: node.frontmatter.meta,
        content: node,
      };

      createNode({
        id: createNodeId(`blog-post-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          type: 'BlogPost',
          contentDigest: createContentDigest(blogPostContent),
        },
        ...blogPostContent,
      });
    }

    if (parent.internal.type === 'File' && parent.sourceInstanceName === 'textPages') {
      const textPageContent = {
        slug: node.frontmatter.slug,
        title: node.frontmatter.title,
        meta: node.frontmatter.meta,
        content: node,
      };

      createNode({
        id: createNodeId(`text-page-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          type: 'TextPage',
          contentDigest: createContentDigest(textPageContent),
        },
        ...textPageContent,
      });
    }
  }
};
