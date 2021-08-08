import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import CustomMDXProvider from '../components/CustomMDXProvider';
import Header from '../components/Header';
import SEO from '../components/SEO';

const TextPage = ({ data, location }) => {
  const { post } = data;

  return (
    <>
      <SEO
        title={post.meta.title}
        description={post.meta.description}
      />
      <Header location="location" padding="medium">
        <div className="text-center">
          <h1 className="typo-h1">{post.title}</h1>
        </div>
      </Header>
      <div className="py-8 md:py-16 px-4">
        <div className="container-md mx-auto">
          <CustomMDXProvider>
            <MDXRenderer>{post.content.body}</MDXRenderer>
          </CustomMDXProvider>
        </div>
      </div>
    </>
  );
};

export default TextPage;

export const pageQuery = graphql`
  query($slug: String!) {
    post: textPage(slug: { eq: $slug }) {
      meta {
        title
        description
      }
      title
      content {
        body
      }
    }
  }
`;
