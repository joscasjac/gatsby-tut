import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log("HIDATA")
  console.log(data)
  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portafolio Projects</Link>
      </div>
    </nav>
  )
}
