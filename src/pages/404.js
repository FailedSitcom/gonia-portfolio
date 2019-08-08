import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const NotFoundPage = props => (
  <Layout path={props.path}>
    <SEO title="Home" />
    <div className="flex flex-col content-center justify-center z-10">
      <h1 className="text-2xl sm:text-4xl text-center">
        <span className="fade-in">This page doesn't seem to exist</span> <br />
        <span className="fade-in">Here's some of my </span>{" "}
        <Link to="/work/" className="blue-ul">
          Work
        </Link>{" "}
      </h1>
    </div>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default NotFoundPage
