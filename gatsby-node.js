const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (!node.frontmatter.path) return

      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/${node.frontmatter.templateKey}.js`),
        context: {},
      })

      createPage({
        path: '/spinny-thing',
        component: path.resolve(`src/templates/spinny-thing.js`)
      })
    })
  })
}
