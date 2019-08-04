import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gonia.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const AboutPage = props => (
  <Layout path={props.path}>
    <SEO title="About" />
    <div className="sm:flex z-10">
      <div className="px-4 sm:w-2/5">
        <div className="flex items-start overflow-hidden">
          <div className="flex-1">
            <Image />
          </div>
          <h2 className="absolute text-2xl self-end sm:text-4xl blue-h2-ul">
            Hi there!
          </h2>
        </div>
        <h2 className="text-2xl sm:text-4xl">
          <span className="blue-h2-ul">I'm Gonia.</span>
        </h2>
      </div>
      <div className="mt-8 sm:mt-0 px-4 sm:w-3/5">
        <p>
          I’m a Product Designer focusing on the UX/UI in the digital realm.
        </p>
        <h2 className="mt-4">
          <span className="blue-h2-ul">UX</span>
        </h2>
        <p>
          I research user needs based on quantitative and qualitative feedback,
          identify the main pain points, design possible solutions from
          low-fidelity wireframes to interactive prototypes, test them with
          users and iterate based on the feedback and evolving requirements.
        </p>

        <h2 className="mt-4">
          <span className="blue-h2-ul">UI</span>
        </h2>
        <p>
          I focus on usability, maintaining consistency of style, aligning to
          the guidelines and following established patterns to create
          pixel-perfect designs. My goals are interfaces which are simple,
          uncluttered and work across different devices and screen sizes.
        </p>

        <h2 className="mt-4">
          <span className="blue-h2-ul">Product</span>
        </h2>
        <p>
          User-centered approach is always the starting point, but I believe
          that deep understanding of the business and key product metrics are
          crucial components for a product to be successful and sustainable.
        </p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
