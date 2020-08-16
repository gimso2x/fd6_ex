const http = require("http")
const readFile = require("./readFile")

http
  .createServer((req, res) => {
    if (req.url === "/") {
      return readFile("index", (data) => res.end(data))
    } else if (req.url === "/users") {
      return readFile("users", (data) => res.end(data))
    } else {
      return res.end("404")
    }
  })
  .listen(8080)
