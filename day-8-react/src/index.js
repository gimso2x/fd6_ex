import ReactDOM from "react-dom"
import React from "react"
import App from "./App";

const h1 = React.createElement(
  "h1",
  {
    style: {color: "blue"}
  },
  "Hello"
)
const span = React.createElement(
  "span",
  {style: {color: "red"}},
  h1, `World!`
)
ReactDOM.render(<App />,
  document.querySelector("#root")
)