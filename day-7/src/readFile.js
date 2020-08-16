const fs = require("fs")
const path = require("path")

module.exports = function (fileName, cb) {
  const name = path.join(__dirname, `../public/${fileName}.html`)
  fs.readFile(name, "utf-8", (err, data) => {
    if (!err) {
      cb(data)
    }
  })
}
