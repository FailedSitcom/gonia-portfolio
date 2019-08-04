import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout path={props.path}>
    <SEO title="Home" />
    <div className="flex flex-col content-center justify-center z-10">
      <h1 className="text-2xl sm:text-4xl text-center">
        <span className="fade-in">Yes, hello, this is</span>{" "}
        <Link to="/about/" className="blue-ul">
          Gonia
        </Link>
        <br />
        <span className="fade-in">I’m a</span>{" "}
        <Link to="/work/" className="blue-ul">
          Product Designer
        </Link>{" "}
        <br />
        <span className="fade-in">focusing on the</span>{" "}
        <Link to="/work/" className="blue-ul">
          UX/UI
        </Link>{" "}
        <br />
        <span className="fade-in">in the digital realm.</span>
      </h1>
    </div>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
