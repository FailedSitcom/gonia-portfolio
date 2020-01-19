import * as d3 from "d3"

export const onRouteUpdate = ({ location }) => {
  const currentLink = document.getElementsByClassName("active")[0]
  const transitionColor =
    location.pathname === "/about/"
      ? "#FAFAFA"
      : location.pathname === "/work/"
      ? "#EBEBEB"
      : location.pathname === "/"
      ? "#F5F5F5"
      : "#FFFFFF"

  if (currentLink) {
    const data = []
    const data2 = [{}]

    for (let index = 0; index < 40; index++) {
      data.push({})
    }

    d3.selectAll("#pageTransition > *").remove()

    d3.select("#pageTransition")
      .append("svg")
      .attr("id", "svgTransition")
      .attr("class", "h-screen w-screen")

    d3.select("#svgTransition")
      .selectAll("dot-2")
      .data(data2)
      .enter()
      .append("g")
      .classed("circle-transition", true)
      .append("circle")
      .classed("dot-2", true)
      .attr("cx", currentLink.offsetLeft + 20)
      .attr("cy", currentLink.offsetHeight)
      .attr("r", 10)
      .attr("opacity", 1)
      .style("fill", transitionColor)

    d3.select("#svgTransition")
      .selectAll("dot")
      .data(data)
      .enter()
      .append("g")
      .classed("circle-group", true)
      .append("circle")
      .classed("dot", true)
      .attr("cx", currentLink.offsetLeft + 20)
      .attr(
        "cy",
        location.pathname === "/"
          ? currentLink.offsetHeight
          : currentLink.offsetHeight + 20
      )
      .attr("r", 10)
      .style("fill", "#dcf9f3")

    const t = d3
      .transition()
      .duration(3000)
      .ease(d3.easePolyOut)

    const t2 = d3.transition().duration(500)

    d3.selectAll(".circle-group")
      .transition(t)
      .attr("transform", function(d) {
        return `translate(${Math.random(window.innerWidth) * 200 -
          100},${Math.random(window.innerWidth) * 200 - 100})`
      })

    d3.selectAll(".dot")
      .transition(t)
      .attr("r", 0)
      .transition(t)
      .style("stroke", "#dcf9f3")

    d3.selectAll(".dot-2")
      .transition(t2)
      .attr("r", 1500)
      .on("end", () => {
        document.getElementById(
          "gatsby-focus-wrapper"
        ).style.backgroundColor = transitionColor
      })
  } else {
    document.getElementById(
      "gatsby-focus-wrapper"
    ).style.backgroundColor = transitionColor
  }
}
