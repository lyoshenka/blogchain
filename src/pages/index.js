import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"

const PostTitle = styled.h2`
  text-decoration: underline;
`

const IndexPage = ({ data }) => {
  return (
      <div>
        <h1 style={{marginBottom: "4rem"}}>{data.site.siteMetadata.title}</h1>
        <section>
          <p>
            This blog is built using <Link to="https://lbry.com">LBRY</Link> and {' '}
            <Link to="https://www.gatsbyjs.com/">Gatsby</Link>.
            All posts are markdown files from {' '}
            <Link to="https://odysee.com/@grin">my channel</Link>. Here's the {' '}
            <Link to="https://github.com/lyoshenka/blogchain">source</Link>.
          </p>
        </section>

        {data.allMarkdownRemark.edges
          .filter(({ node }) => {
            const rawDate = node.frontmatter.rawDate
            const date = new Date(rawDate)
            return date < new Date()
          })
          .map(({ node }) => (
            <section key={node.id}>
              <Link to={node.fields.slug}>
                <PostTitle>{node.frontmatter.title}</PostTitle>
              </Link>
              <div>
                {node.frontmatter.date} - {node.fields.readingTime.text}
              </div>
              <p>{node.excerpt}</p>
            </section>
          ))}
      </div>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            rawDate: date
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
