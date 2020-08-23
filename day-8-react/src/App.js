import React from "react";
import WelcomeText from "./components/WelcomeText";

function format(name) {
  return `${name} hihihi`
}
function App() {
  const name = "suho"
  const style = {
    color: "red"
  }
  return (
    <>
      <h1>{"Hello " + "11111"}
        <span>{"World!"}</span>
        <div>{1 + 2}</div>
        <div>{3123123}</div>
      </h1>
      <WelcomeText name={name} />
      <WelcomeText name={"길동"} />
      <WelcomeText name={"철수"} />
      <WelcomeText name={"영희"} />

      <input type="text" />
      <input type="password" />

      <h2 style={style}>{name}</h2>
      <h2 className={"a"}>{format(name)}</h2>
      <button onClick={() => alert(name)}>
        버튼
      </button>
      <div id={"aaa"}>
        1111
      </div>
    </>
  )
}
export default App;