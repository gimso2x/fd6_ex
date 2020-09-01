import React from "react";
import data from "../data.js"
import RocketFreshIcon from "./components/RocketIcon/RocketFreshIcon";
import RocketWowIcon from "./components/RocketIcon/RocketWowIcon";
import './App.css';

console.log(data)
const products = data.products
let typeKinds = pickType();

function type({type}) {
  switch (type) {
    case "ROCKET_FRESH" : return <RocketFreshIcon />;
    case "ROCKET_WOW" : return <RocketWowIcon />;
    default: return ""
  }
}
function option(inventory) {
  let items = [];
  for(let i=1;i <= 10;i++) {
    items.push(i);
  }
  const options = items.map((e, i) => {
    return i > inventory - 1 ? <option key={i} disabled>{e}</option> : <option key={i}>{e}</option>
  })
  return options
}

function soldOut(inventory) {
  if(inventory === 0) {
    return <p className="soldOut">품절</p>
  }
  if(inventory < 6) {
    return <p className="soldOut">품절임박 {inventory}개 잔여</p>
  }
}

function pickType() {
  let typeArr = [];
  products.map(e => {
    typeArr.push(e.type);
  })

  return typeArr.filter((item, index) => typeArr.indexOf(item) === index);
} 

function makeTbody() {
  return (
      typeKinds.map(e => {
        return (
          <tbody key={e}>
            <tr>
              <td className="mainTr" colSpan={6}><b>{e === "ROKET_FRESH" ? "로켓프레시 상품" : e === "ROCKET_WOW" ? "로켓배송 상품(로켓와우포함)" : "판매자배송 상품"}</b></td>
            </tr>
            {makeDefaultTr(e)}
          </tbody>
      )
    })
  )
}

function makeDefaultTr(e) {
  return (
    products.map(product => {
      if(product.type === e) {
        return (
          <tr key={product.id}>
            <td>
              <input type={"checkbox"}/>
            </td>
            <td>
              <img src={product.img} alt={product.name} />
            </td>
            <td>
              {product.name}
              {soldOut(product.inventory)}
            </td>
            <td>
              {product.price}
            </td>
            <td>
              <select defaultValue={1} disabled={!product.inventory}>
                {option(product.inventory)}
              </select>
            </td>
            <td>
              {product.price * product.count}
            </td>
            <td>
              {type(product)}
            </td>
          </tr>
        )
      }
    })
  )
}

export default function App() {
  return (
    <div>
      <table>
        {makeTbody()}
      </table>
    </div>
  )
}