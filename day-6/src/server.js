const http = require("http");
const log = require("./log");
const server = http.createServer((req, res) => {
    log(req.headers["user-agent"])
    switch (req.url) {
        case "/about": return res.end("about suho")
        case "/mypage": return res.end("mypage suho")
        default: return res.end("404 suho")
    }
});
server.listen(8080)
