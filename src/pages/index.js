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
        {data.allMarkdownRemark.edges
          .filter(({ node }) => {
            const rawDate = node.frontmatter.rawDate
            const date = new Date(rawDate)
            return date < new Date()
          })
          .map(({ node }) => (
            <div key={node.id} style={{marginBottom: "3rem"}}>
              <Link to={node.fields.slug}>
                <PostTitle>{node.frontmatter.title}</PostTitle>
              </Link>
              <div>
                {node.frontmatter.date} - {node.fields.readingTime.text}
              </div>
              <p>{node.excerpt}</p>
            </div>
          ))}
        <p>
          Use the <Link to="https://github.com/lyoshenka/blogchain">
            source
          </Link>, Luke!
        </p>
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
