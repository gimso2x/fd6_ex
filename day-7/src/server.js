const http = require("http")
const readFile = require("./readFile")

const users = [{
    name: "suho",
    age: 36
}, {
    name: "gildong",
    age: 20
}]
function userComponent(users) {
    const userLis = users.map((user) => {
        return `<li>${user.name} : ${user.age}</li>`
    }).join("")
    return `<ul>${userLis}</ul>`
}
http
  .createServer((req, res) => {
    if (req.url === "/") {
        return readFile("index", (data) => res.end(data))
    } else if(req.url === "/users") {
        return res.end(`<html><body>${userComponent(users)}</body></html>`)
    } else if (req.url === "/users") {
      return readFile("users", (data) => res.end(data))
    } else {
      return res.end("404")
    }
  })
  .listen(8080)
