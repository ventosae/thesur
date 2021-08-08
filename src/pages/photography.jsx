import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import * as React from 'react';
import Header from '../components/Header';
import Link from '../components/Link';
import SEO from '../components/SEO';

const PhotographyPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      posts: allInstaNode(
          limit: 10,
          sort: {fields: timestamp, order: DESC}
      ) {
        nodes {
          localFile {
            publicURL
          }
          likes
          comments
          permalink
        }
      }
    }
  `);

  const posts = data.posts.nodes;

  return (
    <>
      <SEO
        title="Photography by Anton Surov"
      />
      <Header location={location} padding="medium">
        <div className="text-center">
          <h1 className="typo-h1">
            Anton Surov Photography
          </h1>
        </div>
      </Header>
      <div className="py-8 md:py-16 px-4">
        <div className="container-md mx-auto">
          <div className="pb-8 md:pb-16">
            <p className="mb-8">
              See more photos from me on my instagram page:
            </p>
            <Link to="https://www.instagram.com/ventosae/" className="text-yellow-400 text-xl">
              @ventosae
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map(node => (
              <div className="mb-10">
                <Link to={node.permalink} className="border flex items-center">
                  <img src={node.localFile.publicURL} />
                </Link>
                <span className="text-xs text-gray-400 mr-3">
                  {`Likes: ${node.likes}`}
                </span>
                <span className="text-xs text-gray-400">
                  {`Comments: ${node.comments}`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotographyPage;
