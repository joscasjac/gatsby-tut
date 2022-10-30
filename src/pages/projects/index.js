import { graphql, Link } from "gatsby"

import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
export default function Projects({ data }) {
  const projects = data.projects.nodes
  console.log({ data })
  const { contact } = data.contact.siteMetadata
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2> Portfolio</h2>
        <h3> My latest projects</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={`/projects${project.frontmatter.slug}`} key={project.id}>
              <div>
                <GatsbyImage
                  image={getImage(project.frontmatter.thumb)}
                  alt="Dev Photo"
                />

                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <p>Like what you see? email me {contact}</p>
    </Layout>
  )
}
export const quer = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
