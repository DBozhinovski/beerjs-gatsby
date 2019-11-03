import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import { Layout, Wrapper, Header, Subline, SEO, Logo } from '../components';
import { media } from '../utils/media';
import config from '../../config/SiteConfig';
import '../utils/prismjs-theme.css';

const Content = styled.article`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const PostContent = styled.div`
  margin-top: 4rem;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #4392f1;
    font-size: 1.3rem;
  }

  a:hover {
    color: ${props => props.theme.colors.primary}}
  }

  a + a::before {
    content: '|';
    text-overflow: '' '';
    color: #000;
  }

  a + a:hover::before {
    color: #000;
  }

  @media ${media.phone} {
    flex-direction: column;
    align-items: flex-end;

    a {
      font-size: 1rem;
    }

    a + a::before {
      content: '';
    }
  }
`;

const Post = ({ data: { markdownRemark: postNode } }) => {
  const post = postNode.frontmatter;

  return (
    <Layout>
      <Wrapper>
        <SEO postPath={post.path} postNode={postNode} postSEO />
        <Helmet title={`${post.title} | ${config.siteTitle}`} />
        <Header>
          <Link to="/">
            <Logo scale={0.6} />
          </Link>
          <Navigation>
            <a href="/info/about-beerjs">За BeerJS&nbsp;</a>
            <a href="/events">&nbsp;Претходни&nbsp;</a>
            <a href="/blog">&nbsp;Блог&nbsp;</a>
            <a href="/contact">&nbsp;Контакт</a>
          </Navigation>
        </Header>
        <Content>
          <Title>{post.title}</Title>
          <Subline>
            {post.date} &mdash; {postNode.timeToRead} Min Read &mdash; In{' '}
            <Link to={`/categories/${kebabCase(post.category)}`}>{post.category}</Link>
          </Subline>
          <PostContent dangerouslySetInnerHTML={{ __html: postNode.html }} />
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }).isRequired,
};

export const postQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        path
        category
      }
      timeToRead
    }
  }
`;
