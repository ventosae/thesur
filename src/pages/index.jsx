import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import * as React from 'react';
import Header from '../components/Header';
import Link from '../components/Link';
import SEO from '../components/SEO';
import Thumb from '../components/Thumb';
import GithubIcon from '../images/icons/github.svg';
import InstagramIcon from '../images/icons/instagram.svg';
import LinkedinIcon from '../images/icons/linkedin.svg';
import TwitterIcon from '../images/icons/twitter.svg';
import HeroVisual from '../images/visuals/home-hero.svg';

const HomePage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      posts: allBlogPost(
          sort: { fields: [date], order: DESC }
          limit: 1000
      ) {
        nodes {
          title
          date(formatString: "DD.MM.YYYY")
          slug
          image {
            childImageSharp {
              fluid(quality: 100, sizes: "(min-width: 1440px) 441px, (min-width: 992px) calc((100vw - 100px) * 0.33), (min-width: 768px) calc(100vw - 84px), calc(100vw - 68px)") {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          author {
            name
            image {
              childImageSharp {
                fixed(width: 35) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
          content {
            excerpt
          }
          tags
        }
      }
    }
  `);

  const posts = data.posts.nodes;

  return (
    <>
      <SEO
        title="Notes about SEO, Data & Photography by Anton Surov"
        description="Hi there, I’m Anton Surov and they call me Sur. Welcome to this digital space – a compendium of my passions for SEO, data and analogue photography."
      />
      <Header location={location}>
        <div className="flex flex-wrap items-center text-center md:text-left">
          <div className="md:w-1/2 w-full">
            <h1 className="typo-h1 mb-4">
              Anton Surov
            </h1>
            <p className="typo-large">
              Digital mind with an analog heart.
              <br />
              Notes about SEO, Data & Photography.
            </p>
            <div className="flex mt-8 justify-center md:justify-start">
              <Link to="https://twitter.com/select_from_sur" className="mr-6">
                <img src={TwitterIcon} alt="Anton Surov Twitter" />
              </Link>
              <Link to="https://www.instagram.com/ventosae/" className="mr-6">
                <img src={InstagramIcon} alt="Anton Surov Instagram" />
              </Link>
              <Link to="https://www.linkedin.com/in/anton-surov/" className="mr-6">
                <img src={LinkedinIcon} alt="Anton Surov LinkedIn" />
              </Link>
              <Link to="https://github.com/ventosae">
                <img src={GithubIcon} alt="Anton Surov GitHub" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full mt-10 md:mt-0">
            <Thumb src={HeroVisual} />
          </div>
        </div>
      </Header>
      <div className="bg-gray-50 px-4">
        <div className="container-md mx-auto py-12 md:py-20">
          <p className="mb-4">
          Hi there! I’m Anton Surov, but they call me Sur. Welcome to this digital space – a compendium of my passion for SEO, data and analogue photography.</p>
          <p className="mb-5">I know a few things about SEO. I’ve been doing it for 9 years, in three countries and two languages, and I don’t plan to stop. I’ve found my love for data, and now it’s time to put everything together and see what will happen.</p>

          <p>Interested in collaborating? Send me a message.</p>
          
        </div>
      </div>
      <div className="py-12 md:py-20 px-4">
        <div className="container-md mx-auto">
          <h2 className="typo-h2">
            Recent Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {posts.map(node => (
              <Link to={node.slug}>
                <Image fluid={node.image.childImageSharp.fluid} />
                <h3 className="typo-h4 mt-4">
                  {node.title}
                </h3>
                <p className="text-sm mt-2 text-gray-600">
                  {node.content.excerpt}
                </p>
                <ul className="flex items-center mt-3 text-xs text-gray-400">
                  {node.tags.map(tag => (
                    <li className="mr-3">{`#${tag}`}</li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
