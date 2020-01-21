import React from "react"
import { graphql } from "gatsby"

import Layout from "../Layouts/Default"
import List from "../Layouts/List"
import Post from "../components/Post"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    let nodes = []
    posts.forEach(({ node }, i) => {
      nodes.push(<Post key={i} id={node.id} node={node}/>)
    })

    return (
      <Layout title={siteTitle}>
        <List nodes={nodes}/>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            image
          }
        }
      }
    }
  }
`
