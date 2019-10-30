const path = require('path');
// const _ = require('lodash');

// exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions;
//   let slug;
//   if (node.internal.type === 'MarkdownRemark') {
//     if (
//       Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
//       Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
//     ) {
//       slug = `/${_.kebabCase(node.frontmatter.slug)}`;
//     }
//     if (
//       Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
//       Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
//     ) {
//       slug = `/${_.kebabCase(node.frontmatter.title)}`;
//     }
//     createNodeField({ node, name: 'slug', value: slug });
//   }
// };

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/post.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    });
  });
};
