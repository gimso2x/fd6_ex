const fs = require("fs")
const dateFns = require("date-fns")

let fileName = ""
function log(message) {
    const date = new Date();
    const logDate = dateFns.format(date, "yyyy.MM.dd HH:mm:ss")
    fileName = `log_${dateFns.format(date, "yyyy_MM_dd_HH")}.txt`

    fs.appendFile(fileName, `${logDate} :: ${message}\n`, "utf-8", (err) => {
      if (err) {
          console.log(err)
      }
    })
}

const readLog = (cb) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
        if (err) {
            return res.end("err")
        }
        return cb(data)
    })
}

module.exports = {
    log: log,
    readLog: readLog
}
