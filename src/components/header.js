import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../images/logo.svg"

const Header = props => (
  <header className="z-10">
    <div
      className="flex justify-between"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link to="/" activeClassName="active">
        <img src={logo} alt="Gonia Cholewa Logo" style={{ width: "43px" }} />
      </Link>

      <div>
        <Link
          to="/about/"
          className="uppercase"
          activeClassName="active font-bold tracking-tight"
        >
          About
        </Link>
        <Link
          to="/work/"
          className="uppercase ml-6"
          activeClassName="active  font-bold tracking-tight"
        >
          Work
        </Link>
      </div>
      {/* <Link to="/about">Go back to the homepage</Link> */}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
