import React from "react"

const BlogTitle = props => (
  <div className="sm:text-center">
    <h1 className="text-xl sm:text-2xl">{props.children}</h1>
  </div>
)

export default BlogTitle
