import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby"
import { CommentCount } from 'gatsby-plugin-disqus'
import "./style.scss"

const Post = ({id, node }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  )
  const config = site.siteMetadata
  const title = node.frontmatter.title || node.fields.slug
  const disqusConfig = {
    url: `${config.siteUrl+node.fields.slug}`,
    identifier: id,
    title: title
  }
  return (
    <article>
      <div className="card">
        <div className="card-image" style={{backgroundImage: `url(${node.frontmatter.image})`}}></div>
        <div className="card-body">
          <Link to={node.fields.slug}><h5 className="card-title">{title}</h5></Link>
          <h6 className="card-subtitle mb-2 text-muted"><CommentCount config={disqusConfig} placeholder={'0 Comments'} /> -  {node.frontmatter.date}</h6>
          <p className="card-text" dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
        </div>
      </div>
    </article>
  );
}

export default Post;


// export default Post;

// const Post = ({node}, data) => {
//   const config = this.props.data.site.siteMetadata
//   const title = node.frontmatter.title || node.fields.slug
//   const disqusConfig = {
//     url: `${config.siteUrl+node.fields.slug}`,
//     identifier: this.props.id,
//     title: title
//   }
//   return (
    
//       // {/* <article key={node.fields.slug}>
//       //   <header>
//       //     <h3>
//       //       <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
//       //         {title}
//       //       </Link>
//       //     </h3>
//       //     <small>{node.frontmatter.date}</small>
//       //   </header>
//       //   <section>
          // <p
          //   dangerouslySetInnerHTML={{
          //     __html: node.frontmatter.description || node.excerpt,
          //   }}
          // />
//       //   </section>
//       // </article> */}
//   );
// }