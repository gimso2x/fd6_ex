import ReactDOM from "react-dom"
import React from "react"

const h1 = React.createElement(
  "h1",
  {
    style: {color: "blue"}
  },
  "Hello World!!!!"
)

ReactDOM.render(h1,
  document.querySelector("#root")
)