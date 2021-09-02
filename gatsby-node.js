const path = require(`path`)

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions
  if (node.internal.type === `MarkdownRemark`)
  {
    const parent = getNode(node.parent)
    if (parent.internal.type === "LbryPost")
    {
      createNodeField({name: `slug`, node: node, value: `/` + parent.name})
      return
    }
  }
}

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors)
    {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges
      .forEach(({node}) => {
        createPage({
          component: blogPostTemplate,
          slug: node.fields.slug,
          path: node.fields.slug,
          context: {
            slug: node.fields.slug,
          },
        })
      })
  })
}
