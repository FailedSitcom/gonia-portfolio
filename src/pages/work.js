import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const WorkPage = props => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const triggerTransition = index => {
    const featuredImageContainer = document.getElementById("featuredImage")
    if (featuredImageContainer) featuredImageContainer.style.opacity = 0

    setTimeout(() => {
      setSelectedIndex(index)
      featuredImageContainer.style.opacity = 1
    }, 250)
  }

  return (
    <Layout path={props.path}>
      <SEO title="Work" />
      <div className="flex-1 sm:flex z-10">
        <div
          className="hidden sm:block px-4 sm:w-2/5 transition-opacity"
          id="featuredImage"
        >
          {props.data.allMdx.edges.map((caseStudy, index) =>
            index === selectedIndex ? (
              <Link key={index} to={`${caseStudy.node.frontmatter.path}`}>
                <Img
                  className="flex-1 max-w-lg mt-10"
                  // alt={props.alt}
                  fluid={
                    caseStudy.node.frontmatter.featuredImage.childImageSharp
                      .fluid
                  }
                />
              </Link>
            ) : null
          )}
        </div>
        <div className="px-4 sm:w-3/5">
          <h1 className="uppercase">In-depth case studies</h1>

          {props.data.allMdx.edges.map((caseStudy, index) => (
            <div key={`caseStudy-${index}`}>
              <div className="block sm:hidden">
                <Link key={index} to={`${caseStudy.node.frontmatter.path}`}>
                  <Img
                    className="flex-1 max-w-lg mt-2 sm:mt-10"
                    // alt={props.alt}
                    fluid={
                      caseStudy.node.frontmatter.featuredImage.childImageSharp
                        .fluid
                    }
                  />
                </Link>
              </div>
              <div
                className="mb-8"
                onMouseEnter={() =>
                  index !== selectedIndex ? triggerTransition(index) : null
                }
              >
                <h2 className="text-2xl mt-4">
                  {caseStudy.node.frontmatter.title}
                </h2>
                <Link
                  to={`${caseStudy.node.frontmatter.path}`}
                  className="underline"
                >
                  View full article
                </Link>
              </div>
            </div>
          ))}

          <h2 className="text-right mt-10">
            More Projects available{" "}
            <a
              className="underline"
              href="https://www.behance.net/goniacholewa"
              target="_blank"
              rel="noopener noreferrer"
            >
              via Behance
            </a>
          </h2>
        </div>
      </div>
    </Layout>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMdx(sort: { order: ASC, fields: [frontmatter___order] }) {
          edges {
            node {
              frontmatter {
                title
                path
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 300) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return <WorkPage data={data} {...props} />
    }}
  />
)
