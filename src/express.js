const express = require("express");
const path = require("path");
const app = express();
const router = express.Router();
const port = 3333;

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/home.html"));
});

router.get("/contato", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/contato.html"));
});

app.use(router);
app.listen(process.env.PORT || port, () => {
    console.log(`Servidor rodando at http://localhost:${port}/`);
});