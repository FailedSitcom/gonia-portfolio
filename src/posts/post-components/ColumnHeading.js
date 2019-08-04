import React from "react"

const ColumnHeading = props => (
  <div className="sm:w-1/2 pr-10 mt-10 mb-2 sm:m-0">
    <h2 className="text-xl">{props.children}</h2>
  </div>
)

export default ColumnHeading
