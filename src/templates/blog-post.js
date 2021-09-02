import React from "react"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"


const HeaderDate = styled.h3`
  margin-top: 10px;
  color: #606060;
`

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
const MarkdownContent = styled.div`
  pre > code {
    width: inherit;
  }
`

export default ({ data }) => {
  const post = data.markdownRemark
  return (
      <div>
        <Link to="/" style={{fontSize: "1.6rem"}}>← Back home</Link>
        <h1>{post.frontmatter.title}</h1>
        <HeaderDate>
          {post.frontmatter.date} - {post.fields.readingTime.text}
        </HeaderDate>
        <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
