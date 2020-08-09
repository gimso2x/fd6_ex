const fs = require("fs")

//console.log(process.argv)

//const filename = process.argv[2]
//const contents = process.argv[3]

const [filename, ...contents] = process.argv.slice(2)
//console.log(process.argv)
//console.log(contents);
fs.writeFile(
    filename,
    contents.join(" "),
    "utf-8",
    (err) => {
        if (err) {
            console.error(err)
        }
    })
// const arrowFunc = (err) => {}
// const func = function(err){}

