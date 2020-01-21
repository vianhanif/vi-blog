import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby"
import "./style.scss"

const Navbar = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <nav className="navbar">
      <div className="container-lg">
        <Link className="navbar-brand" to="/">
          {site.siteMetadata.title}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
