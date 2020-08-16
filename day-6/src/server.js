const http = require("http");
const logger = require("./logger");

const server = http.createServer((req, res) => {
    logger.log(req.headers["user-agent"])

    switch (req.url) {
        case "/about": return res.end("about suho")
        case "/mypage": return res.end("mypage suho")
        case "/log": return logger.readLog((data) => res.end(data));
        default: return res.end("404 suho")
    }
});
server.listen(8080)
