import React from "react";

export default function WelcomeText(props) {
  console.log(props);
  return <p>{props.name}님 안녕하세요<span>1111</span></p>
}

// export default class WelcomeText extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <p>{this.props.name}님 안녕하세요<span>1111</span></p>
//     )
//   }
// }