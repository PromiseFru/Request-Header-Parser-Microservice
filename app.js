var express = require("express");
var app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("hello world");
})

app.get("/api/whoami", (req, res) => {
    var ipAddress = req.ip;
    var language = req.acceptsLanguages();
    var software = req.headers['user-agent'];

    res.json({"ipaddress": ipAddress, "language": language, "software": software});
})

app.listen(port, console.log(`Listening on port ${port}`));