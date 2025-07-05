console.log("Hello World");

const http = require("http");
const hostname = "localhost";
const port = 3333;
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World!");
})

server.listen(port, hostname, () => {
    console.log(`Servidor rodando at http://${hostname}:${port}/`);
})