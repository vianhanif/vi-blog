import React from "react"
import { graphql } from "gatsby"
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import Layout from "../../Layouts/Default"
import SEO from "../../components/SEO"
import "./style.scss"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const config = this.props.data.site.siteMetadata
    let disqusConfig = {
      url: `${config.siteUrl+this.props.location.pathname}`,
      identifier: post.id,
      title: post.frontmatter.title,
    }

    return (
      <Layout location={this.props.location} title={post.frontmatter.title}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
        <div className="card card-big" style={{backgroundColor: "black"}}>
          <div className="card-image" style={{backgroundImage: `url(${post.frontmatter.image})`}}></div>
          <div className="card-body">
            <h5 className="card-title">{post.frontmatter.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted"><CommentCount config={disqusConfig} placeholder={'0 Comments'} /> -  {post.frontmatter.date}</h6>
            <p className="card-text" dangerouslySetInnerHTML={{
                __html: post.html
              }}
            />
            <Disqus config={disqusConfig} />
          </div>
        </div>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image
      }
    }
  }
`
