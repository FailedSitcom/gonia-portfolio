import React from "react"

import gif from "../images/erento.gif"

const ErentoGif = props => (
  <figure>
    <div className="flex justify-center">
      <div className="flex flex-1 justify-center my-5">
        <img className="sm:max-w-lg" src={gif} alt={props.alt} />
      </div>
    </div>

    {props.alt ? (
      <figcaption className="text-center text-sm">{props.alt}</figcaption>
    ) : null}
  </figure>
)

export default ErentoGif
