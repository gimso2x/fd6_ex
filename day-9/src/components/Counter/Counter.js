import React, {useState} from "react";
import "./Counter.css"

// export default class Counter extends React.Component {
//   constructor(props) {
//     console.log("constructor!")
//     super(props);
//     this.state = {
//       count: 0
//     }
//     this.minus = this.minus.bind(this)
//     this.plus = this.plus.bind(this)
//   }
//   minus() {
//     this.setState({
//       count: this.state.count - 1
//     })
//   }
//   plus() {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }
//   render() {
//     console.log("render!!")
//     const {count} = this.state;
//     return (
//       <>
//         <button onClick={this.minus}>-</button>
//         <span className={`count ${count < 0 ? "negative" : count > 0 ? "positive" : ""}`}>
//           {count}
//         </span>
//         <button onClick={this.plus}>+</button>
//       </>
//     )
//   }
// }

export default function Counter() {
  //const [state, setState] = useState({count: 0});
  const [count, setCount] = useState(0);
  console.log("Counter: count: ", count);
  return (
    <>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span className={`count ${count < 0 ? "negative" : count > 0 ? "positive" : ""}`}>
        {count}
      </span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}







