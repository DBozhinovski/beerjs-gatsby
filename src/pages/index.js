import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { LandingLayout, Article, Wrapper, Button, SectionTitle } from '../components';
import { media } from '../utils/media';

const IndexPage = (/*{ data }*/) => {
  // console.log(data);

  return <LandingLayout>ASDF</LandingLayout>;
};

export default IndexPage;

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array.isRequired,
//     }),
//   }).isRequired,
// };

// export const IndexQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             date(formatString: "DD.MM.YYYY")
//             category
//           }
//           excerpt(pruneLength: 200)
//           timeToRead
//         }
//       }
//     }
//   }
// `;
