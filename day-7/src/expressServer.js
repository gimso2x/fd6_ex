const express = require("express")
const path = require("path")
const app = express()
const DB = require("./DB")

app.set("views", path.resolve(__dirname, "../views"))
app.set("view engine", "hbs")

app.get("/", (req, res) => {
  //res.send("hello express world!!")
  res.render("index")
})
app.get("/users", (req, res) => {
  //res.send("users")
  const users = DB.selectAll("users")
  res.render("users", {
    title: "유저!!",
    users: users,
  })
})
app.get("/api/users", (req, res) => {
  const users = DB.selectAll("users")
  res.send(users)
})

app.listen(8080)
