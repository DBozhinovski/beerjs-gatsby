import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout, Article, Wrapper, Button, SectionTitle } from '../components';
import { media } from '../utils/media';

const BigLink = styled.a`
  font-size: 2rem;
  color: #4392f1;
`;

const NotFound = () => {
  return (
    <Layout>
      <div>
        {/* <BigLink href={frontmatter.path}>[ {frontmatter.title} ]</BigLink> */}
        404
      </div>
    </Layout>
  );
};

export default NotFound;
