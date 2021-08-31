import { graphql } from 'gatsby';
import firebase from 'firebase';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Image from 'gatsby-image';
import React, { useEffect, useState } from 'react';
import Claps from '../components/Claps';
import CustomMDXProvider from '../components/CustomMDXProvider';
import Header from '../components/Header';
import Link from '../components/Link';
import SEO from '../components/SEO';
import isSSR from '../utils/isSSR';
import PropTypes from '../utils/PropTypes';

const BlogPostPage = ({ data, pageContext, location }) => {
  const { post } = data;
  const { next, previous, firebaseSlug, slug } = pageContext;
  const [ claps, setClaps ] = useState(null);

  useEffect(() => {
    if (!isSSR) {
      firebase.firestore()
        .collection('claps')
        .doc(firebaseSlug)
        .get()
        .then(res => {
          if (!res.data()) {
            console.log('no claps');
          } else {
            setClaps(res.data().count);
          }
        });
    }
  }, [firebase, firebaseSlug]);

  const makeClap = () => {
    if (!isSSR) {
      setClaps(prevState => prevState + 1);

      firebase.firestore()
        .collection('claps')
        .doc(firebaseSlug)
        .set({ count: claps + 1 })
        .catch(err => console.log(err));
    }
  };

  return (
    <>
      <SEO
        title={post.meta.title}
        description={post.meta.description}
        ogtitle={post.meta.ogtitle}  
        metaImage={post.meta.metaImage}  
      />
      <Header padding="small" location={location}>
        <h1 className="typo-h1">{post.title}</h1>
        <p className="text-sm font-bold mt-6 md:mt-8">
          {post.date}
        </p>
        <ul className="flex items-center text-sm font-bold mt-6 md:mt-8">
          {post.tags.map(tag => (
            <li className="mr-3">{`#${tag}`}</li>
          ))}
        </ul>
        <div className="flex mt-6 md:mt-8 items-center">
          <Image fixed={post.author.image.childImageSharp.fixed} className="rounded-full mr-6" />
          <span className="text-xl font-bold">{post.author.name}</span>
        </div>
        <Claps className="mt-6 md:mt-8" count={claps} onClap={makeClap} />
      </Header>
      <div className="py-8 md:py-16 px-4">
        <div className="container-sm mx-auto">
          <CustomMDXProvider>
            <MDXRenderer>{post.content.body}</MDXRenderer>
          </CustomMDXProvider>
        </div>
      </div>
      {previous || next && (
        <div className="pb-8 md:pb-16 px-4">
          <div className="container-sm mx-auto flex justify-between">
            <div>
              {previous && (
                <Link to={previous.slug}>
                  <div className="text-sm font-bold">
                    Previous Article
                  </div>
                  <div className="text-md">
                    {previous.title}
                  </div>
                </Link>
              )}
            </div>
            <div>
              {next && (
                <Link to={next.slug}>
                  <div className="text-sm font-bold">
                    Next Article
                  </div>
                  <div className="text-md">
                    {next.title}
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

BlogPostPage.propTypes = {
  data: PropTypes.shape(PropTypes.object.isRequired),
};

BlogPostPage.defaultProps = {
  data: null,
};

export default BlogPostPage;

export const pageQuery = graphql`
  query($slug: String!) {
    post: blogPost(slug: { eq: $slug }) {
      title
      date(formatString: "MMM DD, YYYY")
      slug
      author {
        name
        image {
          childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
      content {
        body
      }
      tags
      meta {
        title
        description
      }
    }
  }
`;
