import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
export default function Home({ data }) {
  console.log("DATA")
  console.log(data)
  const image = getImage(data.file.childrenImageSharp[0])
  console.log({ image })
  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <GatsbyImage image={image} alt="Dev Photo" />

        <p>
          {title} - {description}
        </p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
    file(relativePath: { eq: "banner.png" }) {
      id
      childrenImageSharp {
        gatsbyImageData
      }
    }
  }
`
