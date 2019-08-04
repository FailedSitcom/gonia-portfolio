import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = props => {
  const [inputValue, setInputValue] = useState(false)
  const { children } = props

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        id="background"
        className={`flex flex-col justify-between min-h-screen`}
        onClick={() => setInputValue(false)}
      >
        <Header siteTitle={data.site.siteMetadata.title} />

        <div className="flex flex-1 p-6 justify-center mb-16">
          <main className="flex flex-1 max-w-4xl justify-center">
            {children}
          </main>
        </div>
        <div className="absolute min-h-screen " id="pageTransition" />
      </div>

      <Footer inputValue={inputValue} setInputValue={setInputValue} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
